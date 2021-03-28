const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const blog = mongoose.model("Blog", blogSchema);

module.exports = blog;
