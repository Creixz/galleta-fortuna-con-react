const fibonacci = (limit) => {
    let penultimo = -1;
    let ultimo = 1;
    let numeroTermino = penultimo + ultimo;
    const fiboArray = [];
    while (numeroTermino <= limit) {
        fiboArray.push(numeroTermino);
        penultimo = ultimo;
        ultimo = numeroTermino;
        numeroTermino = penultimo + ultimo;
    }
    return fiboArray;
}


console.log(fibonacci(10));
console.log(fibonacci(60));
console.log(fibonacci(30));
console.log(fibonacci(55));
console.log(fibonacci(0));
console.log(fibonacci(3));
