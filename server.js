const express = require("express")
const cors = require("cors")

const app = express()

var corOptions = {
    origin: "https://localhost:3306"
}

app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true}))


// routers

const router = require("./routes/productRoutes.js")
app.use("/xxx/products", router)



app.get("/", (req, res) => {
    res.json({message: "hello hello"})
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`SERVER IS SERVER ${PORT}`)
})


