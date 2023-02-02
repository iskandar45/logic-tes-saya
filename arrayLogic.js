// terdapat array = [1,4,5,3,2,5,3,4,8,5,4,3,6,0,4,3,2,1,5,9,9,4,3,1,3,0,2,2,4,6,2,4,7,4]
// tampilkan data tanpa adanya angaka yang sama
// tampilkan berapa banyak data yang sama

// cara 1
// yt : antarracoding
const array = [
  1, 4, 5, 3, 2, 5, 3, 4, 8, 5, 4, 3, 6, 0, 4, 3, 2, 1, 5, 9, 9, 4, 3, 1, 3, 0,
  2, 2, 4, 6, 2, 4, 7, 4,
];
let arrayTampung = [];
let arrayCount = "";

for (let i = 0; i < array.length; i++) {
  let ketemu = false;

  for (let a = 0; a < arrayTampung.length; a++) {
    if (array[i] == arrayTampung[a]) {
      ketemu = true;
    }
  }

  if (!ketemu) {
    arrayTampung = [...arrayTampung, array[i]];

    let totalKetemu = 0;
    for (let e = 0; e < array.length; e++) {
      if (array[i] == array[e]) {
        totalKetemu = totalKetemu + 1;
      }
    }
    arrayCount += `angka ${array[i]} sebanyak ${totalKetemu}\n`;
  }
}

console.log(arrayTampung);
console.log(arrayTampung.length);
console.log(arrayCount);

// cara 2
// Pada script ini, kita membuat objek frequency yang
// akan menyimpan frekuensi duplikat dari setiap elemen dalam array array.
// Jika elemen pertama kali muncul, maka kita menambahkan elemen tersebut ke uniqueArray
// dan mengatur frekuensi ke 1. Jika elemen sudah ada dalam uniqueArray,
// maka kita menambahkan frekuensi duplikat dengan 1.
let arr = [
  1, 4, 5, 3, 2, 5, 3, 4, 8, 5, 4, 3, 6, 0, 4, 3, 2, 1, 5, 9, 9, 4, 3, 1, 3, 0,
  2, 2, 4, 6, 2, 4, 7, 4,
];
// Membuat sebuah array kosong uniqueArray dan sebuah objek frequency kosong.
let uniqueArray = [];
let frequency = {};

for (let i = 0; i < arr.length; i++) {
  // Menggunakan indexOf untuk memeriksa apakah elemen tersebut ada atau tidak dalam uniqueArray. Jika elemen tidak ada (indexOf mengembalikan -1)
  if (uniqueArray.indexOf(arr[i]) === -1) {
    // Menambahkan elemen tersebut ke uniqueArray dan mengatur frekuensi elemen tersebut ke 1 dalam objek frequency
    uniqueArray.push(arr[i]);
    frequency[arr[i]] = 1;
  } else {
    // Jika elemen sudah ada dalam uniqueArray, maka menambahkan frekuensi elemen tersebut dengan 1 dalam objek frequency.
    frequency[arr[i]] += 1;
  }
}
// Menampilkan hasil akhir, yaitu data tanpa duplikat dalam uniqueArray dan frekuensi duplikat dalam objek frequency.
console.log("Data tanpa duplikat:", uniqueArray);
console.log("Frekuensi duplikat:", frequency);

// cara 3
// menghitung banyaknya data yang di duplikat
const arrayX = [
  1, 4, 5, 3, 2, 5, 3, 4, 8, 5, 4, 3, 6, 0, 4, 3, 2, 1, 5, 9, 9, 4, 3, 1, 3, 0,
  2, 2, 4, 6, 2, 4, 7, 4,
];

let count = {};
for (let num of arrayX) {
  if (!count[num]) {
    count[num] = 1;
  } else {
    count[num]++;
  }
}

console.log(count);
