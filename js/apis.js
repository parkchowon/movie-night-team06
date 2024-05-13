// 05/09 apis.js 기능 수정(재영)
const fetchMovieData = (page) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmY3YmIwNjI3MTAxMTc3Y2EyZjFjZDY5ODVjNGQ1OCIsInN1YiI6IjY2MjhiODc4Mzk1NDlhMDE4OTAxNGVlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uD1flqSov2jhF19LcIE3vj-O8ouXl0zVO9tW_A40NDA",
    },
  };

  return new Promise((resolve, reject) => {
    let url = `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${page}`;
    fetch(url, options)
      .then((response) => response.json())
      .then(({ results }) => {
        resolve(results);
      })
      .catch((err) => reject(err));
  });
};

export { fetchMovieData };
