const { gql } = require("apollo-server");

module.exports = gql`
  extend type Query {
    getSessions: [Session]
  }

  extend type Mutation {
    addSession(
      title: String
      description: String
      sessionFee: Int
      address: AddressInput
      sessionDate: Date
      sessionStartTime: Date
      sessionEndTime: Date
      notes: String
      clientDetails: String
    ): Session
  }

  type Session {
    id: String
    title: String
    description: String
    sessionFee: Int
    address: Address
    createdDate: Date
    sessionDate: Date
    sessionStartTime: Date
    sessionEndTime: Date
    notes: String
    clientDetails: Client
  }
`;
