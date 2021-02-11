const { Router } = require('express')
const router = Router();
const { verifyToken } = require("../middleware/auth");
const { verifyAdmin } = require("../middleware/admin");
const CategoryController = require('../controllers/CategoryController')

router.get('/', CategoryController.all);
router.post('/', [verifyToken, verifyAdmin], CategoryController.create);
router.put('/:id', [verifyToken, verifyAdmin], CategoryController.update);
router.get('/edit/:id', [verifyToken, verifyAdmin], CategoryController.edit);
router.get('/:name', CategoryController.show);


module.exports = router;