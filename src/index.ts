import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';

const runServer = async () => {
	const typeDefs = readFileSync('./src/schema/schema.graphql', {
		encoding: 'utf-8',
	});
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
