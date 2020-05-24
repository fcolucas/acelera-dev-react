function calcFibonacci(n) {
    if(n === 0) {
        return 0;
    }
    else if (n === 1) {
        return 1;
    }
    else {
        return calcFibonacci(n-1) + calcFibonacci(n-2)
    }
}

const fibonacci = () => {
    const fibo = [];
    let seq = 0, id = 0;
    while (seq < 350) {
        seq = calcFibonacci(id);
        fibo.push(seq);
        id++;
    }
    return fibo;
}

const isFibonnaci = (num) => {
    return fibonacci().includes(num);
}

module.exports = {
    fibonacci,
    isFibonnaci
}
