const productController = require('../controllers/productController.js')

const router = require('express').Router()

router.post("/addProduct", productController.addProduct)

router.get("/allProducts", productController.getAllProducts)
router.get("/published", productController.getPublishedProducts)

router.get("/:id", productController.getOneProducts)
router.put("/:id", productController.updateProducts)
router.delete("/:id", productController.deleteProducts)

module.exports = router