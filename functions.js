// FUNCTIONS

// - Bloque de codigo que se puede reutilizar X
// - Posee Parametros x
// - Tiene una parte que es el return x
// - Tiene nombre x
// - Tiene llaves x
// - Existen dos maneras de escribir funciones en JS

// Def: las funciones nos permiten encapsular codigo para usarlo posteriormente.


// Sintaxis para declarar una funcion
function functionName(param1, param2) {
    const x = 90
    console.log(x)
    console.log(param1)
    console.log(param2)
    return // en este caso no retornamos nada
}

function noParams() {
    console.log('Hello part time 40')
}


// Sintaxis para llamar una funcion
// functionName(900, 9000)

// functionName(1000, 10000)

// functionName()
function addNumbers(num1, num2) {
    const sum = num1 + num2
    console.log(sum)
    const message = "el valor de la suma es: " + sum
    return message
}

// Aqui estamos llamando a la funcion addNumbers y estamos guardo el valor que retorna en la variable result
const result = addNumbers(10, 13.3)

console.log(result, '<---result', 'asjkdhakls', 10, 20, 2309, 2308, 982345, [], {})

const animal = {
    type: "dog",
    // funcion anonima
    bark: function (name){
        console.log('guau guau' + name)
    }
}

animal.bark(' soy un perro')
