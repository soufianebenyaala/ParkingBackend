const router = require("express").Router();
const controller =require("../controllers/parkingControllers");




router.post('/reserve',controller.reserve);
router.put('/reserve/:parkingId',controller.update);
router.delete('/reserve/:id',controller.delete);
router.get('/reserve/:userId',controller.getAllReserved);
router.get('/reserved/:parkId',controller.getAllReservedParking);


// router.put('/change/:id',controller.update);
router.delete('/delete/:id',controller.delete);


module.exports=router;