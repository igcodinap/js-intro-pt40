// 1. Reverse a string
//Hacer una funcion que reciba un string y lo retorne al revés
// ejemplo: hola -----> aloh

function reverseString(palabra) {
  // recibimos un valor con el parametro PALABRA (check)
  console.log(palabra);
  // tenemos que retornar la palabra al revés, para eso creamos una variable auxiliar (check)
  let palabraInvertida = "";
  // tenemos que dar vuelta el valor en PALABRA
  const palabraArray = palabra.split("");
  const reversedArray = palabraArray.reverse();
  palabraInvertida = reversedArray.join("");
  return palabraInvertida;
}

// const test1 = reverseString("pelota");
// console.log(test1);

function reverseString1(s) {
  var reversed = "";
  console.log(s.length, '<--- largo del string')
  for (var i = s.length - 1; i >= 0; i--) {
    // console.log('valor: ', s[i], " | posicion: ", i)
    reversed += s[i];
    // console.log(reversed, '<---reversed')
  }
  console.log(reversed)
  return reversed;
}
              //0,1,2,3
// reverseString1('hola')

reverseString1("paralelepipedo")



//                0          1          2
const array1 = ["frutas", "verduras","tomates"]
console.log(array1[2])
console.log(array1[array1.length - 1])