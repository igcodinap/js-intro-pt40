// palindromo: oso, ana, seres, somos, oro, aérea
// Hacer una funcion que reciba una palabra y retorne si es un palindromo o no

function findPalindrome(word) {
    // validar si word es un palindromo
    // i. dimos vuelta la palabra
    let invertedWord= ''
    for (i = word.length - 1 ; i >= 0 ; i-- ) {
        console.log(word[i])
        invertedWord = invertedWord.concat(word[i])
    }
    console.log(invertedWord)

    // ii. comparamos si es igual a la que nos dieron
    if (word === invertedWord) {
        return true
    }
    return false
}

const x = findPalindrome('oso')
console.log(x)


function isPalindrome(s) {
    var cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
  }