import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { useEffect } from "react";

import { addNowPlayingMovies } from "../utils/moviesSlice";
//fetch api data and put it in store
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );
    const jsonData = await data.json();
    dispatch(addNowPlayingMovies(jsonData.results));
    console.log(jsonData);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
