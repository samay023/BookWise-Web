const { ApolloServer } = require('apollo-server');

const rootSchema = require('./Schema/rootSchema');
const rootResolver = require('./Resolvers/rootResolver');
const port = process.env.PORT || 3000;

const server = new ApolloServer({ typeDefs: rootSchema,resolvers:rootResolver  })

server.listen(port).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
  })

