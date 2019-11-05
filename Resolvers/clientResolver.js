const Client = require("../models/Client");

const getAllClients = async () => {
  let Clients = await Client.find();
  return Clients;
};

const addClient = async client => {
  const newClient = new Client(client);
  let result = await newClient.save();

  return result;
};

const ClientResolver = {
  Query: {
    getClients: (parent, args, context) => {
      return getAllClients();
    }
  },
  Mutation: {
    addClient: (parent, args) => {
      return addClient(args.clientInput);
    }
  }
};

module.exports = ClientResolver;
