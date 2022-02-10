import {
  ApolloServerPluginInlineTrace,
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginUsageReportingDisabled,
} from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';

import { schema } from './schemas';

const UsersApolloServer = () => {
  const server = new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginInlineTrace(),
      ApolloServerPluginUsageReportingDisabled(),
      ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });

  return server;
};

export default UsersApolloServer;
