function changeVocals (str) {
    var change = '';
    var vocals = 'aiueo';
    var abc = 'abcdefghijklmnopqrstuvwxyz';
    for(var i = 0; i<str.length; i++){
        for(var j = 0; j<vocals.length; j++){
            if (str[i].toLowerCase() === vocals[j]) {
                for(var k = 0; k<abc.length; k++){
                    if ( str[i].toLowerCase() === abc[k]) {
                        if (str[i] === str[i].toLowerCase()) {
                            change += abc[k+1];
                            break;                            
                        } else if ( str[i] === str[i].toUpperCase()) {
                            change += abc[k+1].toUpperCase();
                            break;
                        }
                    }
                }
            break;              
            }
        }
        if (j === vocals.length) {
            change += str[i];
        }
    }
    return change;
}
  
  function reverseWord (str) {
    var hasil = '';
    for(var i = str.length - 1; i>=0; i--){
        hasil += str[i];
    }

    return hasil;
  }
  
  function setLowerUpperCase (str) {
    var set = '';
    for(var i = 0; i<str.length; i++){
        if ( str[i] === str[i].toLowerCase()) {
            set += str[i].toUpperCase();
        } else if ( str[i] === str[i].toUpperCase() ) {
            set += str[i].toLowerCase();
        }
    }

    return set;
  }
  
  function removeSpaces (str) {
    var noSpaces = '';
    for(var i = 0; i<str.length; i++){
        if (str[i] !== ' ') {
            noSpaces += str[i];
        }
    }
    
    return noSpaces;
  }
  
  function passwordGenerator (name) {
    var kata = changeVocals(name);
    var reversed = reverseWord(kata);
    var setLowerUpperCased = setLowerUpperCase(reversed);
    var removedSpaces = removeSpaces(setLowerUpperCased);

    if ( name.length > 5 ) {
        return removedSpaces;        
    } else {
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'