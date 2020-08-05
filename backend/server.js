const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const config = require("config");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
// const uri = config.get("ATLAS_URI");
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const blogRouter = require("./routes/Blog");
const userRouter = require("./routes/User");
const authRouter = require("./routes/Auth");

app.use("/blogs", blogRouter);
app.use("/user", userRouter);
app.use("/auth", authRouter);
// app.use("/signin", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
