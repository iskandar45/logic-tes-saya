// mencari bilangan fibonachi
// sebanyak nilai n

//cara 1
//mencetak angka fibonachi ke konsol,
//tanpa memasukan kedalam variabel
let n = 10; //banyak nilai yg dicari
let first = 0;
let second = 1;
let sum;

console.log(first);
console.log(second);

for (let i = 2; i <= n; i++) {
  sum = first + second;
  console.log(sum);

  first = second;
  second = sum;
}

// cara 2
// mencetak angka fibonachi yg dimasukan kedalam array
let nx = 10;
let angka1 = 0;
let angka2 = 1;
let jum;

let fibonacci = [angka1, angka2];

for (let i = 2; i <= nx; i++) {
  jum = angka1 + angka2;
  fibonacci.push(jum); // hasil penjumlahan dimasukan ke dalam array

  angka1 = angka2;
  angka2 = jum;
}

console.log(fibonacci);

// cara 3
// cara yg sedikit komplex
let fibonachi = [];
let n1 = 0;
let n2 = 1;

for (let i = 0; i <= 10; i++) {
  if (i === 0 || i === 1) {
    fibonachi = [...fibonachi, i];
  } else {
    let total = n1 + n2;
    fibonachi = [...fibonachi, total];
    n1 = n2;
    n2 = total;
  }
}
console.log(fibonachi);

//cara 4
//sama seperti cara 3 , hanya saja lebih sederhana dalam penulisan script nya
//variabel n1 dan n2 tidak lagi digunakan,
//karena informasi yang sama sudah tersedia dalam array fibonacci
let fibo = [0, 1];

for (let i = 2; i <= 10; i++) {
  let sum = fibo[i - 1] + fibo[i - 2];
  fibo.push(sum);
}

console.log(fibo);
