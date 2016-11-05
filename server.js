import express from 'express';
import { apolloExpress, graphiqlExpress } from 'apollo-server';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import * as bodyParser from 'body-parser';
import schema from './data/schema';
import resolvers from './data/resolvers';

const GRAPHQL_PORT = 8080;

const graphQLServer = express();

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});

addMockFunctionsToSchema({
  schema: executableSchema,
});

graphQLServer.use('/graphql', bodyParser.json(), apolloExpress({
  schema: executableSchema,
  context: {},
}));

graphQLServer.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));
