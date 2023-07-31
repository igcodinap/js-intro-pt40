// Las variables sirven para guardar informacion

//const, var o let + nombre de la variable + el signo igual + valor
const nombre1 = 10 
let nombre2 = 15
var nombre3 = 20 // desactualizada.

const firstName = "Ignacio"
const lastName = "Codina"

const y = "Av. providencia 2435" // esto no se hace

nombre3 = 200

console.log(nombre3)


// Tipos de datos

//STRING o cadenas de caracteres
const myFirstString = "lorem ipsum......"

// NUMBER ----> INTEGER | FLOAT
const myFirstInteger = 10;

const myFirstFloat = 10.2

console.log(myFirstFloat + myFirstInteger)

//BOOLEAN
const verdadero = true; // no es lo mismo que "true"
const falso = false; // no es lo mismo que "false"


//UNDEFINED
const indefinido = undefined // no es lo mismo que "undefined"

console.log(indefinido)

//NULL
const nulo = null; // no es lo mismo que "null"

console.log(nulo)


// OBJETOS ----> Es un *Diccionario* que permite guardar multiples valores

const car = {
    modelo: "Prius",
    fabricante: "toyota",
    añoFabricacion: 2000,
    funcionando: true,
    valor: undefined,
//  llave: valor
}

console.log(car.aroRueda, '<-----aro rueda esta undefined')


// ARRAY ---> Es un *Listado* que permite guardar multiples valores
                            //   0           1          2       3   4      5      6     7            posicion
const listadoSupermercado = ["naranjas", "manzanas", "yogurt", 10, true, false, null, undefined] //  valor

console.log(listadoSupermercado[10])















let televisor = 1500;
televisor = 2000;

const pc="el valor de la variable" 

let verdaderofalso=false;
verdaderofalso = true;


const person={
    name: "Luis",
    edad: 25,
    direccion: "santa rosa"
}

console.log(person.edad) 
const x = person.name
console.log(x, '<-----x')


let animales = ["caballo", 10, "rana", 20.5]

console.log(animales[2])
