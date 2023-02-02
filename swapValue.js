// menukar nilai variabel 'a' dan 'b'
// tanpa menambahkan variabel baru

var a = 1;
var b = 2;

// nilai awal
console.log("Nilai 'a' awal = ", a);
console.log("Nilai 'b' awal = ", b);

// coding proses pertukan nilai
a = a - b; // a=1  b=2 | a = 1 -    2 = -1
b = b + a; // a=-1 b=2 | b = 2 + (-1) =  1
a = b - a; // a=-1 b=1 | a = 1 - (-1) =  2

// nilai akhir
console.log("Nilai 'a' Akhir = ", a);
console.log("Nilai 'b' Akhir = ", b);
