# main.py

# Import dengan cara pertama: import semua modul
import math_operations

# Import dengan cara kedua: import fungsi spesifik
from math_operations import luas_persegi_panjang, celsius_to_kelvin

# Menggunakan fungsi dari math_operations

print("\n=== Perhitungan Geometri ===")
print(f"Luas Persegi (sisi 4): {math_operations.luas_persegi(4)}")
print(f"Keliling Persegi (sisi 4): {math_operations.keliling_persegi(4)}")

print(f"Luas Persegi Panjang (5x3): {luas_persegi_panjang(5, 3)}")
print(f"Keliling Persegi Panjang (5x3): {math_operations.keliling_persegi_panjang(5, 3)}")

print(f"Luas Lingkaran (r=7): {math_operations.luas_lingkaran(7)}")
print(f"Keliling Lingkaran (r=7): {math_operations.keliling_lingkaran(7)}")

print("\n=== Konversi Suhu ===")
print(f"25°C dalam Fahrenheit: {math_operations.celsius_to_fahrenheit(25)} °F")
print(f"25°C dalam Kelvin: {celsius_to_kelvin(25)} K")
