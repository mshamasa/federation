import type { Resolvers } from '../../../../../../types';

const resolvers: Resolvers = {
  Query: {
    User: async (_root, args) => {
      const { ID } = args;

      return {
        ID,
        name: 'Query#User#hello world!',
      };
    },
  },
  User: {
    __resolveReference: (User) => {
      return {
        ID: User.ID,
        name: '__resolveReference#hello world!',
      };
    },
  },
};

export default resolvers;
