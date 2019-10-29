// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
      hello: (root, args, context) => {
        return 'Hello world!'
      }
    }
  }

  module.exports = resolvers;