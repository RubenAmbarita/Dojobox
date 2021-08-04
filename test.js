alert("selamat datang di kelas ini ... ");
var nama = prompt("masukkan nama anda : ");
document.write("selamat datang kak " + nama + "<br>");
document.write("tetap semangat ");

var bilangan1 = parseInt(prompt("masukkan bilangan 1"));
var bilangan2 = parseInt(prompt("masukkan bilangan 2"));
var x = bilangan2 + bilangan1;
document.write(x);
document.write("<br>");
document.write(bilangan1 > bilangan2);
document.write("<br>");
document.write(bilangan1 < bilangan2);
document.write(bilangan1 > bilangan2 && bilangan2 == bilangan1);

//switch case
var penampung = prompt("halo isi nilai Matematika anda : ");
switch (true) {
  case penampung >= 0 && penampung <= 55:
    document.write("Halo user nilai anda TIDAK LULUS");
    break;
  case penampung > 55 && penampung <= 70:
    document.write("Halo user nilai anda MEMUASKAN");
    break;
  case penampung > 70 && penampung <= 90:
    document.write("Halo user nilai anda BAIK");
    break;
  case penampung > 90 && penampung <= 100:
    document.write("Halo user nilai anda SANGAT BAIK");
    break;
  default:
    document.write("Nilai yang anda masukkan tidak valid");
}

//no induk
var int = parseInt(penampung);
while (int <= 5) {
  document.write("Siswa dengan no induk " + int + " TA VISTA" + "<br>");
  int++;
}

for (int = 6; int <= 10; int++) {
  document.write("Siswa dengan no induk " + int + " TA INTAN" + "<br>");
}

//ganjil genap
if (int % 2 == 0) {
  document.write(int + "merupakan bilangan genap");
} else {
  document.write(int + "merupakan bilangan ganjil");
}

//nama pengunjung
var namaku = prompt("masukkan nama anda : ");
if (namaku === "ruben") {
  document.write("seorang member dojobox");
} else {
  document.write("bukan member dojobox");
}
