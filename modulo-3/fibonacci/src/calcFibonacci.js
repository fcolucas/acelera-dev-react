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

module.exports = {
    calcFibonacci
}