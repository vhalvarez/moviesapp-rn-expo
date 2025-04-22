import { movieApi } from "@/core/api/movies.api";
import { CreditsResponse } from "@/infrastructure/interfaces/moviedb-credits.reponse";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { MovieDBMovieResponse } from "@/infrastructure/interfaces/moviedb-movie.response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";

export const getMovieCastAction = async (movieId: number) => {
  try {
    const { data } = await movieApi.get<CreditsResponse>(`/${movieId}/credits`);

    return data.cast.map(CastMapper.fromMovieDBCastToEntity);
  } catch (error) {
    console.log(error);
    throw "Cannot load cast";
  }
};
