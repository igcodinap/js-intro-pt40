// Hacer una funcion que dado un numero entero que recibe entregar la suma de todos los multiplos de 3 inferiores al valor entregado.
// INPUT: numero entero
// OUTPUT: numero entero ---> la suma de todos los numeros multiplos de 3 menores al numero entregado(INPUT)

// function sum3Multiples(number) {

    // return numero
// }


function sum3Multiples(number) {
    // i. tenemos que devolver la SUMA(x operacion sumar) de los numeros menores que number (Tercer paso)
    // ii. (x encontrar el LISTADO de numeros menores (Primer paso)
    // iii. (COMPARAR)) multiplos de 3 (Segundo paso)
    let sum = 0;
    for (i = 0 ; i < number; i++) {
        if (i % 3 === 0) {
            sum += i
        }
    }

    return sum
}

console.log(sum3Multiples(10))