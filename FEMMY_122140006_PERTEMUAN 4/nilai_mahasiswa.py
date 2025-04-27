# Program Data Nilai Mahasiswa

# List data mahasiswa
mahasiswa = [
    {"nama": "Andi", "nim": "A001", "nilai_uts": 80, "nilai_uas": 85, "nilai_tugas": 78},
    {"nama": "Budi", "nim": "A002", "nilai_uts": 65, "nilai_uas": 70, "nilai_tugas": 68},
    {"nama": "Citra", "nim": "A003", "nilai_uts": 90, "nilai_uas": 88, "nilai_tugas": 92},
    {"nama": "Dina", "nim": "A004", "nilai_uts": 55, "nilai_uas": 60, "nilai_tugas": 58},
    {"nama": "Eko", "nim": "A005", "nilai_uts": 45, "nilai_uas": 50, "nilai_tugas": 40},
]

# Hitung nilai akhir dan tentukan grade
for mhs in mahasiswa:
    nilai_akhir = 0.3 * mhs["nilai_uts"] + 0.4 * mhs["nilai_uas"] + 0.3 * mhs["nilai_tugas"]
    mhs["nilai_akhir"] = nilai_akhir

    # Menentukan grade
    if nilai_akhir >= 80:
        mhs["grade"] = "A"
    elif nilai_akhir >= 70:
        mhs["grade"] = "B"
    elif nilai_akhir >= 60:
        mhs["grade"] = "C"
    elif nilai_akhir >= 50:
        mhs["grade"] = "D"
    else:
        mhs["grade"] = "E"

# Tampilkan data mahasiswa
print("\nData Mahasiswa:")
print(f"{'Nama':<10} {'NIM':<8} {'UTS':<5} {'UAS':<5} {'Tugas':<7} {'Akhir':<7} {'Grade':<5}")
print("-" * 50)

for mhs in mahasiswa:
    print(f"{mhs['nama']:<10} {mhs['nim']:<8} {mhs['nilai_uts']:<5} {mhs['nilai_uas']:<5} {mhs['nilai_tugas']:<7} {mhs['nilai_akhir']:.2f}   {mhs['grade']}")

# Cari mahasiswa dengan nilai tertinggi dan terendah
tertinggi = max(mahasiswa, key=lambda x: x["nilai_akhir"])
terendah = min(mahasiswa, key=lambda x: x["nilai_akhir"])

print("\nMahasiswa dengan Nilai Tertinggi:")
print(f"{tertinggi['nama']} ({tertinggi['nim']}) - {tertinggi['nilai_akhir']:.2f} - Grade {tertinggi['grade']}")

print("\nMahasiswa dengan Nilai Terendah:")
print(f"{terendah['nama']} ({terendah['nim']}) - {terendah['nilai_akhir']:.2f} - Grade {terendah['grade']}")
