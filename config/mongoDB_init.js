const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

/**
 * Connects MongoDB
 */
const init = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log("Database connected...");
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
};

const mongooseDB = {
  init
};

module.exports = mongooseDB;
