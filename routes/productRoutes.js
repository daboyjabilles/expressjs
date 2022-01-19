const productController = require('../controllers/productController.js')

const router = require('express').Router()

router.post("/addProduct", productController.addProduct)

router.get("/allProducts", productController.getAllProducts)
router.get("/published", productController.getPublishedProducts)

router.get("/:id", productController.getOneProducts)
router.put("/:id", productController.updateProducts)
router.delete("/:id", productController.deleteProducts)

module.exports = router

// const db = require("../models")
// const router = require('express').Router()
// const Product = db.products

// router.get("/published/:id",async (req, res) => {
//     getID = req.params.id;
//     const products = await Product.findAll({ where : {id: getID}})
//     res.status(200).send(products);
// });
    
// module.exports = router