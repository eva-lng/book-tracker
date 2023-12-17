// const openAddBookBtn = document.getElementById("openAddBook")
// const closeModalBtns = document.querySelectorAll(".closeModal")
// const modalAddBook = document.getElementById("modalAddBook")
// const modalEditBook = document.getElementById("modalEditBook")
// const deleteBtn = document.querySelectorAll(".delete-btn")
// const editBtn = document.querySelectorAll(".edit-btn")

// open and close modal windows
// openAddBookBtn.addEventListener("click", () => {
//   modalAddBook.classList.add("open")
// })
// Array.from(closeModalBtns).forEach(el => {
//   el.addEventListener("click", () => {
//     modalAddBook.classList.remove("open")
//     modalEditBook.classList.remove("open")
//   })
// })

// Array.from(deleteBtn).forEach(el => {
//   el.addEventListener("click", deleteBook)
// })

// Array.from(editBtn).forEach(el => {
//   el.addEventListener("click", editBook)
// })

// async function deleteBook() {
//   const bookId = this.parentNode.dataset.id
//   try {
//     const response = await fetch("books/deleteBook", {
//       method: "delete",
//       headers: {"Content-Type": "application/json"},
//       body: JSON.stringify({
//         "bookIdFromJSFile": bookId
//       })
//     })
//     const data = await response.json()
//     console.log(data)
//     location.reload()
//   } catch(err) {
//     console.log(err)
//   }
// }

// async function editBook() {
//   modalEditBook.classList.add("open")
//   const bookId = this.parentNode.dataset.id

//   try {
//     const response = await fetch(`/books/getBook/${bookId}`)
//     const bookData = await response.json()

//     // ppopulate form fields with current book details
//     const form = document.querySelector("#modalEditBook form")
//     form.querySelector('input[name="bookTitle"]').value = bookData.title
//     form.querySelector('input[name="bookAuthor"]').value = bookData.author
//     form.querySelector(`input[name="status"][value="${bookData.status}"]`).checked = true

//     form.action = `/books/updateBook/${bookId}`
//   } catch(err) {
//     console.log(err)
//   }
// }