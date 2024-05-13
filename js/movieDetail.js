const id = localStorage.getItem("currentID");
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTZkNjJlYmZiNDkxNmM5OThjNTg3MWYyYjM1MmI0ZiIsInN1YiI6IjY2MmE0YmZjZjcwNmRlMDExZTRmZjg3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EhGxKI5JoznlILY4DoELYXqrRv9-ZPsJ5TwhC97ehTQ",
  },
};

const fetchMovie = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, options);
  const resJson = await response.json();

  document.querySelector(".movieimg").src = `https://image.tmdb.org/t/p/w500${resJson.poster_path}`;
  document.querySelector(".movietitle").textContent = resJson.name;

  let genreNames = [];
  let genres = resJson.genres;
  for (let i = 0; i < genres.length; i++) {
    genreNames.push(genres[i].name);
  }

  document.querySelector(".genre").textContent = `장르 : ${genreNames.join()}`;
  document.querySelector(".rating").textContent = `평점 : ${resJson.vote_average.toFixed(1)}`;

  // 1. html에서 js로 개봉연도 p 태그를 가져온다
  document.querySelector(".etperiod").textContent = `방송기간 : ${resJson.first_air_date} ~ ${resJson.last_air_date}`;

  let seasons = resJson.seasons.length;

  document.querySelector(
    ".etcount",
  ).textContent = `방송횟수 : 시즌 ${seasons} / ${resJson.number_of_episodes} 에피소드`;
  document.querySelector(".summary").textContent = `${resJson.overview}`;
};

const loadingPage = document.getElementById("load");

window.addEventListener("DOMContentLoaded", () => {
  fetchMovie();
});

window.setTimeout(() => {
  loadingPage.style.display = "none";
}, 600);
