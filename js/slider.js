import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
import { fetchMovieData } from "./apis.js";
let movieArr = [];

// see all 버튼 가져오기
const allMovieListBtn = document.getElementById("showAllMoive");
const slideDiv = document.getElementById("swiper");
const slideWapper = document.getElementById("swiper-wrapper");

allMovieListBtn.addEventListener("click", () => {
  slideDiv.style.display = "none";
});

fetchMovieData(1)
  .then((data) => {
    // Handle the fetched movie data here
    data.forEach((e) => {
      movieArr.push(e);
    });
    makeCard();
  })
  .catch((error) => {
    console.error("Error fetching movie data:", error);
  });

// movieArr값 movieCard에 넣기
const makeCard = () => {
  movieArr.forEach((e) => {
    movieCard(e);
  });
};

export const movieCard = (item) => {
  let movieTitle = item.name;
  let moviePoster = item.poster_path;
  let movieVote = item.vote_average;

  let movieCard = document.createElement("div");
  movieCard.className = "swiper-slide";
  movieCard.style.width = "200px";

  // movie card
  movieCard.innerHTML = `
  <div class="slide-back">
  </div> 
  <img class="slide-img" src ="http://image.tmdb.org/t/p/w200/${moviePoster}" />
  <p class="slide-title">${movieTitle}</p>
  <div class="slide-div">
  <p>⭐</p>
  <p class="slide-vote">${movieVote}</p>
  `;
  // Div안에 카드 넣기
  slideWapper.appendChild(movieCard);
};

let swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  loop: true,
  observer: true,
  observeParents: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  spaceBetween: 50,
});
