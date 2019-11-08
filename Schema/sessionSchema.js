const { gql } = require("apollo-server");

module.exports = gql`
  extend type Query {
    getSessions: [Session]
  }

  extend type Mutation {
    addSession(
      eventType: String
      description: String
      sessionFee: Int
      address: AddressInput
      eventTimings: EventInput
      client: String
    ): Session
  }

  type Session {
    id: String
    eventType: String
    description: String
    sessionFee: Int
    address: Address
    createdDate: Date
    eventTimings: EventTimings
    client: Client
  }

  type EventTimings {
    eventStartDate: Date
    eventEndDate: Date
    duration: Int
    breakPeriod: Int
  }

  input EventInput {
    eventStartDate: String
    eventEndDate: String
    duration: Int
    breakPeriod: Int
  }
`;
