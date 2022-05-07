const mongoose = require("mongoose")

const reclamationSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    address: { type: String },
    message: { type: String },
    statusbar: { type: String }

  },
  {
    timestamps: { currentTime: () => Date.now() },
  }
);

module.exports = mongoose.model("reclamation", reclamationSchema);