const { gql } = require("apollo-server");

module.exports = gql`
  extend type Query {
    getClients: [Client]
  }

  extend type Mutation {
    addClient(clientInput: ClientInput): Client
  }

  type Client {
    firstname: String
    surname: String
    address: Address
    email: String
    mobilePhone: String
  }
  input ClientInput {
    firstname: String
    surname: String
    address: AddressInput
    email: String
    mobilePhone: String
  }
`;
