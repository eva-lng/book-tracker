const Book = require('../models/Book');
require('dotenv').config({path: './config/.env'})
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
    console.log(req.user)
    try {
      const books = await Book.find({user:req.user.id}).sort({ createdAt: "desc" });
      const formattedBooks = books.map(book => {
        const formattedDate = book.createdAt.toLocaleDateString('en-US')
        return {...book._doc, createdAt: formattedDate}
      })
      res.render('books.ejs', {books: formattedBooks, user: req.user})
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
      res.status(500).json({ error: 'Failed to retrieve book details' })
    }
  },
  search: async (req, res) => {
    const input = req.query.query
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}&key=${api_key}&langRestrict=en`)
      const data = await response.json()
      res.render('results.ejs', {books: data.items, user: req.user})
      console.log('Search term passed')
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
        status: 'finished', 
        user: req.user.id
      })
      console.log('Book has been added!')
      res.redirect('/books')
    } catch(err) {
      console.log(err)
    }
  },
  updateBook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id)
      const newStatus = book.status === 'reading' ? 'finished' : 'reading'
      await Book.findByIdAndUpdate(req.params.id, {
        status: newStatus
      })
      console.log('Book has been updated')
      res.redirect('/books')
    } catch(err) {
      console.log(err)
      res.status(500).json({ error: 'Failed to update the book' })
    }
  },
  deleteBook: async (req, res) => {
    try {
      await Book.deleteOne({ _id: req.params.id })
      console.log('Deleted Book')
      res.redirect("/books")
    } catch(err) {
        console.log(err)
    }
  }
  // updateBook: async (req, res) => {
  //   try {
  //     const bookId = req.params.id
  //     await Book.findByIdAndUpdate(bookId, {
  //       title: req.body.bookTitle,
  //       author: req.body.bookAuthor,
  //       status: req.body.status
  //     })
  //     console.log('Book has been updated')
  //     res.redirect('/books')
  //   } catch(err) {
  //     console.log(err)
  //     res.status(500).json({ error: 'Failed to update the book' })
  //   }
  // },
}