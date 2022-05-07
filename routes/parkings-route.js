const router = require("express").Router();
const controller =require("../controllers/parkingsControllers");



router.get('/:id',controller.getAll);
router.post('/',controller.create);
router.get('/',controller.get);

router.get('/',controller.getparking);

router.put('/:_id',controller.update);
router.delete('/delete/:id',controller.delete);


module.exports=router;