const SessionResolver = require("./sessionResolver");

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    getSessions: (parent, args, context) => {
      return SessionResolver.getAllSessions();
    }
  },
  Mutation: {
    addSession: (parent, args) => {
      return SessionResolver.addSession(args);
    }
  }
};

module.exports = resolvers;
