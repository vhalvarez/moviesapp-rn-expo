import { movieApi } from "@/core/api/movies.api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const popularMoviesAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/popular");

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
    
    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
