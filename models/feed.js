const mongoose = require('mongoose');

module.exports = mongoose.model("Feed", {
  type: String,
  title: String,
  description: String,
  link: String,
  update: Date,
  author: String,
  items: [mongoose.Schema.Types.ObjectId]
});
