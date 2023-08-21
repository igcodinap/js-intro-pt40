const array = ["apple", "banana", "orange", "grape", "strawberry"];

// push
array.push("mango");

// pop
array.pop();

// map
array.map((fruit) => {
    const fruitWithEmoji = fruit + "🍎";
    console.log(fruitWithEmoji);
});

// forEach - no recibe un valor, sino que ejecuta una funcion por cada elemento del array [callback]
array.forEach(function (fruit, index) {
    const fruitWithEmoji = fruit + "🍎" + index;
    console.log(fruitWithEmoji);
});

// sort

// some

// indexOf