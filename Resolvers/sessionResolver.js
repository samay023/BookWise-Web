const Session = require("../models/Session");
const mongoose = require("mongoose");

const getAllSessions = async () => {
  try{
    const AllSessions = await Session.find().populate("clientDetails");
    return AllSessions;
  }
  catch(e){
    console.log(e);
  }
  
};

const addSession = async session => {
  let newSession = new Session(
    session
  );

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
