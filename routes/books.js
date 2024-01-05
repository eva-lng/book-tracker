const express = require("express")
const router = express.Router()
const booksController = require("../controllers/books")
const { ensureAuth } = require("../middleware/auth")

router.get("/", ensureAuth, booksController.getBooks)
router.get("/read", booksController.getBooksRead)
router.get("/reading", booksController.getBooksReading)
router.get("/viewBook/:id", booksController.viewBook)
router.post("/addBook", booksController.addBook)
router.put("/updateBook/:id", booksController.updateBook)
router.delete("/deleteBook/:id", booksController.deleteBook)

module.exports = router