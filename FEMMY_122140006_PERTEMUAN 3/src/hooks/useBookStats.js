import { useContext, useMemo } from "react";
import { useBookContext } from '../context/BookContext'; 


export default function useBookStats() {
  const { books } = useBookContext();

  return useMemo(() => {
    const stats = {
      owned: books.filter((b) => b.status === "milik").length,
      reading: books.filter((b) => b.status === "baca").length,
      wishlist: books.filter((b) => b.status === "beli").length,
    };
    return stats;
  }, [books]);
}