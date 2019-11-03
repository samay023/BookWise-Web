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
  getAllSessions,
  addSession
};

module.exports = SessionResolver;
