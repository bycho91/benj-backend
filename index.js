const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

// Connecting the Mongoose to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection successful"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
app.use("/api/users", require("./routes/authRoutes"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
