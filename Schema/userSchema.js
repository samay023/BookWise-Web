const { gql } = require("apollo-server");

module.exports = gql`
  extend type Query {
    getAllUsers: [User]
    getUser (id:String): User
    login(email: String!, password: String!) : AuthData!
  }

  extend type Mutation {
    addUser(
        name: String
        email: String
        password: String
        businessName: String
        ABN: Int
    ): User

    updateUser(
        id: String
        name: String
        email: String
        businessName: String
        ABN: Int
    ): User
  }

  type User {
    id: String
    name: String
    email: String
    password: String
    businessName: String
    createdDateTime: Date
    ABN: Int
  }

  type AuthData {
      user: User
      token: String
      tokenExpiration: String
  }
`;
