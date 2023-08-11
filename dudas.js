// Clase de dudas

// for (let i = 0; i < mySampleArray.length; i = i + 2) {
//   console.log(mySampleArray[i]);
// }

// i++ ----> i = i + 1
// i-- ----> i = i - 1
// i += 2 ----> i = i + 2


// Caso de concatenacion de metodos

// function reverseString(palabra) {
//     // recibimos un valor con el parametro PALABRA (check)
//     console.log(palabra);
//     // tenemos que retornar la palabra al revés, para eso creamos una variable auxiliar (check)
//     let palabraInvertida = "";
//     // tenemos que dar vuelta el valor en PALABRA
//     const palabraArray = palabra.split("");     // string.split() ---> array
//     const reversedArray = palabraArray.reverse(); // array.reverse() ---> array
//     palabraInvertida = reversedArray.join(""); // array.join() ---> string
//     return palabraInvertida;
// }

// function reverseStringConcatenated(palabra) {
//     return palabra.split("").reverse().join("");
// //  return string.split("")----> array.reverse()----> array.join("") ----> string
// }
// const x = reverseStringConcatenated("hola")
// console.log(x)

// FUNCIONES
// TENEMOS 2 PASOS PARA CREAR UNA FUNCION
// 1. DECLARAR LA FUNCION

// i. palabra clave function
// ii. nombre de la funcion
// iii. parametros de la funcion ()
// iv. cuerpo de la funcion {}
function nombreDeLaFuncion(parametro1, parametro2, parametro3) {
    // codigo de la funcion
    console.log(parametro1, parametro2, parametro3)
}

// 2. LLAMAR A LA FUNCION

// i. nombre de la funcion
// ii. parametros de la funcion () ---> argumentos;   VALORES!!!!!!!!!!!!

const x = "hola"
const parametro2 = "chau"

// nombreDeLaFuncion(x, undefined, "j")

// EJEMPLO DE LO QUE INTERNAMENTE OCURRE AL LLAMAR LA FUNCION
// nombreDeLaFuncion("hola", undefined, "j") {
//     const parametro1 = "hola"
//     const parametro2 = undefined
//     const parametro3 = "j"
//     // cuerpo de la funcion
//     console.log(parametro1, parametro2, parametro3)
// }



// IMPRIMIR VALOR QUE RETORNA UNA FUNCION
function suma(a, b) {
    const resultado = a + b;
    return resultado;
}

suma(1, 5) // 6
// i. llamamos la funcion dentro del console.log
console.log(suma(1, 5), "AQUIIIIIIIIIII!")

// ii. guardamos el valor de la funcion en una variable
const resultado = suma(1, 5)
console.log(resultado)

// iii. hacemos console.log del mismo valor que retornamos en la funcion
function suma1(a, b) {
    const resultado = a + b;
    console.log(resultado)
    return resultado;
}

suma1(1, 500)