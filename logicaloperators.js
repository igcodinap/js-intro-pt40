const double = 10 === '10' // valor y tipo de dato; false
const triple = 10 === 10 // valor y tipo de dato; true

// se utilizan para determinar decisiones logicas(true/false) entre expresiones
const verdadero = true
const falso = false
// AND && necesita que todas las expresiones sean verdaderas para que el resultado sea verdadero
// true && true = true
// true && false = false
// false && true = false
// false && false = false

const and = (verdadero && verdadero) && false && true && ( true && true) // false

// OR || necesita que al menos una de las expresiones sea verdadera para que el resultado sea verdadero
// true || true = true
// true || false = true
// false || true = true
// false || false = false

const or = (verdadero || verdadero) || false || true || ( true || true) // true

// NOT !
// !true = false
// !false = true

const not = !true // false

const mix = (verdadero && verdadero) || false || true || ( true && !true) // true
            //          true          || false || true ||       false
            //                      true      ||        true
            //                              true

// TRUTH EVALUATION
let name = ""
// FALSO ----> false, 0, "", null, undefined, NaN

// VERDADERO ----> true, cualquier otro valor

