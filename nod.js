var a = process.argv[2],
    b = process.argv[3],
    i = a > b ? a : b,
    res;

while(i) {
    if (a % i === 0 && b % i === 0) {
        res = i;
        break;
    }
    i--
}

console.log(i);