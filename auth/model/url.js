const mongoose = require('mongoose')

const urlSchema = mongoose.Schema({
  baseUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
  },
});

const URL = mongoose.model("url", urlSchema);

module.exports=URL
