import React from 'react';
import useBookStats from '../../hooks/useBookStats';

const Stats = () => {
    const stats = useBookStats();
  
    return (
      <div>
        <h2>Statistik Buku</h2>
        <p>Jumlah Buku: {stats.total}</p>
        <p>Milik: {stats.owned}</p>
        <p>Sedang Dibaca: {stats.reading}</p>
        <p>Ingin Dibeli: {stats.toBuy}</p>
      </div>
    );
  };
  
  export default Stats;