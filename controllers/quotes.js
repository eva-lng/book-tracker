const Quote = require("../models/Quote");

module.exports = {
  getQuotes: async (req, res) => {
    try {
      const quotes = await Quote.find({user:req.user.id})
      const groupedQuotes = groupQuotesByBookTitle(quotes)
      res.render("quotes.ejs", {quotes: groupedQuotes, user: req.user})
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
  deleteQuote: async (req, res) => {
    try {
      await Quote.deleteOne({ _id: req.params.id })
      console.log("Deleted Quote")
      res.redirect("/quotes")
    } catch(err) {
        console.log(err)
    }
  }
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
}

function groupQuotesByBookTitle(quotes) {
  const groupedQuotes = {}
  quotes.forEach(quote => {
    const { bookTitle, text, _id } = quote
    if (!groupedQuotes[bookTitle]) {
      groupedQuotes[bookTitle] = []
    }
    groupedQuotes[bookTitle].push({text, _id})
  })
  return groupedQuotes
}