const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  surname: { type: String, required: true },
  address: {
    streetNumber: {
      type: Number
    },
    streetName: {
      type: String
    },
    suburb: {
      type: String
    },
    state: {
      type: String
    },
    country: {
      type: String
    }
  },
  email: { type: String, required: true },
  mobilePhone: { type: String, required: true }
});

module.exports = Client = mongoose.model("client", ClientSchema);
