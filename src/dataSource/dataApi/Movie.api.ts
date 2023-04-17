import { Movie } from '__generated__/resolvers-types';
import movies from '../data/movie';

class MovieAPI {
	movies: Movie[];

	constructor() {
		this.movies = movies;
	}

	getMovies(): Movie[] {
		return this.movies;
	}
}

export default MovieAPI;
