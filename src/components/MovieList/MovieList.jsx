import './MovieList.scss';
import movies from '../../api/movies.json';
import { MovieCard } from '../MovieCard';

export const MovieList = () => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
