# Aplikasi Manajemen Buku Pribadi

## Deskripsi Aplikasi
Aplikasi ini memungkinkan pengguna untuk:
- Menambah buku baru dengan data judul, penulis, dan status (Dimiliki / Sedang Dibaca / Ingin Dibeli).
- Mengedit dan menghapus buku dari daftar.
- Memfilter daftar buku berdasarkan status.
- Mencari buku dengan kata kunci pada judul.
- Menyimpan data buku di LocalStorage agar persisten di browser.

Aplikasi dibangun menggunakan React.js, memanfaatkan konsep functional components, Hooks, dan React Router.

## Instruksi Instalasi dan Menjalankan
1. **Clone repository**
   ```bash
   git clone https://github.com/username/book-manager-app.git
   cd book-manager-app
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Jalankan di mode development**
   ```bash
   npm start
   ```
   Aplikasi akan terbuka di `http://localhost:3000`.
4. **Build untuk produksi**
   ```bash
   npm run build
   ```


## Screenshot Antarmuka
1. Halaman Home (Form & Daftar Buku)
   ![Home Page](screenshots/home.png)


## Penjelasan Fitur React yang Digunakan
- useState dan useEffect: Mengelola state lokal dan side effect (penyimpanan ke LocalStorage).
- Custom Hooks:
  - `useLocalStorage(key, initialValue)`: Abstraksi penyimpanan ke `window.localStorage`.
  - `useBookStats()`: Menghitung statistik jumlah buku per status.
- React Router: Navigasi multi-halaman antara Home (`/`) dan Stats (`/stats`).
- PropTypes: Validasi tipe props pada komponen.


## Penjelasan Kode dengan Komentar
```js
// src/context/BookContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

export const BookContext = createContext(); // Membuat context kosong

export const BookProvider = ({ children }) => {
  // Hook custom untuk sinkron state dengan LocalStorage
  const [books, setBooks] = useLocalStorage('books', []);

  // Tambah buku baru dengan id unik
  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
  };

  // Edit buku berdasarkan id
  const editBook = (id, updatedBook) => {
    setBooks(books.map(b => b.id === id ? { ...b, ...updatedBook } : b));
  };

  // Hapus buku dari state
  const deleteBook = (id) => {
    setBooks(books.filter(b => b.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, editBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => useContext(BookContext);
```

---

## Laporan Testing
Semua test dilakukan menggunakan Jest dan React Testing Library.

1. Test Unit Komponen
   - `BookForm.test.js`: Validasi form, penambahan buku.
   - `BookList.test.js`: Tampilan saat kosong dan saat ada data.
   - `BookFilter.test.js`: Callback filter & search.
   - `BookContext.test.js`: Fungsi add/edit/delete dari context.

2. Screenshot Hasil Test
   ![Test Results](screenshots/tests.png)