import { gql } from 'apollo-server';

const typeDefs = gql`
  extend type Query {
    User(ID: Int): User
  }

  type User @key(fields: "ID") {
    ID: Int!
  }
`;

export default typeDefs;
