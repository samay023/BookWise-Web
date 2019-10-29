const { gql } = require('apollo-server');

const rootSchema = gql`
    type Query {
        hello: String
    }
`;

module.exports = rootSchema;