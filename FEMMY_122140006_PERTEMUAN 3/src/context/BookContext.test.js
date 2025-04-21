import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BookProvider, useBookContext } from './BookContext';

// Test component that consumes the BookContext
const TestComponent = () => {
  const { books, addBook, editBook, deleteBook } = useBookContext();

  return (
    <div>
      <button onClick={() => addBook({ title: 'A', author: 'Author A', status: 'milik' })}>
        Add
      </button>
      <button
        onClick={() => {
          if (books[0]) editBook(books[0].id, { title: 'A Edited', author: 'Author A', status: 'baca' });
        }}
      >
        Edit
      </button>
      <button
        onClick={() => {
          if (books[0]) deleteBook(books[0].id);
        }}
      >
        Delete
      </button>
      <ul>
        {books.map((b) => (
          <li key={b.id}>{`${b.title}-${b.author}-${b.status}`}</li>
        ))}
      </ul>
    </div>
  );
};

describe('BookContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('adds a book', () => {
    render(
      <BookProvider>
        <TestComponent />
      </BookProvider>
    );

    fireEvent.click(screen.getByText('Add'));
    expect(screen.getByText(/A-Author A-milik/)).toBeInTheDocument();
  });

  test('edits a book', () => {
    render(
      <BookProvider>
        <TestComponent />
      </BookProvider>
    );

    fireEvent.click(screen.getByText('Add'));
    fireEvent.click(screen.getByText('Edit'));
    expect(screen.getByText(/A Edited-Author A-baca/)).toBeInTheDocument();
  });

  test('deletes a book', () => {
    render(
      <BookProvider>
        <TestComponent />
      </BookProvider>
    );

    fireEvent.click(screen.getByText('Add'));
    expect(screen.getByText(/A-Author A-milik/)).toBeInTheDocument();

    fireEvent.click(screen.getByText('Delete'));
    expect(screen.queryByText(/A-Author A-milik/)).toBeNull();
  });
});
