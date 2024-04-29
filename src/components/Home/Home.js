import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import { addMovies } from "../../features/movies/movieSlice";
const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await movieApi.get(
          `?apikey=${APIKey}&s=${movieText}&type=movie`
        );
        console.log("the response from api:", response);
        dispatch(addMovies(response.data));
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchMovie();
  }, []);
  return (
    <div className="banner-img">
      <MovieListing />
    </div>
  );
};

export default Home;
