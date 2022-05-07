const express = require("express");
const router = express.Router();
const CarController = require("../controllers/PubController");

router.route("/").get(CarController.getPub)
    .post(CarController.addPub)


    router.route("/:_id")
    .put(CarController.editPub)
    .delete(CarController.deletepub)

    router.route("/:id").get(CarController.getPubById)
    router.route("/brand/list").get(CarController.getbrand)

    
    router.route("/brand/add").post(CarController.addBr)



 

module.exports = router;