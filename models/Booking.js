const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "clients"
  },
  bookingTime: {
    startTime: { type: Date },
    endTime: { type: Date }
  }
});

module.exports = Booking = mongoose.model("booking", BookingSchema);
