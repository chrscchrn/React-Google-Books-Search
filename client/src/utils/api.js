import axios from "axios";

export default {
  // Search all books
  searchBooks: (query) => {
    query.split(' ').join('+');
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCGxBhow_TPWZtwZT1sc3doOjAQXtqKsf0`);
  },

  // Saves a book to the database
  saveBook: (bookData) => {
    return axios.post("/api/books", bookData);
  },

  // Gets all books
  getBooks: () => {
    return axios.get("/api/books");
  },

  // Deletes the book with the given id
  deleteBook: (id) => {
    return axios.delete("/api/books/" + id);
  },
};

// 