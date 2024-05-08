import getApi from "./apis.js";
import { movieArr } from "./apis.js";
let cardDiv = document.getElementById("cardsDiv"); // card들을 넣을 div

// see all 버튼 가져오기
const allMovieListBtn = document.getElementById("showAllMoive");

// api 받아옴
getApi().then(() => {
  makeCard();
  initialCards();
});

// see all 버튼 클릭 시 이벤트 처리
allMovieListBtn.addEventListener("click", () => {
  // 숨길 요소 가져오기
  const containerToHide = document.getElementById("containerToHide");
  const cardSectionContainer = document.querySelector(".card-section-container");
  
  // 요소 숨기기
  containerToHide.style.display = "none";
  cardSectionContainer.style.display = "none";
  
  // 나머지 기능 수행 (필요에 따라 수정 필요)
  // div.replaceChildren();
  // moveDiv();
  // cardDiv.replaceChildren();
  // showCategory();
  animation();
  makeCard();  
});

// movieArr값 movieCard에 넣기
const makeCard = () => {
  movieArr.forEach((e) => {
    movieCard(e);
  });
};

// (버튼 이벤트 05/07 재영 추가)
// 왼쪽,오른쪽으로 이동하는 버튼 요소를 가져옵니다.
const moveLeftButton = document.getElementById("moveLeftButton");
const moveRightButton = document.getElementById("moveRightButton");

// 왼쪽 버튼 클릭 시 이벤트 처리
moveLeftButton.addEventListener("click", () => {
  const cardSection1 = document.getElementById("cardSection1");
  const cardSection2 = document.getElementById("cardSection2");  

  cardSection1.style.animation = "slideToLeft 1.5s ease-in-out forwards";
  cardSection2.style.animation = "slideToLeft 1.5s ease-in-out forwards";
  
  // 왼쪽으로 이동하도록 스타일을 변경합니다.
  cardSection1.style.order = "1";
  cardSection2.style.order = "2";
});

// 오른쪽 버튼 클릭 시 이벤트 처리
moveRightButton.addEventListener("click", () => {
  const cardSection1 = document.getElementById("cardSection1");
  const cardSection2 = document.getElementById("cardSection2");
  
  cardSection1.style.animation = "slideToRight 1.5s ease-in-out forwards";
  cardSection2.style.animation = "slideToRight 1.5s ease-in-out forwards";

  // 오른쪽으로 이동하도록 스타일을 변경합니다.
  cardSection1.style.order = "2";
  cardSection2.style.order = "1";
});


// 랜딩페이지에서만 5장만 나오도록 함 (05/03 재영 수정)
const initialCards = () => {
  const cards = document.querySelectorAll(".custom-card");
  const cardArr = Array.from(cards); // NodeList를 배열로 변환

  // 두 개의 섹션으로 나누기 위한 인덱스 계산
  const halfwayIndex = Math.ceil(cardArr.length / 2);

  // 첫 번째 섹션에 카드 추가
  const firstSection = document.getElementById("cardSection1");
  cardArr.slice(0, halfwayIndex).forEach((card, index) => {
    if (index < 5) {
      firstSection.appendChild(card.cloneNode(true));
    } else {
      card.style.display = "none"; // 5장 이후의 카드는 숨김
    }
  });

  // 두 번째 섹션에 카드 추가
  const secondSection = document.getElementById("cardSection2");
  cardArr.slice(halfwayIndex).forEach((card, index) => {
    if (index < 5) {
      secondSection.appendChild(card.cloneNode(true));
    } else {
      card.style.display = "none"; // 5장 이후의 카드는 숨김
    }
  });
};

export const movieCard = (item) => {
  let movieTitle = item.name;
  let moviePoster = item.poster_path;  
  let movieVote = item.vote_average;

  let movieCard = document.createElement("slide-image");
  movieCard.classList.add("movie-card");
  movieCard.classList.add("custom-card");

  // movie card
  movieCard.innerHTML = `
    <img class="card-img" src ="http://image.tmdb.org/t/p/w200/${moviePoster}" />
    <p class="card-title">${movieTitle}</p>
    <div class="vote-div">
    <p>⭐</p>
    <p class="card-vote">${movieVote}</p>   
  `;

  // Div안에 카드 넣기
  cardDiv.appendChild(movieCard);
};

