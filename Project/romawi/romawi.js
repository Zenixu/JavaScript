function angka() {
  const angkaInput = document.getElementById('angka');
  const outOutput = document.getElementById('out');

  const angka = parseInt(angkaInput.value); 

  if (isNaN(angka)) {
      outOutput.textContent = 'Masukkan angka yang valid.';
      return;
  }

  if (angka >= 1 && angka <= 10) {
      const romawi = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];  // Array untuk angka romawi
      outOutput.textContent = `angka ${angka} di romawikan jadi ${romawi[angka - 1]}`;
  } else {
      outOutput.textContent = 'ini bukan angka 1 - 10';
  }
}