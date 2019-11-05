const { gql } = require("apollo-server");
const clientSchema = require("./clientSchema");
const sessionSchema = require("./sessionSchema");

const rootSchema = gql`
  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Address {
    streetNumber: Int
    streetName: String
    suburb: String
    state: String
    country: String
  }

  input AddressInput {
    streetNumber: Int
    streetName: String
    suburb: String
    state: String
    country: String
  }
`;

module.exports = [rootSchema, sessionSchema, clientSchema];
