const Quote = require("../models/Quote");

module.exports = {
  getQuotes: async (req, res) => {
    try {
      const quotes = await Quote.find({user:req.user.id}).sort({ createdAt: "desc" })
      res.render("quotes.ejs", {quotes: quotes, user: req.user})
    } catch(err) {
      console.log(err)
    }
  },
  addQuote: async (req, res) => {
    try {
      res.render("addQuote.ejs", {user: req.user})
    } catch(err) {
      console.log(err)
    }
  },
  saveQuote: async (req, res) => {
    try {
      await Quote.create({
        text: req.body.quoteText,
        bookTitle: req.body.bookName,
        user: req.user.id
      })
      console.log("Quote has been added!")
      res.redirect("/quotes")
    } catch(err) {
      console.log(err)
    }
  },
  // updateBook: async (req, res) => {
  //   try {
  //     const book = await Book.findById(req.params.id)
  //     const newStatus = book.status === "currently reading' ? 'read' : 'currently reading"
  //     await Book.findByIdAndUpdate(req.params.id, {
  //       status: newStatus
  //     })
  //     console.log("Book has been updated")
  //     res.redirect("/books")
  //   } catch(err) {
  //     console.log(err)
  //     res.status(500).json({ error: "Failed to update the book" })
  //   }
  // },
  // deleteBook: async (req, res) => {
  //   try {
  //     await Book.deleteOne({ _id: req.params.id })
  //     console.log("Deleted Book")
  //     res.redirect("/books")
  //   } catch(err) {
  //       console.log(err)
  //   }
  // }
}