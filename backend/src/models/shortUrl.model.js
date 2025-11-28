import mongoose from "mongoose";

const shorturl = new mongoose.Schema({
  full_url: {
    type: String,
    required: true,
  },
  short_url: {
    type: String,
    required: true,
    index: true,
    unique: "true",
  },
  clicks: {
    type: Number,
    default: 0,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});

const url_schema = mongoose.model("short_url", shorturl);
export default url_schema;
