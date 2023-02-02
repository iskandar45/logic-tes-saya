// andi menabung dengan uang 750.000 dibulan pertama
//dan mendapatkan bunga sebesar 6% dibulan berikutnya,
//setiap bulan berikutnya andi menyisihkan 3% dari tabungan nya
//dan maksimal yang disisihkan 3% dari 800.000
//berapakah total tabungan andi selama 1 tahun?
let uangAndi = 750000;
let hasil = "";

for (let bulan = 1; bulan <= 12; bulan++) {
  let sisih = 0;
  let bunga = 0;
  if (bulan > 1) {
    bunga = (uangAndi * 6) / 100;
    if (uangAndi + bunga >= 800000) {
      sisih = (800000 * 3) / 100;
    }
    sisih = ((uangAndi + bunga) * 3) / 100;
  }
  hasil += `
    Tabungan awal : ${uangAndi.toFixed(2)}
    Bunga : ${bunga.toFixed(2)}
    Sisih : ${sisih.toFixed(2)}
    Uang Bulan : ${(uangAndi + bunga - sisih).toFixed(2)}
    =================\n
    `;
  uangAndi = uangAndi + bunga - sisih;
}
console.log(hasil);
