const { gql } = require("apollo-server");

const rootSchema = gql`
  type Query {
    getSessions: [Session]
  }

  type Mutation {
    addSession(
      eventType: String
      description: String
      sessionFee: Int
      address: AddressInput
      eventTimings: EventInput
    ): Session
  }
  type Session {
    _id: String
    eventType: String
    description: String
    sessionFee: Int
    address: Address
    createdDate: String
    eventTimings: EventTimings
  }

  type EventTimings {
    eventStartDate: String
    eventEndDate: String
    duration: Int
    breakPeriod: Int
  }

  input EventInput {
    eventStartDate: String
    eventEndDate: String
    duration: Int
    breakPeriod: Int
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

module.exports = rootSchema;
