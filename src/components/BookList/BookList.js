import React, { useState } from 'react';
import { useBookContext } from '../../context/BookContext';
import BookForm from '../BookForm/BookForm';

const BookList = () => {
  const { books, deleteBook } = useBookContext();
  const [editingBook, setEditingBook] = useState(null);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  const filteredBooks = books.filter(book => {
    return (
      (filter ? book.status === filter : true) &&
      (search ? book.title.toLowerCase().includes(search.toLowerCase()) : true)
    );
  });

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2"
        >
          <option value="">Semua Status</option>
          <option value="milik">Dimiliki</option>
          <option value="baca">Sedang Dibaca</option>
          <option value="beli">Ingin Dibeli</option>
        </select>
        <input
          type="text"
          placeholder="Cari buku..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 flex-1"
        />
      </div>

      {filteredBooks.map((book) => (
        <div key={book.id} className="border p-4 rounded shadow-md">
          {editingBook?.id === book.id ? (
            <BookForm
              editMode
              bookToEdit={book}
              onFinish={() => setEditingBook(null)}
            />
          ) : (
            <>
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-gray-700">{book.author}</p>
              <p className="text-sm italic text-gray-500">Status: {book.status}</p>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => setEditingBook(book)}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteBook(book.id)}
                  className="text-red-500 hover:underline"
                >
                  Hapus
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookList;
