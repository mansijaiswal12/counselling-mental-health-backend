const mongoose = require("mongoose");

const contactUsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  mobileNo: {
    type: String,
  },
  email: {
    type: String,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
});

const ContactUsmodel = mongoose.model("contactus", contactUsSchema);
module.exports = ContactUsmodel;