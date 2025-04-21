import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from '../hooks/useLocalStorage';

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useLocalStorage('books', []);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
  };

  const editBook = (id, updatedBook) => {
    setBooks(books.map(book => book.id === id ? { ...book, ...updatedBook } : book));
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, editBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
};

BookProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useBookContext = () => useContext(BookContext);
