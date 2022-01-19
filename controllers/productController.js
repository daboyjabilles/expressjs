const db = require("../models")


const Product = db.products
// const Review = db.reviews

//create products

const addProduct = async (req,res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    const product = await Product.create(info)
    res.status(200).send(product)
    console.log(product)
}

//get all products

const getAllProducts = async (req,res) => {
    let products = await Product.findAll({})
    res.status(200).send(products)
}

//get single product

const getOneProducts = async (a,b) => {
    let wew = a.params.id
    let products = await Product.findOne({ where: {id: wew} })
    if(!products){
        b.status(400).send("No Record Found : 404")
        return
    }
    b.status(200).send(products)
}

//update product

const updateProducts = async (req,res) => {
    let id = req.params.id
    
    const product = await Product.update(req.body, { where: {id: id}})

    res.status(200).send(product)
}

//delete product

const deleteProducts = async (req,res) => {
    let id = req.params.id
    await Product.destroy({where : {id: id}})
    res.status(200).send("Deleted!")
}

// get published product

const getPublishedProducts = async (req,res) => {
    const products = await Product.findAll({ where : {published: true}})
    res.status(200).send(products)
}

module.exports = {
    addProduct,
    getAllProducts,
    getOneProducts,
    updateProducts,
    deleteProducts,
    getPublishedProducts
}