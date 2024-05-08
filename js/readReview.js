//기본전제
let reviewArr = localStorage.getItem("reviews") ? JSON.parse(localStorage.getItem("reviews")) : []
let nowArr = reviewArr.filter( el => el.movieId === localStorage.getItem("currentID"))  

//리뷰 개수
let reviewLen = nowArr.length
let temp_html = `<p class="review-total-number">${reviewLen}</p>`;
document.querySelector(".review-title").insertAdjacentHTML("beforeend", temp_html)

//리뷰 만드는 함수
let makeReview = function (locationId, i) {
  let starObj = {
    0 : `../moon_icon/moon1.png`, 
    1 : `../moon_icon/moon2.png`, 
    2 : `../moon_icon/moon3.png`, 
    3 : `../moon_icon/moon4.png`,
    4 : `../moon_icon/moon5.png`,
    5 : `../moon_icon/moon6.png`
  }  
  let present = nowArr[i]; // 윗쪽 len에서 사용한 선별된 것들 중 i번 부터 s  
  if (!present) return;  //값이 unD or null 값이 와도 프로그램이 깨지지 않도록 함수 중간에서 리턴 시켜 중단
  let name = present.name;
  let comment = present.comment;
  let starNum = present.star;
  let userId = present.id;
  let star = starObj[starNum]
  //<----<button>삭제</button> 겹쳐서 일단 빼둠 후에 추가해서 css 만져서 수정하기----------------------------------------->ㄴ
  let temp_html = `  
    <div class = "review-item" id = "${userId}">
      <span>${name} <img src = ${star} /></span>   
      <p>${comment}</p>
      <div class="btns" id = "${userId}">
        <button class="editBtn">수정</button>
        <button class="deletBtn">삭제</button>
      </div>
    </div>`;

  document.getElementById(locationId).insertAdjacentHTML("beforeend", temp_html);
}

//리뷰 보여주기
window.onload = function () {  
  for (let i = 0; i<3; i++) {  
    makeReview("review-base",i)    
  }
  let len = reviewLen
  for (let i = 3; i<len; i++) {  
    makeReview("review-toggle",i)    
  }  
};

//토글버튼
const toggleBtn = document.getElementById("toggle-btn")
const toggleContent = document.getElementById("review-toggle")
toggleBtn.addEventListener("click", function () {
  toggleContent.classList.toggle("clicked")
  toggleBtn.classList.toggle("clicked")
  if(toggleBtn.innerText === '모두보기' ){ 
    toggleBtn.innerText = '닫기'  
  }else{ 
    toggleBtn.innerText = '모두보기'
  }
})

//수정, 삭제 버튼 작동
let eventDeleg = document.querySelector(".review-list-box")  //이벤트 위임
eventDeleg.addEventListener('click', function(event) {  
  let dataId = event.target.closest(".review-item").id //모달창에 수정중인 내용의 작성자 id를 data-id로 추가 

  if (event.target.matches(".editBtn")) {  //수정버튼 눌렀을 경우
    openModal("pwCheck")
    InputEnterToCheckPassword(dataId, "editReivew") //엔터를 눌렀을 때 실행이 되야 할 로직
  } else if (event.target.matches(".deletBtn")) {  //삭제버튼 눌렀을 경우(삭제 버튼 만들어서 클래스 deletBtn)
    openModal("pwCheck") 
    InputEnterToCheckPassword(dataId, "deletReivew")
  } else {
    return  // 수정, 삭제 버튼을 누른게 아니면 패스
  }
});
    
let checkPassword = function (dataId, nextFunctionType) { 
  let pwInput = document.querySelector(".pw-check .password-input")
  //id 값이 dataId인 obj의 password 값
  let idPw = reviewArr.find( el => el.id === parseInt(dataId)) 
  if (pwInput.value === idPw.password) { //입력받은 값과 현재 이용중인 userid와 상응하는 pw가 맞는지 확인
    nextFunction(dataId, nextFunctionType)
  } else {
    alert("Password is not correct")
  }
  pwInput.value = ""
}

//다음 함수로 이동
let nextFunction = function (dataId, nextFunctionType) {
  if (nextFunctionType === "editReivew" ) {
    openModal("modifiedCommentInput")  //수정할 코멘트 값 받고 #132 사용해서 넘어가기 (input 받고 enter 후에 수정시키기W)
    InputEnterToEditReview (dataId)
  } else {  //"deletReview" 경우
    deletReivew(dataId)
    closeModal()        
  }
}

//review 수정 function
let editReivew = function (dataId) {
  let modifiedComment = document.querySelector(".comment-change input")
  let newArr = reviewArr.map( function (el) {
    if (el.id === parseInt(dataId)) {
      const newReview = {...el, comment : modifiedComment.value}
      return newReview
    } else {
      return el
    }
  })
  //let reviewArr = newArr : 이 경우 함수 안에서 선언되었기에 밖으로 나가면 ef X
  localStorage.setItem( "reviews" , JSON.stringify(newArr))
  window.location.reload() 
}

//review 삭제 function
let deletReivew = function (dataId) {
  localStorage.setItem( "reviews" , JSON.stringify(reviewArr.filter( el => el.id !== parseInt(dataId))))
  window.location.reload()
}

//pw input창 enter 누르면 모달 지우고 pw 확인
let InputEnterToCheckPassword = function (dataId, nextFunctionType) {
  document.querySelector(".pw-check .password-btn").addEventListener("click", () => {   
    checkPassword(dataId, nextFunctionType) 
  })    
}

//comment input창 enter 누르면 모달 지우고 editReview
let InputEnterToEditReview = function (dataId) {
  document.querySelector(".comment-change .password-btn").addEventListener("click", function () {
    editReivew(dataId)
    closeModal()
  })
} //--------여기서 comment input창 enter 누른 후의 행동은 결정되어 있지만 X를 눌렀을 때의 행동이 결정되어있지 않음 ----------->

//모달창 띄우기
let openModal = function (modalType) {  
  if (modalType === "pwCheck") {
    let pwCheck = document.querySelector(".pw-check") 
    pwCheck.classList.add("active")
  } else if (modalType === "modifiedCommentInput") {
    let commentChange = document.querySelector(".comment-change")
    commentChange.classList.add("active")
  } else {return}
  
}

//모달창 지우기
let closeModal = function () {
  document.querySelector(".pw-check").classList.remove("active")
  document.querySelector(".comment-change").classList.remove("active") 
}

//모달창 x버튼 누르면 모달창 닫기 function 실행
document.querySelectorAll(".modal-close").forEach(function (el) {
  el.addEventListener("click", closeModal)
})