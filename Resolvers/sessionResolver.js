const Session = require("../models/Session");

const getAllSessions = async () => {
  let Sessions = await Session.find();
  return Sessions;
};

const addSession = async session => {
  const newSession = new Session(session);
  let result = await newSession.save();
  return result;
};

const SessionResolver = {
  Query: {
    getSessions: (parent, args, context) => {
      return getAllSessions();
    }
  },
  Mutation: {
    addSession: (parent, args) => {
      return addSession(args);
    }
  }
};

module.exports = SessionResolver;
