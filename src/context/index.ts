import MovieAPI from '../dataSource/dataApi/Movie.api';

export interface IContext {
	dataSource: {
		movieAPI: MovieAPI;
	};
}

export const context = {
	dataSource: {
		movieAPI: new MovieAPI(),
	},
};
