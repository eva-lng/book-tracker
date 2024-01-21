const Book = require("../models/Book");
require("dotenv").config({path: "./config/.env"})
const api_key = process.env.API_KEY;

module.exports = {
  getProfile: async (req, res) => {
    try {
      const books = await Book.find({ user: req.user.id });
      res.render("profile.ejs", { books: books, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getBooks: async (req, res) => {
    try {
      const books = await Book.find({user: req.user.id}).sort({ createdAt: "desc" });
      const formattedBooks = books.map(book => {
        const formattedDate = book.createdAt.toLocaleDateString("en-US")
        return {...book._doc, createdAt: formattedDate}
      })
      res.render("books.ejs", {books: formattedBooks, user: req.user})
    } catch(err) {
      console.log(err)
    }
  },
  getBooksRead: async (req, res) => {
    try {
      const books = await Book.find({user: req.user.id, status: "read"}).sort({ createdAt: "desc" });
      const formattedBooks = books.map(book => {
        const formattedDate = book.createdAt.toLocaleDateString("en-US")
        return {...book._doc, createdAt: formattedDate}
      })
      res.render("books.ejs", {books: formattedBooks, user: req.user})
    } catch(err) {
      console.log(err)
    }
  },
  getBooksReading: async (req, res) => {
    try {
      const books = await Book.find({user: req.user.id, status: "reading"}).sort({ createdAt: "desc" });
      const formattedBooks = books.map(book => {
        const formattedDate = book.createdAt.toLocaleDateString("en-US")
        return {...book._doc, createdAt: formattedDate}
      })
      res.render("books.ejs", {books: formattedBooks, user: req.user})
    } catch(err) {
      console.log(err)
    }
  },
  getBooksWishlist: async (req, res) => {
    try {
      const books = await Book.find({user: req.user.id, status: "wishlist"}).sort({ createdAt: "desc" });
      const formattedBooks = books.map(book => {
        const formattedDate = book.createdAt.toLocaleDateString("en-US")
        return {...book._doc, createdAt: formattedDate}
      })
      res.render("books.ejs", {books: formattedBooks, user: req.user})
    } catch(err) {
      console.log(err)
    }
  },
  viewBook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id)
      res.render("viewBook.ejs", { book: book, user: req.user });
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: "Failed to retrieve book details" })
    }
  },
  search: async (req, res) => {
    const input = req.query.q
    try {
      let savedBooks = []
      let user = null
      if (req.user) {
        savedBooks = await Book.find({ user: req.user.id }, "apiID status")
        user = req.user
      }
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}&key=${api_key}&maxResults=30`)
      const data = await response.json()
      res.render("results.ejs", {books: data.items, user, savedBooks})
      console.log("Search term passed")
    } catch(err) {
      console.log(err)
    }
  },
  getBookInfo: async (req, res) => {
    const volumeID = req.params.id;
    try {
      const savedBooks = await Book.find({ user: req.user.id }, "apiID status")
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${volumeID}?key=${api_key}`)
      const data = await response.json()
      res.render("getBookInfo.ejs", {book: data, user: req.user, savedBooks})
    } catch(err) {
      console.log(err)
    }
  },
  addBook: async (req, res) => {
    try {
      await Book.create({
        title: req.body.title,
        subtitle: req.body.subtitle, 
        authors: req.body.authors,
        description: req.body.description,
        year: req.body.year,
        pageCount: req.body.pageCount,
        publisher: req.body.publisher,
        imageUrl: req.body.imageUrl,
        status: "read", 
        user: req.user.id,
        apiID: req.body.apiID
      })
      console.log("Book has been added!")
      res.redirect("/books")
    } catch(err) {
      console.log(err)
    }
  },
  updateBook: async (req, res) => {
    try {
      const newStatus = req.body.newStatus
      await Book.findByIdAndUpdate(req.params.id, {
        status: newStatus
      })
      console.log("Book has been updated")
      res.redirect("/books")
    } catch(err) {
      console.log(err)
      res.status(500).json({ error: "Failed to update the book" })
    }
  },
  deleteBook: async (req, res) => {
    try {
      await Book.deleteOne({ _id: req.params.id })
      console.log("Deleted book")
      res.redirect("/books")
    } catch(err) {
      console.log(err)
    }
  }
}