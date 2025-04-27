# Program Penghitung BMI

# Input berat badan (kg) dan tinggi badan (meter)
berat = float(input("Masukkan berat badan (kg): "))
tinggi = float(input("Masukkan tinggi badan (m): "))

# Hitung BMI
bmi = berat / (tinggi * tinggi)

# Menentukan kategori BMI
print(f"\nBMI Anda adalah: {bmi:.2f}")

if bmi < 18.5:
    print("Kategori: Berat badan kurang")
elif 18.5 <= bmi < 25:
    print("Kategori: Berat badan normal")
elif 25 <= bmi < 30:
    print("Kategori: Berat badan berlebih")
else:
    print("Kategori: Obesitas")
