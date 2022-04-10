import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import CustomCard from "./component/card/CustomCard";
import MovieList from "./component/movie-list/MovieList";
import SearchForm from "./component/search-form/SearchForm";
import { Title } from "./component/Title";
import { fetchMovie } from "./helper/axiosHelper";
import { randomChar } from "./helper/randomGeneratorHelper";

function App() {
  const [searchedMovie, setSearchMovie] = useState({});
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    //create random character
    const char = randomChar();
    getMovie(char);
  }, []);

  const getMovie = async (search) => {
    const { data } = await fetchMovie(search);
    console.log(data);
    setSearchMovie(data);
  };

  const addToMovieList = (type) => {
    setMovieList([...movieList, { ...searchedMovie, Cat: type }]);
    setSearchMovie({});
  };
  {
  }

  const deleteMovie = (imdbID) => {
    if (window.confirm("Are you sure you want to Delete this?")) {
      const filterMovieList = movieList.filter(
        (movie) => movie.imdbID !== imdbID
      );
      setMovieList(filterMovieList);
    }
  };

  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm getMovie={getMovie} />
        {searchedMovie?.imdbID && (
          <CustomCard movieObj={searchedMovie} func={addToMovieList} />
        )}

        <hr />
        <MovieList movieList={movieList} deleteMovie={deleteMovie} />
      </Container>
    </div>
  );
}

export default App;
