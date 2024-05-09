const starsWrap = document.querySelector(".star-container");
let starsList = document.querySelectorAll(".star-icon");
//클릭한 곳 저장해주는 변수
export let Checked = 0;

/**별 마우스 클릭 */
//클릭 이벤트 시 클릭한 별까지 채워짐
starsWrap.addEventListener("click", (e) => {
  removeFill();
  fillStar(e.target.value);
  Checked = e.target.value;
});

/** 별 마우스 호버 */
//마우스 호버 시 별점 채우기
starsWrap.addEventListener("mouseover", () => {
  starsList.forEach((star, idx) => {
    star.addEventListener("mouseenter", (e) => {
      removeFill();
      fillStar(idx + 1);
    });
  });
});
//마우스 호버를 안할 때, 전에 클릭한 곳까지
starsWrap.addEventListener("mouseout", () => {
  if (Checked !== 0) {
    removeFill();
    fillStar(Checked);
  } else {
    removeFill();
  }
});

/** 별 채우고 지우기 함수 */
//별점 채우기
const fillStar = (value) => {
  for (let i = 0; i < value; i++) {
    starsList[i].classList.add("fill");
  }
};
//별점 지우기
const removeFill = () => {
  for (let i = 0; i < 5; i++) {
    starsList[i].classList.replace("fill", "star-icon");
  }
};
