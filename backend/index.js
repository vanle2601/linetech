const express = require("express")
const cors = require("cors")
const cloudinary = require("cloudinary").v2;

const products = require("./products")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("welcome to our online shopping API...")
});

app.get("/products", (req, res) => {
    res.send(products)
});

const port = process.env.PORT || 5000

app.listen(5000, console.log(`Server running on port ${port}`));