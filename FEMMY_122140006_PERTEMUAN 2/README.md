Aplikasi yang dibuat adalah dashboard sederhana untuk menampilkan jadwal kuliah. Aplikasi ini bertujuan untuk membantu mahasiswa dalam mengelola jadwal kuliah. Pengguna dapat menambahkan mata kuliah, hari, dan jawa kuliah, kemudian melihat jadwal yang sudah disusun dalam sebuah dashboard yang rapih.

fitur-fitur utama dari aplikasi personal dashboard jadwal kuliah:

# Tambah Jadwal:
-Pengguna dapat menambahkan mata kuliah baru dengan memasukkan informasi seperti nama mata kuliah, waktu, dan ruangan.
-Data yang dimasukkan akan disimpan secara lokal menggunakan localStorage, sehingga tetap ada meskipun halaman dimuat ulang.

# Edit Jadwal:
-Pengguna dapat mengedit jadwal kuliah yang sudah ada.
-Setelah edit, data yang baru langsung diperbarui di localStorage dan tampilan halaman akan disesuaikan.

# Hapus Jadwal:
-Pengguna dapat menghapus mata kuliah dari jadwal mereka.
-Penghapusan ini langsung tercermin di tampilan dan disimpan di localStorage.

# Penyimpanan Lokal: 
Semua data jadwal kuliah disimpan menggunakan localStorage sehingga tetap tersimpan meskipun halaman dimuat ulang atau aplikasi ditutup.

# Tampilan Dinamis:
-Daftar jadwal kuliah ditampilkan secara dinamis menggunakan template literals.
-Tampilan secara otomatis terupdate setiap kali ada perubahan pada jadwal.

# Interaksi Pengguna yang Mudah:
Aplikasi mendukung interaksi pengguna yang intuitif melalui tombol untuk menambah, mengedit, dan menghapus jadwal kuliah.

# Pada bagian html terdapat kode dimana pengguna dapat menginputkan nama matakuliah, hari, dan jam kuliah. kode sebagai berikut :
<form id="scheduleForm">
      <input type="text" id="course" placeholder="Nama Mata Kuliah" required>
      <input type="text" id="day" placeholder="Hari" required>
      <input type="text" id="time" placeholder="Jam" required>
      <button type="submit">Tambah Jadwal</button>
    </form>

# Kemudian terdapat tempat untuk menampilkan daftar jadwal yang sudah ditambahkan dengan kode berikut :
<div id="scheduleList"></div> 


# Variabel CSS (:root): 
Menyimpan warna dan nilai umum seperti warna utama, latar belakang, dan radius sudut untuk digunakan secara konsisten di seluruh aplikasi.

# Pengaturan Dasar untuk body:
Menghilangkan margin default, mengatur font keluarga, latar belakang, warna teks, dan memberikan padding agar tampilan lebih rapi dan nyaman.

# Container Utama (.container): 
Menyediakan area konten utama dengan lebar terbatas, padding, sudut melengkung, dan bayangan untuk memberi efek kedalaman.

# Judul (h1): 
Menyelaraskan teks ke tengah dengan warna dan ukuran yang mencolok, menonjolkan judul halaman.

# Formulir (form):
Menggunakan flexbox untuk menyusun elemen form secara vertikal dengan jarak antar elemen.

# Input Field (input):
Memberikan padding, border, dan efek fokus untuk input yang lebih interaktif dan menarik.

# Tombol (button): 
Menata tombol dengan warna latar belakang yang menonjol dan efek hover untuk interaksi yang responsif.

# Daftar (ul, li): 
Mengatur gaya daftar dengan elemen yang saling terpisah, latar belakang yang lembut, dan efek hover.

# Aksi Tombol (.actions button): 
Menyediakan tombol aksi seperti "simpan" dan "hapus" dengan warna dan efek hover yang berbeda untuk memberi petunjuk aksi kepada pengguna.

# Pengelolaan Data: 
Menggunakan localStorage untuk menyimpan jadwal kuliah, agar data tetap ada meskipun halaman dimuat ulang.

# Kelas ScheduleApp:
Kelas ini menangani tambah, edit, hapus jadwal, serta memperbarui tampilan dan localStorage.

# Metode:
- addSchedule: Menambahkan jadwal baru.

- editSchedule: Mengedit jadwal yang ada.

- deleteSchedule: Menghapus jadwal dari daftar.

# Rendering Dinamis: 
Menggunakan template literals untuk merender daftar jadwal secara dinamis di halaman.

# Interaksi Pengguna:
Event listeners menangani interaksi pengguna untuk menambah, mengedit, atau menghapus jadwal kuliah.

berikut screenshot dashboard : ![screenshot dashoard][dashboard.png] 
