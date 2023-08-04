// FOR

//1  variable que necesita el ciclo
//2 hasta cuando se ejecutará este ciclo
//3 lo que ocurre al final de cada iteracion
for (let i = 0; i < 10; i+=1) {
    const x = 10;
    console.log(x+i)
}


// // WHILE
let i = 0;
while(i < 5) {
    i++;
    console.log(i);
}


const MathPT40 = {
    PI: 3.1415,
    Random: function() {
        // devuelve un numero aleatorio entre el 0 y el 1
    }
}
const randomArray = [];
console.log(randomArray, '<---RA')

for (i = 0; i < 10; i++) { 
    const randomNumber = Math.random()
    randomArray.push(randomNumber)
}

console.log(randomArray, "<---- RA")