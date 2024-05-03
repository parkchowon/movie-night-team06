import { Checked } from "./reviewStar.js";

const userName = document.querySelector(".review-name");
const comment = document.querySelector(".review-comment");
const registerBtn = document.querySelector(".review-btn");

registerBtn.addEventListener("click", () => {
  console.log("클릭" + userName.value, comment.value, Checked);
});
