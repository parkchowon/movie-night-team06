
//기본전제
let reviewArr = JSON.parse(localStorage.getItem("reviews"))
let nowArr = reviewArr.filter( el => el.movieId === localStorage.getItem("currentID"))

//리뷰 개수
let reviewLen = nowArr.length
let temp_html = `<p class="review-total-number">${reviewLen}</p>`;
document.querySelector(".review-title").insertAdjacentHTML("beforeend", temp_html)

//리뷰 만드는 함수
let makeReview = function (locationId, i) {
  let starObj = {
    1 : `../moon_icon/moon1.png`, 
    2 : `../moon_icon/moon2.png`, 
    3 : `../moon_icon/moon3.png`,
    4 : `../moon_icon/moon4.png`,
    5 : `../moon_icon/moon5.png`
  }  
  let present = nowArr[i]; // 윗쪽 len에서 사용한 선별된 것들 중 i번 부터 s  
  if (!present) return;  //값이 unD or null 값이 와도 프로그램이 깨지지 않도록 함수 중간에서 리턴 시켜 중단
  let name = present.name;
  let comment = present.comment;
  let starNum = present.star;
  let star = starObj[starNum]

  let temp_html = `  
    <div class="review-item">
      <span>${name} <img src = ${star} /></span>   
      <p>${comment}</p>
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
})

