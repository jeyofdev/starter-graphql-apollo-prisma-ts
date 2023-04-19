import { QueryResolvers } from '__generated__/resolvers-types';
import MovieService from '../services/movie.service';
import { IContext } from '../context';

const queries: QueryResolvers = {
	Query: {
		movies: (_: never, __: never, context: IContext) =>
			MovieService.getMovies(context.prisma),
	},
};

export default queries;
