import * as dotenv from 'dotenv'
import express from "express"
import mongoose from "mongoose"
import ProductRoutes from "./routes/Products.routes.js"
import { create } from "express-handlebars"
import UserRoutes from "./routes/User.routes.js"

dotenv.config({path: "./.env"})

mongoose.set('strictQuery', false)
await mongoose.connect("mongodb+srv://"+ process.env.DB_DATABASE +":"+ process.env.DB_PASS +"@cluster0.yf6ukpr.mongodb.net/?"+ process.env.DB_EXTRAS)

const app = express()

const hbs = create({
    extname: ".hbs"
})

app.engine( "hbs", hbs.engine )
app.set("view engine", "hbs")
app.set("views", process.env.VIEWS)

app.use( express.json() )

//Middlewares 
app.use( express.static('./public') )

app.use("/api",ProductRoutes)
app.use("/api",UserRoutes)


//Va al final porque abarca TODAS las rutas
app.get("*", (req, res) => {
    res.render("index", {layout:false, url: req.url, color: "red"}) //   /contacto
 })


app.listen(process.env.APP_PORT)





