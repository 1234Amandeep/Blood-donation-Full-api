const express = require("express");
const cors = require("cors");

require("dotenv").config();
const {
  formController,
  deleteController,
} = require("./controllers/formController");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const app = express();

// cors handling
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

mongoose.connect(process.env.DB_URI).then(() => {
  app.listen("4000", () =>
    console.log("connected to db & listening at port 4000")
  );
});

app.post("/form", formController);

app.delete("/all", deleteController);

// test route handler
app.post("/test", (req, res) => {
  console.log(req.body.name);
  res.json({ mssg: "fine" });
});
