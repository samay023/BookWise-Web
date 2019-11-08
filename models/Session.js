const mongoose = require("mongoose");
const SessionSchema = new mongoose.Schema(
  {
    eventType: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
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
      country: {
        type: String
      }
    },
    createdDate: {
      type: Date,
      default: Date.now
    },
    eventTimings: {
      eventStartDate: {
        type: Date,
        required: true
      },
      eventEndDate: {
        type: Date,
        required: true
      },
      duration: {
        type: Number,
        required: true
      },
      breakPeriod: {
        type: Number
      },
      client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "client"
      }
    }
    //   },
    //   creator: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "user"
    //   },
    //   activity: [
    //     {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: "activities"
    //     }
    // ]
  },
  { strict: false }
);

module.exports = Session = mongoose.model("session", SessionSchema);
