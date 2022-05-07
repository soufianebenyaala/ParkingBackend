const mongoose = require("mongoose");

const parkingSchema = new mongoose.Schema(
  {
    position: { type: Number, required: true, min: 0, max: 80 },

    startingDate: { type: Date },

    endingDate: { type: Date },

    status: { type: String },

    userId:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    parkingid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "List_Parking"
    },

  },

  {
    timestamps: { currentTime: () => Date.now() },
  }
);

module.exports = mongoose.model("Parking", parkingSchema);
