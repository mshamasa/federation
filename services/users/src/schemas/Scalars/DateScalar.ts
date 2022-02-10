import { GraphQLScalarType } from 'graphql';
import { gql } from 'apollo-server';

const DateScalarType = gql`
  scalar Date
`;

// Temp solution specific for SolarWorks Database
const DateScalarResolver = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value);
    },
    serialize(value) {
      if (!value) return null;

      const date = new Date(value);
      if (Number.isNaN(date.getTime())) {
        return null;
      }

      return date.getTime();
    },
  }),
};

export { DateScalarType, DateScalarResolver };
export default {};
