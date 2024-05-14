const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const  dotenv = require("dotenv")
const mongoose = require("mongoose")

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config()


app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );
  app.use(bodyParser.json());



  const PORT = process.env.PORT

  mongoose
  .connect("mongodb://127")
app.listen(PORT, () => console.log("Port is up and running on the port", PORT));