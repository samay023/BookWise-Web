const { gql } = require('apollo-server');

const rootSchema = gql`
    type Query {
        getEvents: [Event]
    }

    type Mutation {
        addEvent(name: String, date: String, input: AddressInput): [Event]
    }

    input AddressInput {
        streetNumber: Int,
        streetName: String,
        suburb: String,
        state: String,
        country: String
    }

    type Event{
        name: String,
        date: String,
        address: Address
    }

    type Address{
        streetNumber: Int,
        streetName: String,
        suburb: String,
        state: String,
        country: String
    }
    
`;

module.exports = rootSchema;