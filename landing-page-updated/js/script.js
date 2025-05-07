
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const nohp = document.getElementById("nohp").value.trim();
  const warna = document.getElementById("warna").value.trim();

  if (!nama || !email || !nohp || !warna) {
    alert("Semua field wajib diisi!");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Email tidak valid!");
    return;
  }

  alert("Terima kasih telah melakukan pre-order!");
  this.reset();
});
