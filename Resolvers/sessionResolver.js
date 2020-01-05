const Session = require("../models/Session");

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

const updateSession = async sessionparam =>{
  let updateSession = await Session.findByIdAndUpdate(sessionparam.id,sessionparam,{
    new:true,
    useFindAndModify:false
  });
  return updateSession;
  
}

const SessionResolver = {
  Query: {
    getSessions: (parent, args, context) => {
      return getAllSessions();
    }
  },
  Mutation: {
    addSession: (parent, args) => {
      return addSession(args);
    },
    updateSession: (parent,args) => {
      return updateSession(args);
    }
  }
};

module.exports = SessionResolver;
