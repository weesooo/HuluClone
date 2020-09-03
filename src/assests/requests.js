//File name is requests instead of Requests because this is not a componenet for our React App
// using TMBD API here to send get requests and recieve data back
const API_key = "22c45eb9b20eb8dc33c07751c863c5b4";

export default {
  getHot: `/trending/all/week?api_key=${API_key}&language=en-US`,
  getTopRated: `/movie/top_rated?api_key=${API_key}&language=en-US`,
  getActionMovies: `/discover/movie?api_key=${API_key}&with_genres=28`,
  getComedyMovies: `/discover/movie?api_key=${API_key}&with_genres=35`,
  getHorrorMovies: `/discover/movie?api_key=${API_key}&with_genres=27`,
  getRomanticMovies: `/discover/movie?api_key=${API_key}&with_genres=10749`,
  getMysteryMovies: `/discover/movie?api_key=${API_key}&with_genres=9648`,
  getSciFiMovies: `/discover/movie?api_key=${API_key}&with_genres=878`,
  getWesternMovies: `/discover/movie?api_key=${API_key}&with_genres=37`,
  getAnimationMovies: `/discover/movie?api_key=${API_key}&with_genres=16`,
  getTV: `/discover/movie?api_key=${API_key}&with_genres=10770`,
};
