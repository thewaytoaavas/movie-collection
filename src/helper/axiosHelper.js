import axios from "axios";

const api = "http://www.omdbapi.com/?apikey=815dbbe9&";
// const api = "https://imdb-api.com/en/API/Search/k_19f4dlge/&";

export const fetchMovie = (title) => {
  //call server
  return axios.get(api + "t=" + title);
};
