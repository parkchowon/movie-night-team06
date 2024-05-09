const id = localStorage.getItem("currentID")

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTZkNjJlYmZiNDkxNmM5OThjNTg3MWYyYjM1MmI0ZiIsInN1YiI6IjY2MmE0YmZjZjcwNmRlMDExZTRmZjg3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EhGxKI5JoznlILY4DoELYXqrRv9-ZPsJ5TwhC97ehTQ'
    }
  };
  
  fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`,options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      // 이곳에 코드 짤 예정
      // 1. html에서 js로 img태그를 가져온다
      // <img src="" class="movieimg" alt="...">
      // 2. src에 이미지 주소를 끼워넣는다.
      document.querySelector(".movieimg").src = `https://image.tmdb.org/t/p/w500${response.poster_path}`
      document.querySelector(".movietitle").textContent = response.name

      let genreNames = [];
      let genres = response.genres;
      for (let i = 0; i < genres.length; i++) {
        genreNames.push(genres[i].name);
      }

      document.querySelector(".genre").textContent = `장르 : ${genreNames.join()}`
      document.querySelector(".rating").textContent = `평점 : ${response.vote_average.toFixed(1)}`

      // 1. html에서 js로 개봉연도 p 태그를 가져온다
      // <p class="releaseyr">개봉년도</p>
      document.querySelector(".etperiod").textContent = `방송기간 : ${response.first_air_date} ~ ${response.last_air_date}`

      let seasons = response.seasons.length;

      document.querySelector(".etcount").textContent = `방송횟수 : 시즌 ${seasons} / ${response.number_of_episodes} 에피소드`
      document.querySelector(".summary").textContent = `${response.overview}`

      
    })
    .catch(err => console.error(err));