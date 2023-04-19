# starter graphql apollo prisma

## Tools

- [Graphql](https://graphql.org/) A query language for your API.
- [Apollo-server](https://www.apollographql.com/docs/apollo-server) Spec-compliant GraphQL server that's compatible with any GraphQL client.
- [Prisma](https://www.prisma.io/) Next-generation Node.js and TypeScript ORM.
- [Postgres](https://www.postgresql.org/) The Open Source Relational Database.
- [Typescript](https://www.typescriptlang.org/) JavaScript with syntax for types.
- [Codegen](https://the-guild.dev/graphql/codegen/) Generate code from GraphQL schema.
- [Prettier](https://prettier.io/) Code formatter.
- [ESLint](https://eslint.org/) Find and fix problems in JavaScript and typescript code.
- [Prettier](https://prettier.io/) Code formatter.
- [husky](https://typicode.github.io/husky) Husky improves your commits.

## Getting starting

creates the .env file in the root directory of the project, which is used for defining environment variables

### Prerequisites

- Recommended `node`
- `npm`

### Dependencies

Install all dependencies :

```sh
cd starter-graphql-apollo-prisma-ts && npm install
```

### Environment variables

Creates the .env file in the root directory of the project :

```sh
$ touch .env
```

In the .env, set your postgres database url :

```sh
PORT=4500
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

### Database

To map your data model to the database schema, you need to use the first prisma migrate :

```sh
$ npx prisma migrate dev --name init
```

When the migration is executed, add the 1st data :

```sh
$ npx prisma db seed
```

### Start the server

Run your GraphQL server with this command :

```sh
npm run dev
```

Navigate to http://localhost:4000 in your browser to explore the API with the Apollo Playground.
