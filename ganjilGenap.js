// memisahkan ganjil genap 1-100

var b = 100; // banyaknya bilangan
var genap = [];
var ganjil = [];

for (let i = 0; i <= b; i++) {
  if (i % 2 == 0) {
    // jika i dibagi 2 = 0 (bilangan genap)
    genap = [...genap, i];
  } else {
    // jikan i dibagi 2 != 0 (bilangan ganjil)
    ganjil = [...ganjil, i];
  }
}
console.log({ ganjil, genap });
