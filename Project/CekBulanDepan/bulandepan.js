
function checkNextMonth() {
  const bulan = document.getElementById('InputBulan').value.toLowerCase();
  let result = "";
  
  if (bulan == "januari") {
      result = "Bulan depan adalah Februari";
  } else if (bulan == "februari") {
      result = "Bulan depan adalah Maret";
  } else if (bulan == "maret") {
      result = "Bulan depan adalah April";
  } else if (bulan == "april") {
      result = "Bulan depan adalah Mei";
  } else if (bulan == "mei") {
      result = "Bulan depan adalah Juni";
  } else if (bulan == "juni") {
      result = "Bulan depan adalah Juli";
  } else if (bulan == "juli") {
      result = "Bulan depan adalah Agustus";
  } else if (bulan == "agustus") {
      result = "Bulan depan adalah September";
  } else if (bulan == "september") {
      result = "Bulan depan adalah Oktober";
  } else if (bulan == "oktober") {
      result = "Bulan depan adalah November";
  } else if (bulan == "november") {
      result = "Bulan depan adalah Desember";
  } else if (bulan == "desember") {
      result = "Bulan depan adalah Januari";
  } else {
      result = "Ini bukan nama bulan";
  }
  
  document.getElementById('result').textContent = result;
}