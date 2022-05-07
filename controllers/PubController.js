let Pub = require("../models/Pub")

let Brand = require("../models/Brand")

exports.getPub = async (req, res) => {
pub = await Pub.find()
res.status(201).send({ pub , message : "Success" })
}


exports.getbrand = async (req, res) => {
    Brand = await Brand.find()
    res.status(201).send({ Brand , message : "Success" })
    }


    exports.addBr = async (req, res) => {

        const { name,
        price,
        } = req.body;
    
        const newCar = new Brand();
    
        newCar.name = name;
        newCar.price = price;

        newCar.save();
    
        res.status(201).send({message: "success", Brand: newCar });
    }

exports.getPubById = async (req, res) => {

    var car
    if (req.params.id) {
        car = await Pub.find({_id :req.params.id})
    } else {
        res.status(404)
    }
    res.status(201).send({ car , message : "Success" })

}


exports.addPub = async (req, res) => {

    const { brand,
    dimension,
    enddate,
    startdate,
    parkingid} = req.body;

    const newCar = new Pub();

    newCar.brand = brand;
    newCar.dimension = dimension;
    newCar.enddate = enddate;
    newCar.startdate = startdate;
    newCar.parkingid = parkingid;
    newCar.save();

    res.status(201).send({message: "success", pub: newCar });
}



exports.editPub = async (req, res) => {

    const { brand,
        dimension,
        enddate,
        startdate} = req.body;

    let car = await Pub.findOneAndUpdate(
        { _id: req.params._id },
        {
            $set: {
                brand : brand,
                dimension:dimension,
                enddate:enddate,
                startdate:startdate
            }
        }
    );

    res.status(201).send({ message: "success",pub: car });
};


exports.deletepub = async (req, res) => {
    constcar = await Pub.findById(req.params._id).remove()
    res.status(201).send({ message: "success"});
}