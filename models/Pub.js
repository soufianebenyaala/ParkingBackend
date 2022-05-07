const mongoose = require("mongoose");

const PubSchema = new mongoose.Schema(
    {
        brand: { type: String },
        dimension: { type: String },
        enddate:{type:String},
        startdate:{type:String},

        parkingid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "List_Parking"
    },
    },
    {
        timestamps: { currentTime: () => Date.now() },
    }
);

module.exports = mongoose.model("Pub", PubSchema);