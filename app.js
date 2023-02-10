const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/", router);

//MongoDb connection
const PORT = process.env.PORT || 8080;

mongoose
  .connect(
    "mongodb://localhost:27017/authjwt"
  )
  .then(() => {
    app.listen(PORT);
    console.log(`Listening on port ${PORT} && Database is connected successfully at http://localhost:8080`);
  });

//password:- bApXbrKhP1cVKclJ
