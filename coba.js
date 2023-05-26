<script>
function simplifyFraction() {
  // Langkah-langkah penyederhanaan pecahan
  var numerator = 8;
  var denominator = 12;

  // Cari faktor persekutuan terbesar (FPB)
  var gcd = findGCD(numerator, denominator);

  // Bagi kedua bilangan dengan FPB
  numerator /= gcd;
  denominator /= gcd;

  // Perbarui tampilan pecahan yang disederhanakan
  var resultElement = document.getElementById('result');
  resultElement.querySelector('.numerator').textContent = numerator;
  resultElement.querySelector('.denominator').textContent = denominator;
}

function findGCD(a, b) {
  // Implementasikan algoritma Euclidean untuk mencari FPB
  while (b !== 0) {
    var temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

