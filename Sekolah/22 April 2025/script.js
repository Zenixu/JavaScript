const pkn = document.getElementById('PKN');
const mtk = document.getElementById('MTK');
const inggris = document.getElementById('INGGRIS');
const hitung = document.getElementById('hitung')
const nilai = document.getElementById('JML_NILAI')
const rata_rata = document.getElementById('RATA_RATA')
const predikat = document.getElementById('PREDIKAT')
const kelulusan = document.getElementById('KELULUSAN')
const keterangan = document.getElementById('KETERANGAN')

hitung.addEventListener('click', function(){
  // let r = parseInt(jari.value);
  // let t = parseInt(tinggi.value);

  const jml_nilai = parseFloat(pkn.value) + parseFloat(mtk.value) + parseFloat(inggris.value);
  nilai.innerHTML = jml_nilai;

  const rata = parseFloat(jml_nilai/3);
  rata_rata.innerHTML = rata;

  if (rata >= 90 && rata <= 100) {
    predikat.innerHTML = "A";
  } else if (rata >= 80 && rata < 90) {
    predikat.innerHTML = "B";
  } else if (rata >= 70 && rata < 80) {
    predikat.innerHTML = "C";
  } else {
    predikat.innerHTML = "D";
  }
  
  if (rata>= 80)  {
    kelulusan.innerHTML = "KAMU LULUS";
  }
  else {
    kelulusan.innerHTML = "TIDAK LULUS";
  };

  if (rata>=80) {
    keterangan.innerHTML = "PERTAHANKAN NILAI KAMU";
  }
  else {
    keterangan.innerHTML = "NAIKKAN NILAINYA BUAT NAIK KELAS!!";
  }
});
