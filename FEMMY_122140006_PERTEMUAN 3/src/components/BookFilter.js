import React from 'react';
import PropTypes from 'prop-types';

const BookFilter = ({ filter, search, onFilterChange, onSearchChange }) => {
  return (
    <div className="flex gap-4 mb-4">
      <select
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
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
        onChange={(e) => onSearchChange(e.target.value)}
        className="border p-2 flex-1"
      />
    </div>
  );
};

BookFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default BookFilter;
