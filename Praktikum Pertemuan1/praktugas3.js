document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;
    
    // Validasi Nama
    const name = document.getElementById("name").value.trim();
    const nameError = document.getElementById("nameError");
    if (name.length < 3) {
        nameError.textContent = "Nama harus lebih dari 3 karakter";
        isValid = false;
    } else {
        nameError.textContent = "";
    }
    
    // Validasi Email
    const email = document.getElementById("email").value.trim();
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Email tidak valid";
        isValid = false;
    } else {
        emailError.textContent = "";
    }
    
    // Validasi Password
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
    if (password.length < 8) {
        passwordError.textContent = "Password harus minimal 8 karakter";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }
    
    // Jika valid
    if (isValid) {
        document.getElementById("successMessage").textContent = "Pendaftaran berhasil!";
        document.getElementById("registrationForm").reset();
    }
});
