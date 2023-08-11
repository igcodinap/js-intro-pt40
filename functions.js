// FUNCTIONS

// - Bloque de codigo que se puede reutilizar 
// - Posee Parametros 
// - Tiene una parte que es el return 
// - Tiene nombre 
// - Tiene llaves 
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

const num = Number.isInteger(10.1)

const variableGlobal = 'Soy una variable global, debido a que no hay corchetes alrededor de mi';

// un bloque es aquello que está entre {} a excepcion de un objecto
// const y let solo definen la variable dentro del bloque.
// var define a la variable para ser accedida fuera del bloque.

// incia el bloque
if (true) {
    const variableBloque = 'Soy valida solo en el bloque, ya que me definieron con const o let, por tanto soy una variable local';
    var variableBloqueValida = 'Soy valida incluso fuera del bloque';
    // bloque 2
    if (true) {
        const variableBloque2 = 'Soy valida solo en el bloque, ya que me definieron con const o let, por tanto soy una variable local';
    }
    // fin bloque 2
}
// termina el bloque



//BUILT IN FUNCTIONS
// Data types
// String
let string = 'Soy un string'