import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookForm from './BookForm';
import { BookProvider } from '../../context/BookContext';

const renderWithProvider = (ui) => {
  return render(<BookProvider>{ui}</BookProvider>);
};

test('renders form fields and submits new book', () => {
  renderWithProvider(<BookForm />);

  const titleInput = screen.getByPlaceholderText(/judul buku/i);
  const authorInput = screen.getByPlaceholderText(/penulis/i);
  const statusSelect = screen.getByRole('combobox');
  const submitButton = screen.getByRole('button', { name: /tambah buku/i });

  fireEvent.change(titleInput, { target: { value: 'Test Book' } });
  fireEvent.change(authorInput, { target: { value: 'Test Author' } });
  fireEvent.change(statusSelect, { target: { value: 'baca' } });

  fireEvent.click(submitButton);

  expect(titleInput.value).toBe('');
  expect(authorInput.value).toBe('');
});
