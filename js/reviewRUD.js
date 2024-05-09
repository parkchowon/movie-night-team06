//reviewRUD.js에서 사용할 리뷰 배열
let reviewArr = localStorage.getItem("reviews") ? JSON.parse(localStorage.getItem("reviews")) : [];
let nowArr = reviewArr.filter((el) => el.movieId === localStorage.getItem("currentID"));

//리뷰 개수 표시
let reviewLen = nowArr.length;
let temp_html = `<p class="review-total-number">${reviewLen}</p>`;
document.querySelector(".review-title").insertAdjacentHTML("beforeend", temp_html);

//리뷰 만드는 함수
let makeReview = function (locationId, i) {
  let starObj = {
    0: `../moon_icon/moon1.png`,
    1: `../moon_icon/moon2.png`,
    2: `../moon_icon/moon3.png`,
    3: `../moon_icon/moon4.png`,
    4: `../moon_icon/moon5.png`,
    5: `../moon_icon/moon6.png`,
  };
  let present = nowArr[i]; 
  if (!present) return; //값이 unD or null 값이 와도 프로그램이 깨지지 않도록 함수 중간에서 리턴 시켜 중단
  let name = present.name;
  let comment = present.comment;
  let starNum = present.star;
  let userId = present.id;
  let star = starObj[starNum];
  
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
};

//리뷰 만드는 함수 작동
window.onload = function () {
  for (let i = 0; i < 3; i++) {
    makeReview("review-base", i);
  }
  let len = reviewLen;
  for (let i = 3; i < len; i++) {
    makeReview("review-toggle", i);
  }
};

//토글버튼
const toggleBtn = document.getElementById("toggle-btn");
const toggleContent = document.getElementById("review-toggle");
toggleBtn.addEventListener("click", function () {
  toggleContent.classList.toggle("clicked");
  toggleBtn.classList.toggle("clicked");
  if (toggleBtn.innerText === "모두보기") {
    toggleBtn.innerText = "닫기";
  } else {
    toggleBtn.innerText = "모두보기";
  }
});

// 수정&삭제 part 
let dataId
let parameter2

//pwCheck modal창의 enter를 누르면 비밀번호 확인 함수로 넘어가게 지정
document.querySelector(".pw-check .password-btn").addEventListener("click", () => {
  checkPassword();
});
  
//수정, 삭제 버튼 작동
let eventDeleg = document.querySelector(".review-list-box"); //이벤트 위임
eventDeleg.addEventListener("click", function (event) {
  dataId = event.target.closest(".review-item").id; 

  if (event.target.matches(".editBtn")) {   //수정버튼 눌렀을 경우
    openModal("pwCheck");
    parameter2 = "editReivew";
  } else if (event.target.matches(".deletBtn")) {   //삭제버튼 눌렀을 경우
    openModal("pwCheck");
    parameter2 = "deletReivew";
  } else {
    return; // 수정, 삭제 버튼을 누른게 아니면 패스
  }
});

//패스워드 확인
let checkPassword = function () {  
  let pwInput = document.querySelector(".pw-check .password-input");
  let idPw = reviewArr.find((el) => el.id === parseInt(dataId));
  if (pwInput.value === idPw.password) {
    nextFunction();
  } else {
    alert("Password is not correct");
  }
  pwInput.value = "";
};

//수정 or 삭제 함수로 이동
let nextFunction = function () {
  if (parameter2 === "editReivew") {
    openModal("modifiedCommentInput");
    commentEnterAfterEdit();
  } else {  //"deletReview" 경우
    deletReivew();
    closeModal();
  }
};

//review 수정 function
let editReivew = function () {
  let modifiedComment = document.querySelector(".comment-change input");
  let newArr = reviewArr.map(function (el) {
    if (el.id === parseInt(dataId)) {
      const newReview = { ...el, comment: modifiedComment.value };
      return newReview;
    } else {
      return el;
    }
  });
  localStorage.setItem("reviews", JSON.stringify(newArr));
  window.location.reload();
};

//review 삭제 function
let deletReivew = function () {
  localStorage.setItem("reviews", JSON.stringify(reviewArr.filter((el) => el.id !== parseInt(dataId))));
  window.location.reload();
};

//comment input창 enter 누른 후에 edit function & closeModal 작동
let commentEnterAfterEdit = function () {
  document.querySelector(".comment-change .password-btn").addEventListener("click", function () {
    editReivew();
    closeModal();
  });  
}; 

//모달창 띄우기
let openModal = function (modalType) {
  if (modalType === "pwCheck") {
    let pwCheck = document.querySelector(".pw-check");
    pwCheck.classList.add("active");
  } else if (modalType === "modifiedCommentInput") {
    let commentChange = document.querySelector(".comment-change");
    commentChange.classList.add("active");
  } else {
    return;
  }
};

//모달창 지우기
let closeModal = function () {
  document.querySelector(".pw-check").classList.remove("active");
  document.querySelector(".comment-change").classList.remove("active");
};

//모달창 x버튼 누르면 모달창 닫기 function 실행
document.querySelectorAll(".modal-close").forEach(function (el) {
  el.addEventListener("click", closeModal);
});