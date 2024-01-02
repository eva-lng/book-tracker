const express = require("express")
const router = express.Router()
const quotesController = require("../controllers/quotes")
const { ensureAuth } = require("../middleware/auth")

router.get("/", ensureAuth, quotesController.getQuotes)
router.get("/addQuote", quotesController.addQuote)
router.post("/saveQuote", quotesController.saveQuote)
router.delete("/deleteQuote/:id", quotesController.deleteQuote)
router.get("/getQuote/:id", quotesController.getQuote)
router.put("/updateQuote/:id", quotesController.updateQuote)

module.exports = router