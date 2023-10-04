// const fetch = require('node-fetch');

// async function fetchData() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     // {} - object
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
    
//     const data = await response.json();
//     console.log('Data:', data);
//   } catch (error) {
//     console.log('Fetch error:', error.message);
//   }
// }

// fetchData();
// funciones asincronas y sincronas
// fetch y async await
// async function funcionAsincrona() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hecho");
//     }, 2000);
//   });
// }

// console.log("Inicio");

// const promesa = funcionAsincrona();
// console.log("Promesa:", promesa);

// promesa.then((resultado) => {
//   console.log("Resultado:", resultado);
// });

// console.log("Fin");


async function funcionAsincrona() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hecho");
    }, 5000);
  });
}

console.log("Inicio");
// al declarar un funcion asincrona, estamos diciendo que la funcion va a retornar una promesa(proceso asincrono)
async function main() {
  // al momento de llamar/invocar una funcion asincrona, podemos usar await para esperar a que la promesa se resuelva
  const resultado = await funcionAsincrona();
  const resultado2 = await funcionAsincrona();
  console.log("Resultado1:", resultado);
  console.log("Resultado2:", resultado2);
  console.log("Fin")
  console.log("Fin con await")
}

main();

