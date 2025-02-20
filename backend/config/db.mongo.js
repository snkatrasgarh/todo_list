const mongoose = require("mongoose");
require("dotenv").config();

const URI = process.env.MONGO_CLOUD;

if (!URI) {
  console.error("MongoDB connection string is missing in environment variables.");
  process.exit(1);
}

const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(URI)
    console.log(`MongoDB connected`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

// Handling connection errors outside of async function
mongoose.connection.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

module.exports = ConnectDB;
