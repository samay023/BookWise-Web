const testAddress = {
    streetNumber: 4,
    streetName: "Madge Street",
    suburb: "Blair Athol",
    state: "SA",
    country: "Australia"
}
const testEvent = {
    name: "Photoshoot",
    date: "12/06/2010",
    address: testAddress
}

const eventArray = [
    testEvent,testEvent
]

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        getEvents: (parent, args, context) => {
        return eventArray
      }
    },
    Mutation: {
        addEvent:(parent, args) =>{
            const newEvent = {
                name: args.name,
                date: args.date,
                address: args.input
            }
            eventArray.push(newEvent)
            return eventArray
        }
    }
  }

  module.exports = resolvers;