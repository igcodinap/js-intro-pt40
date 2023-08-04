// evaluan con verdadero o falso


// IFS independientes

const condition = 0 < 10

console.log(condition)

if (condition) {
    console.log('estamos dentro del 1 if')
}

const condition2 = 100 === "100"
console.log(condition2)

if (condition2) {
    console.log("estamos dentro del 2 if")
}


console.log("/////////////////////////////////////////////////////////")
// IF - ELSE
// else depende del resultado del if para ejecutarse o no

if (condition2) {
    console.log("se ejecuta el if dentro del if-else")
} else {
    console.log("se ejecuta el else dentro del if-else")
}

console.log("/////////////////////////////////////////////////////////")
// IF - ELSEIF
// ELSEIF depende de su condicion y del resultado de IF

if (false) {
    console.log('IF!')
} else if (false) {
    console.log('ELSEIF!')
} else if (true) {
    console.log('ELSEIF2!')
}




console.log("/////////////////////////////////////////////////////////")
// IF - ELSEIF - ELSE

if (true) {
    console.log('IF!')
} else if (false) {
    console.log('ELSEIF!')
} else if (false) {
    console.log('ELSEIF2!')
} else {
    console.log("ELSE!")
}

