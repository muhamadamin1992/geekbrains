var arg1 = process.argv[2],
    arg2 = process.argv[3],
    length = arg1.length > arg2.length ? arg1 : arg2,
    maxShift1,
    maxShift2;

function shift(arg1) {
    var array = arg1.split(''),
    i;

    if (arg1 === arg2) {
        return 0;
    }

    for (i = 0; i < length; i++) {
        array.push(array.shift());
        if (array.join('') === arg2) {
            return ++i;
        } 
    }
    return 0;
}

function pop(arg1) {
    var array = arg1.split(''),
        i;

    if (arg1 === arg2) {
        return 0;
    }

    for (i = 0; i < length; i++) {
        array.unshift(array.pop());
        if (array.join('') === arg2) {
            return ++i;
        } 
    }
    return 0;
}

maxShift1 = shift(arg1);
maxShift2 = pop(arg1);

console.log(maxShift1 || maxShift2 || -1);