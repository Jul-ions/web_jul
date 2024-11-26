document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Contoh validasi sederhana
    if (username === "admin" && password === "jul") {
      window.location.href = "menu.html"; // Pindah ke Halaman Menu Utama
    } else {
      alert("Username atau Password salah!");
    }
  });
