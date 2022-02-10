import express from 'express';
import http from 'http';

import UsersApolloServer from './src/server';

const app = express();
const server = UsersApolloServer();

const port = 4002;
const URL = `http://localhost:${port}/graphql`;

const httpsServer = http.createServer(app);
httpsServer.listen(port);

const startUsersApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  console.log(`🚀 Server ready at ${URL}`);
};

export default startUsersApolloServer;
