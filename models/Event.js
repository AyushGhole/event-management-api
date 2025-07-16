const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    datetime: { type: Date, required: true },
    location: { type: String, required: true },
    capacity: { type: Number, required: true, min: 1, max: 1000 },
    registrations: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
