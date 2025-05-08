
function tentukanNilai() {
  const x = parseInt(document.getElementById('inputX').value);
  const y = parseInt(document.getElementById('inputY').value);
  const z = parseInt(document.getElementById('inputZ').value);
  
  if (isNaN(x) || isNaN(y) || isNaN(z)) {
      alert('Mohon masukkan angka yang valid untuk semua nilai!');
      return;
  }
  
  let pesan = "";
  
  if (x >= y && y >= z) {
      pesan = "Maka nilai X adalah yang paling besar dan Z berarti nilai terkecil";
  } else if (x >= z && z >= y) {
      pesan = "Maka nilai X adalah yang paling besar dan Y berarti nilai terkecil";
  } else if (y >= x && x >= z) {
      pesan = "Maka nilai Y adalah yang paling besar dan Z berarti nilai terkecil";
  } else if (y >= z && z >= x) {
      pesan = "Maka nilai Y adalah yang paling besar dan X berarti nilai terkecil";
  } else if (z >= x && x >= y) {
      pesan = "Maka nilai Z adalah yang paling besar dan Y berarti nilai terkecil";
  } else if (z >= y && y >= x) {
      pesan = "Maka nilai Z adalah yang paling besar dan X berarti nilai terkecil";
  }
  
  document.getElementById('hasil').textContent = pesan;
}
