function isEven(x) {
    if (x % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function factorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}



alert(factorial(5));