const { ApolloServer } = require("apollo-server");

const rootSchema = require("./Schema/rootSchema");
const rootResolver = require("./Resolvers/rootResolver");
const mongoose = require("./config/mongoDB_init");
const { validateToken , validateLogin} = require("./middleware/Authenticate");
const port = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs: rootSchema,
  resolvers: rootResolver,
  context: ({req}) => {

    // Get the user token from the headers.
    const token = req.headers.authorization || '';

    // Validate the token
    const authData = validateToken(token);
    // Add the auth object to context for every resolver
    return {authData, validateLogin}
  }
});

mongoose.init();

server.listen(port).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
