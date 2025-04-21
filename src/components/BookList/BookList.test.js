import React from 'react';
import { render, screen } from '@testing-library/react';
import BookList from './BookList';
import { BookContext } from '../../context/BookContext';

describe('BookList Component', () => {
  test('renders empty state when no books', () => {
    render(
      <BookContext.Provider value={{ books: [], deleteBook: () => {}, editBook: () => {} }}>
        <BookList />
      </BookContext.Provider>
    );

    expect(screen.getByText(/tidak ada buku/i)).toBeInTheDocument();
  });

  test('renders books when provided', () => {
    const mockBooks = [
      { id: 1, title: 'Book A', author: 'Author A', status: 'milik' },
      { id: 2, title: 'Book B', author: 'Author B', status: 'baca' },
    ];

    render(
      <BookContext.Provider value={{ books: mockBooks, deleteBook: () => {}, editBook: () => {} }}>
        <BookList />
      </BookContext.Provider>
    );

    expect(screen.getByText(/Book A/i)).toBeInTheDocument();
    expect(screen.getByText(/Book B/i)).toBeInTheDocument();
  });
});
