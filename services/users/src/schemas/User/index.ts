import { mergeTypeDefs } from '@graphql-tools/merge';

// Schema
import Types from './graphql/Types';

// Resolvers
import Queries from './resolvers/Queries';

const UserResolvers = { ...Queries };
const UserTypeDefs = mergeTypeDefs([Types]);

export { UserTypeDefs, UserResolvers };
