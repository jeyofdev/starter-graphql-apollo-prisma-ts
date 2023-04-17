import { Movie, MutationResolvers } from '__generated__/resolvers-types';
import { IContext } from '../context';

const mutations: MutationResolvers = {
	Mutation: {
		addMovie: async (_: any, args: Movie, context: IContext) =>
			context.dataSource.movieAPI.addMovie(args),
	},
};

export default mutations;
