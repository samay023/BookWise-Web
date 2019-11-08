const Session = require("../models/Session");
const mongoose = require("mongoose");

const getAllSessions = async () => {
  const AllSessions = await Session.find().populate({
    path: "client",
    model: "client"
  });
  console.log(AllSessions[3]);
  console.log(AllSessions[3].hasOwnProperty("client"));
  return AllSessions;
};

const addSession = async session => {
  let newSession = new Session({
    eventType: session.eventType,
    description: session.description,
    sessionFee: session.sessionFee,
    address: session.Address,
    createdDate: session.createdDate,
    eventTimings: session.eventTimings,
    client: mongoose.Types.ObjectId(session.client)
  });
  let result = await newSession.save();
  console.log(result);
  result = await Session.findById(result.id).populate("client");
  console.log(result);
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
