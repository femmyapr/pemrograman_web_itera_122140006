import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookFilter from './BookFilter';

describe('BookFilter Component', () => {
  const setup = (filter = '', search = '') => {
    const onFilterChange = jest.fn();
    const onSearchChange = jest.fn();
    render(
      <BookFilter
        filter={filter}
        search={search}
        onFilterChange={onFilterChange}
        onSearchChange={onSearchChange}
      />
    );
    return { onFilterChange, onSearchChange };
  };

  test('renders select and input with initial values', () => {
    const { onFilterChange, onSearchChange } = setup('milik', 'JavaScript');
    const select = screen.getByRole('combobox');
    expect(select.value).toBe('milik');

    const input = screen.getByPlaceholderText(/cari buku.../i);
    expect(input.value).toBe('JavaScript');
  });

  test('calls onFilterChange when select value changes', () => {
    const { onFilterChange } = setup();
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'baca' } });
    expect(onFilterChange).toHaveBeenCalledWith('baca');
  });

  test('calls onSearchChange when input value changes', () => {
    const { onSearchChange } = setup();
    const input = screen.getByPlaceholderText(/cari buku.../i);
    fireEvent.change(input, { target: { value: 'react' } });
    expect(onSearchChange).toHaveBeenCalledWith('react');
  });

  test('renders all status options', () => {
    setup();
    expect(screen.getByRole('option', { name: /semua status/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /dimiliki/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /sedang dibaca/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /ingin dibeli/i })).toBeInTheDocument();
  });
});
