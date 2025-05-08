
function hitungNilai() {
  const mapel = document.getElementById("mapel").value;
  const tugas = parseInt(document.getElementById("tugas").value);
  const uts = parseInt(document.getElementById("uts").value);
  const uas = parseInt(document.getElementById("uas").value);

  const jumlah = tugas + uts + uas;
  const rata_rata = jumlah / 3;

  let nilai;

  if (rata_rata >= 85) {
    nilai = "A";
  } else if (rata_rata >= 70) {
    nilai = "B";
  } else if (rata_rata >= 60) {
    nilai = "C";
  } else {
    nilai = "D";
  }

  document.getElementById("hasil").innerText = 
    "Pelajaran " + mapel + ": Nilai akhir = " + nilai + " (Rata-rata: " + rata_rata.toFixed(2) + ")";
}
