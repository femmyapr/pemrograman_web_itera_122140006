from abc import ABC, abstractmethod

# Abstract class
class LibraryItem(ABC):
    def __init__(self, item_id, title):
        self._item_id = item_id
        self._title = title

    @abstractmethod
    def display_info(self):
        pass

    @property
    def title(self):
        return self._title

    @property
    def item_id(self):
        return self._item_id


class Book(LibraryItem):
    def __init__(self, item_id, title, author):
        super().__init__(item_id, title)
        self.__author = author

    def display_info(self):
        print(f"[BOOK] ID: {self._item_id}, Title: {self._title}, Author: {self.__author}")


class Magazine(LibraryItem):
    def __init__(self, item_id, title, issue_number):
        super().__init__(item_id, title)
        self.__issue_number = issue_number

    def display_info(self):
        print(f"[MAGAZINE] ID: {self._item_id}, Title: {self._title}, Issue No: {self.__issue_number}")


class Library:
    def __init__(self):
        self.__collection = []

    def add_item(self, item: LibraryItem):
        self.__collection.append(item)
        print(f"Item '{item.title}' berhasil ditambahkan ke perpustakaan.\n")

    def display_all_items(self):
        if not self.__collection:
            print("Perpustakaan kosong.\n")
        else:
            print("Daftar koleksi perpustakaan:")
            for item in self.__collection:
                item.display_info()
            print()

    def search_item(self, keyword):
        found = False
        for item in self.__collection:
            if keyword.lower() in item.title.lower() or keyword == str(item.item_id):
                item.display_info()
                found = True
        if not found:
            print(f"Tidak ditemukan item dengan keyword: '{keyword}'.\n")


# Menu CLI
def main():
    library = Library()

    while True:
        print("=== SISTEM PERPUSTAKAAN ===")
        print("1. Tambah Item")
        print("2. Tampilkan Semua Item")
        print("3. Cari Item")
        print("4. Keluar")
        choice = input("Pilih menu (1-4): ")

        if choice == '1':
            item_type = input("Masukkan jenis item (book/magazine): ").lower()
            item_id = input("ID: ")
            title = input("Judul: ")

            if item_type == "book":
                author = input("Author: ")
                item = Book(item_id, title, author)
                library.add_item(item)
            elif item_type == "magazine":
                issue_number = input("Issue Number: ")
                item = Magazine(item_id, title, issue_number)
                library.add_item(item)
            else:
                print("Jenis item tidak dikenal.\n")

        elif choice == '2':
            library.display_all_items()

        elif choice == '3':
            keyword = input("Masukkan judul atau ID: ")
            library.search_item(keyword)

        elif choice == '4':
            print("Terima kasih telah menggunakan sistem perpustakaan.")
            break
        else:
            print("Pilihan tidak valid.\n")


if __name__ == "__main__":
    main()
