Aplikasi API sederhana untuk manajemen matakuliah menggunakan Pyramid dan SQLAlchemy dengan database SQLite.

## Fitur

- CRUD Matakuliah (Create, Read, Update, Delete)
- Database SQLite
- API endpoint yang bisa diuji via Postman atau curl


## Instalasi

2. Buka terminal di folder proyek:
```bash
cd C:\Users\acer\pyramid-matakuliah
````

3. Buat virtual environment (jika belum):
```bash
python -m venv env


4. Aktifkan virtual environment:

* PowerShell:
```powershell
.\env\Scripts\Activate.ps1


> Jika ada error policy, jalankan:
> ```powershell
> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process


* CMD:
```cmd
.\env\Scripts\activate.bat
```

5. Install dependencies:
```bash
pip install pyramid sqlalchemy waitress


## Membuat Database
Jalankan script inisialisasi database:
```bash
cd manajemen_mk


## Menjalankan Server
Setelah database dibuat, jalankan server:
```bash
python _init_.py