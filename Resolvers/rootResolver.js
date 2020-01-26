const sessionResolver = require("./sessionResolver");
const clientResolver = require("./clientResolver");
const userResolver = require("./userResolver");
// Provide resolver functions for your schema fields
const rootResolver = [sessionResolver, clientResolver, userResolver];

module.exports = rootResolver;
