import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useBookContext } from '../../context/BookContext';

const BookForm = ({ editMode = false, bookToEdit = {}, onFinish }) => {
  const { addBook, editBook } = useBookContext();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('milik');
  const [error, setError] = useState('');

  useEffect(() => {
    if (editMode && bookToEdit) {
      setTitle(bookToEdit.title);
      setAuthor(bookToEdit.author);
      setStatus(bookToEdit.status);
    }
  }, [editMode, bookToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) {
      setError('Judul dan Penulis wajib diisi');
      return;
    }

    const bookData = { title, author, status };

    if (editMode) {
      editBook(bookToEdit.id, bookData);
    } else {
      addBook(bookData);
    }

    setTitle('');
    setAuthor('');
    setStatus('milik');
    setError('');
    if (onFinish) onFinish();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text"
        placeholder="Judul Buku"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="text"
        placeholder="Penulis"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="border p-2 w-full"
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 w-full"
      >
        <option value="milik">Dimiliki</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {editMode ? 'Update Buku' : 'Tambah Buku'}
      </button>
    </form>
  );
};

BookForm.propTypes = {
  editMode: PropTypes.bool,
  bookToEdit: PropTypes.object,
  onFinish: PropTypes.func,
};

export default BookForm;
