const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  therapyNames: [
    {
      type: String,
    },
  ],
  comments: {
    type: String,
  },
  rating: {
    type: String,
  },
});

const FeedbackModel = mongoose.model("Feedback", feedbackSchema);
module.exports = FeedbackModel;