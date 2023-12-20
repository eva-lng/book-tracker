const mongoose = require("mongoose")

const QuoteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  bookTitle: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
})

module.exports = mongoose.model("Quote", QuoteSchema)