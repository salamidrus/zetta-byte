const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// env variable
require("dotenv").config();

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS
app.use(cors());

// DB Configuration
const MONGO_URI = process.env.MONGO_URI;
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
const errorHandler = require("./middlewares/errorHandler");
const blogRouter = require("./routes/blog");
app.use("/blog", blogRouter);
app.use(errorHandler);

// Connection Pool
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error"));
db.once("open", () => console.log("MongoDB Connected!"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
