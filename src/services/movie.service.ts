import { PrismaClient } from '@prisma/client';
import { AddMovieMutationResponse, Movie } from '__generated__/resolvers-types';

class MovieService {
	static getMovies(prisma: PrismaClient): Promise<Movie[]> {
		return prisma.movie.findMany();
	}

	static async addMovie(
		prisma: PrismaClient,
		movie: Movie,
	): Promise<AddMovieMutationResponse> {
		const newMovie = await prisma.movie.create({
			data: {
				title: movie.title,
				duration: movie.duration,
			},
		});
		return {
			code: '200',
			success: true,
			message: 'New movie added 😉',
			movie: newMovie,
		};
	}
}

export default MovieService;
