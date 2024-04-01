require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ContactUsmodel = require("./model/contactForm");
const FeedbackModel = require("./model/feedbackForm");

const server = express();
const mongodbUri = process.env.MONGODB_URI;

server.use(express.json());
server.use(cors());

mongoose.connect(mongodbUri);

server.get("/", (req, res) => {
  res.send("Home route");
});

// contactus form route
server.post("/contactus", async (req, res) => {
  try {
    const { name, mobileNo, email, date, time } = req.body;
    console.log(name, mobileNo, email, date, time);

    const contactdata = await ContactUsmodel.create({
      name,
      mobileNo,
      email,
      date,
      time,
    });

    res.status(201).json(contactdata);
  } catch (err) {
    console.error(err);
    res.status(500).json("Internal server Error");
  }
});

// feedback form route
server.post("/feedback", async (req, res) => {
  try {
    const { name, comments, rating, therapyNames } = req.body;
    console.log(name, comments, rating, therapyNames);

    const feedbackData = await FeedbackModel.create({
      name,
      comments,
      rating,
      therapyNames,
    });

    res.status(201).json(feedbackData);
  } catch (err) {
    console.error(err);
    res.status(500).json("Internal server Error");
  }
});

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`server running on port http://localhost:${port}`);
});



