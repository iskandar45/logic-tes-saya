// membuat bilangan prima
// dari 2 - 100
// ======================

// cara 1
let n = 100;
let prima = []; //array untuk menambung bilangan prima yg ditemukan
for (let i = 2; i <= n; i++) {
  //pengulangan dari angka 2, karena 0 dan 1 bukan prima
  let bill = 0;
  for (let a = 1; a < i; a++) {
    //looping dari 1 hingga 'i'
    if (i % a == 0) {
      //perika=sa apakah 'i' dapat dibagi habis oleh 'a'
      bill = bill + 1; // jikan habis dibagi, maka bill+1
    }
  }
  if (bill == 1) {
    //memeriksa apakah jumlah faktor dari i sama dengan 2
    prima = [...prima, i]; //  maka i akan ditambahkan ke array prima
  }
}
console.log(prima); //mencetak isi dari array prima ke console

// cara 2
function isPrime(num) {
  if (num < 2) {
    return false;
  } //jika num kurang dari 2, maka fungsi akan mengembalikan nilai false, karena bilangan kurang dari 2 bukan bilangan prima

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      // memeriksa apakah num dapat dibagi dengan i tanpa sisa
      return false;
    } //  jika num dapat dibagi dengan i tanpa sisa, maka fungsi akan mengembalikan nilai false, karena num bukan bilangan prima.
  }
  return true; // jika loop selesai tanpa menemukan faktor selain 1 dan dirinya sendiri, maka fungsi akan mengembalikan nilai true, karena num adalah bilangan prima
}

// implementasi
for (let i = 2; i <= 100; i++) {
  if (isPrime(i)) {
    //memanggil fungsi isPrime dengan parameter i dan memeriksa apakah hasilnya true
    console.log(i); //isPrime(i) bernilai true, maka i akan dicetak ke console
  }
}
