function kaliTerusRekursif(angka) {
    if ( angka > 9) {
        var ubahString = String(angka).split('');
        var hasil = 1;
        for(var i = 0; i<ubahString.length; i++)        {
            hasil *= parseInt(ubahString[i]);
        }
        if ( hasil > 9 ) {
            return kaliTerusRekursif(hasil);
        } else {
            return hasil;
        }
    } else {
        return angka;
    }
}
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6