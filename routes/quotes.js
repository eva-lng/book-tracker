const express = require("express")
const router = express.Router()
const quotesController = require("../controllers/quotes")
const { ensureAuth } = require("../middleware/auth")

router.get("/", ensureAuth, quotesController.getQuotes)
router.get("/addQuote", quotesController.addQuote)
router.post("/saveQuote", quotesController.saveQuote)

module.exports = router