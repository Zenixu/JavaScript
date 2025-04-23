// // !1
// let nama = "Zennrch"; umur = 15;
// console.log(`Nama: ${nama}\nUmur: ${umur} tahun\n`);

// // !2
// let panjang = 10; 
// let lebar = 5;
// const luas = panjang * lebar;
// console.log(luas)

// // !3
// let angka = 8;

// if (angka % 2 === 0) {
//   console.log(`\nAngka ${angka} adalah bilangan genap.`);
// } else {
//   console.log(`\nAnkga ${angka} adalahh bilangn ganjil`)
// }

// // !4
// for (let i = 1; i <= 10; i++) {
//   console.log(`\n${i}\n`)
// }

// // !5

// let buah = ["Apel", "Mangga", "Pisang", "Jeruk", "Anggur"];

// for (let i = 0; i <= buah.length; i++) {
//   console.log(buah[i]);
// }

// // !4.6
// for(let x = 5; x <= 50; x+=5) {
//   console.log(x);
// }

// // !4.7
// for(let i = 1; i <= 100; i++) {
//   if (i % 2 === 1) {
//     console.log(i);
//   } 
// }

// // !4.8
// let nama = ["Aden", "Monyet", "Orangutan", "Kancil", "Andrean"];

// for (let z = 0; z > nama.length; z++) {
//   console.log(nama[z]);
// }

// console.log("===============")
// let total = 0;
// for (let x = 1; x <= 10; x++) {
//   total += x;
// }
// console.log(total)


// console.log("===============")
// let kata = "Javascript";
// for (let y = 0; y < kata.length; y++) {
//   console.log(kata[y])
// }

// console.log("===============")
// let buah = ["Apel", "Mangga", "Pisang", "Jeruk", "Anggur"];
// let kosong = buah.shift()
// console.log(buah)
// // for (let i = 0; i <= buah.length; i++) {
    // console.log(buah.shift(0)[i]);
  
  // console.log("===============")
  // let buah = ["Apel", "Mangga", "Pisang", "Jeruk", "Anggur"];
  // let kosong = buah.unshift("BuahNaga")
  // console.log(buah)
  // let buah2 = buah.slice(0, 3)
  // console.log (buah2)

  // console.log("===============")
  // let buah = ["Apel", "Mangga", "Pisang", "Ceruk", "Anggur"];
  // let gabung = buah.join();
  // let balik = buah.reverse();
  // let urut = buah.sort();
  // console.log(gabung);
  // console.log(balik);
  // console.log(urut);

  // let karakter = buah.some();
  // console.log(karakter);

  let buah = ["Apel", "Mani", "Sangi", "Epruki"];

let hasil = buah.find(function(elemen) {
    return elemen == "Sangi";
});

console.log(`Apakah ada buah dengan panjang lebih dari 5 karakter? ${hasil}`);

// Some untuk salah satu element dari array memeriksa salah satu jika salah satu benar maka semuanya benar, sedangkan every jika semua element array memenuhi kondisi maka akan benar