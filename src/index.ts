import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const runServer = async () => {
	const typeDefs = `
  type Movie {
    title: String
    duration: Int
  }

	type Query {
    movies: [Movie]
  }
`;

	const movies = [
		{
			title: 'Avatar',
			duration: 162,
		},
		{
			title: 'Avengers: Infinity War',
			duration: 149,
		},
	];

	const resolvers = {
		Query: {
			movies: () => movies,
		},
	};

	const server = new ApolloServer({
		typeDefs,
		resolvers,
	});

	const { url } = await startStandaloneServer(server, {
		listen: { port: 4000 },
	});

	// eslint-disable-next-line no-console
	console.log(`🚀  Server ready at: ${url}`);
};

runServer();
