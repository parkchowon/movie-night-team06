import { Checked } from "./reviewStar.js";

const userName = document.querySelector(".review-name");
const comment = document.querySelector(".review-comment");
const registerBtn = document.querySelector(".review-btn");
const passwordBox = document.querySelector(".password");

//버튼 클릭 시
registerBtn.addEventListener("click", () => {
  verificateInput();
  passwordBox.classList.add("active");
});

//Enter 누를 시
comment.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    verificateInput();
    passwordBox.classList.add("active");
  }
});

//유효성 검사 함수
const verificateInput = () => {
  if (userName.value == "") {
    alert("Please Enter the name");
  } else if (comment.value == "") {
    alert("Please Enter the comment");
  } else {
    //registReview();
  }
};

//리뷰 등록 함수
const registReview = () => {
  console.log("클릭" + userName.value, comment.value, Checked);
  const review = {
    name: userName.value,
    comment: comment.value,
    star: Checked,
    password: null,
  };
  localStorage.setItem(userName.value, JSON.stringify(review));
  console.log(JSON.parse(localStorage.getItem(userName.value)));
};
