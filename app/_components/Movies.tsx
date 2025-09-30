import { MovieType } from "@/lib/types";
import { MovieCard } from "./MovieCard";

export const Movies = (props: { movies: MovieType[] }) => {
  const { movies } = props;

  return (
    <div className="flex flex-wrap gap-2">
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};
