const express = require("express")
const router = express.Router()
const quotesController = require("../controllers/quotes")
const { ensureAuth } = require("../middleware/auth")

router.get("/", ensureAuth, quotesController.getQuotes)
router.post("/saveQuote", quotesController.saveQuote)
router.delete("/deleteQuote/:id", quotesController.deleteQuote)
router.put("/updateQuote/:id", quotesController.updateQuote)

module.exports = router