const mongoose = require("mongoose");
const SessionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description:{
      type: String,
    },
    sessionFee: { type: Number },
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
      postcode:{
        type: Number
      }
    },
    createdDate: {
      type: Date,
      default: Date.now
    },
    sessionDate: {
      type: Date,
      required: true
    },
    sessionStartTime: {
      type: Date,
      required: true
    },
    sessionEndTime: {
      type: Date,
      required: true
    },
    notes:{
      type: String
    },
    clientDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client"
    }
  }
);

module.exports = Session = mongoose.model("Session", SessionSchema);
