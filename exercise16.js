function totalDigitRekursif(angka) {
    if ( angka > 9 ) {
        var toString = String(angka);
        return parseInt(toString[0]) + totalDigitRekursif(selainDigitPertama(angka));
    } else {
        return angka;
    }
}

function selainDigitPertama(angka) {
    var toString = String(angka);
    var i = toString.slice(1,toString.length);
    return parseInt(i);
}
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1524)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5

