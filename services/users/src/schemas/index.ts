import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { buildSubgraphSchema } from '@apollo/subgraph';

import { DateScalarResolver, DateScalarType } from './Scalars';
import { UserResolvers, UserTypeDefs } from './User';

const resolvers: any = mergeResolvers([DateScalarResolver, UserResolvers]);

const typeDefs = mergeTypeDefs([DateScalarType, UserTypeDefs]);

const schema = buildSubgraphSchema([
  {
    typeDefs,
    resolvers,
  },
]);

export { typeDefs, resolvers, schema };

export default schema;
