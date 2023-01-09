require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieparser = require("cookie-parser");
const authRouter = require("./routers/authRouter");

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieparser());

app.use("/api", authRouter);

const port = process.env.PORT || 5000;
const URL = process.env.MONGO_URI;

mongoose.set("strictQuery", true);
mongoose.connect(URL, (err) => {
  if (err) throw err;
  console.log("Connected to MongoDB");
});

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
