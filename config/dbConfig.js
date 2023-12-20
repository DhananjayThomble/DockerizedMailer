const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongoConnectionURI = process.env.MONGODB_URI;

// connect to mongo server
const dbConnection = async () => {
  try {
    await mongoose.connect(mongoConnectionURI, {
      // options for the connect method to parse the URI
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Error connecting to MongoDB Atlas: ", err.message);
    console.error(err);
  }
};

mongoose.set("debug", true); // log mongo queries to console, helpful for debugging

module.exports = dbConnection;
