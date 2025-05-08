
function cekHariLusa() {
  const hari = document.getElementById('hariInput').value.toLowerCase();
  let pesan = "";
  
  if (hari == "senin") {
      pesan = "Lusa adalah rabu";
  } else if (hari == "selasa") {
      pesan = "Lusa adalah kamis";
  } else if (hari == "rabu") {
      pesan = "Lusa adalah jumat";
  } else if (hari == "kamis") {
      pesan = "Lusa adalah sabtu";
  } else if (hari == "jumat") {
      pesan = "Lusa adalah minggu";
  } else if (hari == "sabtu") {
      pesan = "Lusa adalah senin";
  } else if (hari == "minggu") {
      pesan = "Lusa adalah selasa";
  } else {
      pesan = "ini bukan nama hari";
  }
  
  // Menampilkan hasil
  document.getElementById('hasil').textContent = pesan;
}
