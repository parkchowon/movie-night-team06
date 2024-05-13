import { Checked } from "./reviewStar.js";

const userName = document.querySelector(".review-name");
const comment = document.querySelector(".review-comment");
const registerBtn = document.querySelector(".review-btn");
const passwordBox = document.querySelector(".password");
const passwordInput = document.querySelector(".password-input");
const passwordBtn = document.querySelector(".password-btn");

let reviewStorage = [];

//review 버튼 클릭 시
registerBtn.addEventListener("click", () => {
  verificateInput();
});

//review 칸 Enter 누를 시
comment.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    verificateInput();
  }
});

//password 버튼 클릭 시
passwordBtn.addEventListener("click", () => {
  verificatePassword();
});

//password 엔터
passwordInput.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    verificatePassword();
  }
});

//모달 창 바깥부분 클릭 시 모달 닫힘
passwordBox.addEventListener("click", (e) => {
  if (e.target === passwordBox) {
    passwordBox.classList.remove("active");
  }
});

//review 유효성 검사 함수
const verificateInput = () => {
  if (userName.value == "") {
    alert("Please Enter the name");
    userName.focus();
  } else if (comment.value == "") {
    alert("Please Enter the comment");
    comment.focus();
  } else if (comment.value.length < 10) {
    alert("Please include at least 10 characters");
    comment.focus();
  } else {
    //유효성 충족 시 모달 창 뜨게
    passwordBox.classList.add("active");
  }
};

//password 유효성 검사 함수
const verificatePassword = () => {
  //빈칸 등록시
  if (passwordInput.value == "") {
    alert("Please Enter the password");
    passwordInput.focus();
  } else if (passwordInput.value.includes(" ")) {
    //공백 포함시
    alert("Don't include blank spaces");
    passwordInput.focus();
  } else if (passwordInput.value.length < 6) {
    alert("Please include at least 6 characters");
    passwordInput.focus();
  } else {
    saveReview();
    registReview();
    resetInput();
    passwordBox.classList.remove("active");
  }
};

//리뷰 배열에 저장하는 함수
const saveReview = () => {
  const totalreviews = JSON.parse(localStorage.getItem("reviews"));
  reviewStorage = totalreviews ? JSON.parse(localStorage.getItem("reviews")) : [];

  const review = {
    id: Date.now(), //id 값 추가
    movieId: localStorage.getItem("currentID"),
    name: userName.value,
    comment: comment.value,
    star: Checked,
    password: passwordInput.value,
  };

  reviewStorage.push(review); //배열에 review값 넣기
};

//리뷰 등록함수
const registReview = () => {
  localStorage.setItem("reviews", JSON.stringify(reviewStorage));
  window.location.reload();
};

//input reset함수
const resetInput = () => {
  userName.value = "";
  comment.value = "";
  passwordInput.value = "";
};
