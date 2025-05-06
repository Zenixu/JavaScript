
const max = 30;
let age = 20;
age = 40;

console.log('Usia = ' + age);
console.log(`Nilai maksimal adalah ${max} untuk usia ${age}`);

let sisi = 10;
console.log(`
  |Sisi : ${sisi} \n
  Luas  : ${sisi*sisi}\n
  Keliling: ${sisi * 4} 
  `)

const divAngka = document.querySelector('#angka');
const divNama = document.querySelector('#nama');
const divAlamat = document.querySelector("#alamat");

let angka = 15;
let nama = 'Ibnu';
let alamat = ('Cianjur')

divAngka.textContent = angka;
divNama.innerHTML = `<b>nama</b>`;
divAlamat.textContent = alamat;

const divAngka1 = document.querySelectorAll('#angka1');
console.log(divAngka1.textContent)

function perkalian(angka, angka2) { 
  return angka * angka2; 
}
console.log(perkalian(100, 9));
console.log(perkalian(48, 80));

function kalimat(nama,jk,kelas) {
  return `Nama kamu adalah ${nama} berjenis kelamin ${jk} di kelas ${kelas}`
};
console.log(kalimat('Udean','laki-laki','X PPLG 2'));

function pangkat(angka, pangkat) {
  return angka ** pangkat;
};
console.log(pangkat(3, 10));

const pangkatV2 = (angka, pangkat) => angka ** pangkat;
console.log(pangkatV2(2, 8));

const tampil = () => console.log("test");
tampil();

for (a = 1; a < 4; a ++) {
  console.log(a)
}

const divJamDigital = document.querySelector('#jam-digital')
const divJam = document.querySelector('#jam');
const divMenit = document.querySelector('#menit');
const divDetik = document.querySelector('#detik');
let detik = Number(divDetik.textContent);
let menit = Number(divMenit.textContent);
let jam = Number(divJam.textContent);
const changeNumber = () => {
  divDetik.textContent = detik
  divMenit.textContent = menit
  divJam.textContent = jam
  
  detik++
  if (detik == 60) {
    menit++
    detik = 0
  }
  else if (menit == 60) {
    jam++
    menit = 0
  }
  else if (jam == 24) {
    jam = 0
  }
  divDetik.textContent = detik < 10 ? `0${detik}` : detik;
  divMenit.textContent = menit < 10 ? `0${menit}` : menit;
  divJam.textContent = jam < 10 ? `0${jam}` : jam;
};

setInterval(changeNumber, 100);

