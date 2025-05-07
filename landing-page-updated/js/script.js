document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("orderForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = form.elements["nama"].value.trim();
    const email = form.elements["email"].value.trim();
    const nohp = form.elements["nohp"].value.trim();
    const warna = form.elements["warna"].value.trim();

    // Validasi field kosong
    if (!nama || !email || !nohp || !warna) {
      alert("Semua field wajib diisi!");
      return;
    }

    // Validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Email tidak valid!");
      return;
    }

    // Jika semua validasi lolos
    alert("Terima kasih telah melakukan pre-order!");
    form.reset();
  });
});
