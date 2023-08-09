// 1. Reverse a string
//Hacer una funcion que reciba un string y lo retorne al revés
// hola -----> aloh

function reverseString() {
    const s1 = "1"
    return s1
}

const x = reverseString("chao")

console.log(x)
console.log(reverseString("chao"))

console.log("chao1")

function justAFunction(param1, param2) {
    const x = 90
    console.log(x, '<---x')
    console.log(param1, '<---param1')
    console.log(param2, '<---param2')
    return x
}

justAFunction(10, 20)

console.log('ANOTHER EXAMPLE')

justAFunction(100, 200)

console.log('ANOTHER EXAMPLE')

const y = justAFunction(1, 2) // return x
console.log(y, '<---y')



// 1. declarar, definir, construir la funcion
function sayHello(name) {
    const phrase = "Hello "+ name
    return phrase
}

const greeting = sayHello("Ignacio") //llamamos a la funcion por su nombre
console.log(greeting)
console.log(sayHello('Andres'))

sayHello("Diego")
const hola = sayHello("Jonathan")
console.log(hola)






