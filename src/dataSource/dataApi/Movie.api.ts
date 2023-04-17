import {
	Movie,
	// AddMovieMutationResponse,
} from '../../__generated__/resolvers-types';
import moviesData from '../data/movie.data';

class MovieAPI {
	movies: Movie[] = moviesData;

	getMovies(): Movie[] {
		return this.movies;
	}

	// addMovie(movie: Movie): Promise<AddMovieMutationResponse> {
	// 	this.movies.push(movie);

	// 	return {
	// 		code: '200',
	// 		success: true,
	// 		message: 'New book added!',
	// 		movie: this.movies[this.movies.length - 1],
	// 	};
	// }
}

export default MovieAPI;
