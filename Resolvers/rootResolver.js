const sessionResolver = require("./sessionResolver");
const clientResolver = require("./clientResolver");
// Provide resolver functions for your schema fields
const rootResolver = [sessionResolver, clientResolver];

module.exports = rootResolver;
