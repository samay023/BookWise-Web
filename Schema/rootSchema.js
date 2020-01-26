const { gql } = require("apollo-server");
const clientSchema = require("./clientSchema");
const sessionSchema = require("./sessionSchema");
const userSchema = require("./userSchema");

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
    postcode: Int
    state: String
  }

  input AddressInput {
    streetNumber: Int
    streetName: String
    suburb: String
    postcode: Int
    state: String
  }
`;

module.exports = [rootSchema, sessionSchema, clientSchema, userSchema];
