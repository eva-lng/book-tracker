const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const passport = require("passport") // helps handle authentication
const session = require("express-session") // handles cookies and storing sessions (have logged in users)
const MongoStore = require("connect-mongo") // handles cookies and storing sessions (have logged in users)
const methodOverride = require("method-override")
const flash = require("express-flash") // flash notificaion of invalid password
const logger = require("morgan") // logs requests coming through
const connectDB = require("./config/database")
const mainRoutes = require("./routes/main")
const bookRoutes = require("./routes/books")
const quoteRoutes = require("./routes/quotes")

// Set up env
require("dotenv").config({path: "./config/.env"})

// Passport config
require("./config/passport")(passport)

// DB connection
connectDB()

// Setting up template engine
app.set("view engine", "ejs") // setting up EJS for Views
app.use(express.static("public")) // public folder
app.use(express.urlencoded({ extended: true })) // functions as body parser
app.use(express.json()) // functions as body parser
app.use(logger("dev")) // to log http requests
app.use(methodOverride("_method"))
app.use(cors())

// Sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
  })
)
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Set up flash
app.use(flash())

app.use("/", mainRoutes)
app.use("/books", bookRoutes)
app.use("/quotes", quoteRoutes)

const port = process.env.PORT || 4000
app.listen(process.env.PORT, ()=>{
    console.log(`[SUCCESS] Server is running on port ${port}`)
})