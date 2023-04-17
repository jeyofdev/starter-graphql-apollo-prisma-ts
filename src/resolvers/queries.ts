import { QueryResolvers } from '__generated__/resolvers-types';
import { IContext } from '../context';

const queries: QueryResolvers = {
	Query: {
		movies: (_: any, __: any, context: IContext) =>
			context.dataSource.movieAPI.getMovies(),
	},
};

export default queries;
