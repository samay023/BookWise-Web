const {GraphQLSchema,GraphQLString,GraphQLID, GraphQLNonNull} = require('graphql');

module.exports = new GraphQLSchema({
    name: 'EventType',
    fields:() => ({
        eventType: {type: new GraphQLNonNull(GraphQLString)},
        location: {type: new GraphQLNonNull(GraphQLString)},
        price: {type: new GraphQLNonNull(GraphQLString)},
        time: {type: new GraphQLNonNull(GraphQLString)},
        assingedTo: {type: new GraphQLNonNull(GraphQLString)}
    })
})