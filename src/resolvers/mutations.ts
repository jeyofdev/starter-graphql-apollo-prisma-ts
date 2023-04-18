import { Movie, MutationResolvers } from '__generated__/resolvers-types';
import MovieService from '../services/movie.service';
import { IContext } from '../context';

const mutations: MutationResolvers = {
	Mutation: {
		addMovie: async (_: any, args: Movie, context: IContext) =>
			MovieService.addMovie(context.prisma, args),
	},
};

export default mutations;
