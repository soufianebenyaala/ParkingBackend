const Parking = require("../models/Parking");

exports.getAllReserved = async (req, res) => {
  res.send(await Parking.find({userId : req.params.userId,status:req.query.status}));
};


exports.getAllReservedParking = async (req, res) => {
  res.send(await Parking.find({parkId:req.params.parkId}));
};

exports.reserve = async (req, res) => {
  const { userId, position, endingDate,startingDate, parkingid} = req.body;
  const newparking = new Parking();
  newparking.userId = userId;
  newparking.position = position;
  newparking.startingDate = startingDate;
  newparking.endingDate = endingDate;
  newparking.parkingid = parkingid;
  newparking.status = "RESERVE";
  newparking.save();

  res.status(201).send({ message: "success", parking: newparking });
};

exports.update = async (req, res) => {
  const { endingDate,status} = req.body;


  let parking = await Parking.findByIdAndUpdate(
    { _id: req.params.parkingId },
    {
      $set: {
        status:status,
        endingDate:endingDate,
      },
    }
  );

  res.status(200).send({ message: "success"  , parking : parking});
};



exports.delete = async (req, res) => {
  const parking = await Parking.findById(req.params.id).remove();
  res.status(201).send({ message: "success", parking: parking });
};


