const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  googleCalendar: {
    verified: {
      type: Boolean
    }
  },
  businessName: {
    type: String
  },
  createdDateTime: {
    type: Date,
    default: Date.now
  },
  ABN: {
    type: Number
  }
});

module.exports = User = mongoose.model("user", UserSchema);
