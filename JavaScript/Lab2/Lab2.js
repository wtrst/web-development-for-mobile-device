// No.1
function rotateLeft3(arg) {
    "use strict";

    var ary = new Array(3);

    ary = arg;

    var tmp = ary.shift();
    ary.push(tmp);

    return ary;
}

// No.2
function reverse3(arg) {
    "use strict";

    var ary = new Array(3);

    ary = arg;

    var tmp = ary[0];
    ary[0] = ary[2];
    ary[2] = tmp;

    return ary;
}

// No.3
function has23(arg) {
    "use strict";

    var ary = new Array(2);

    ary = arg;

    var size = ary.length;

    for (var i = 0; i < size; i++) {
        if ((ary[i] === 2) || (ary[i] === 3)) {
            return true;
        }
    }

    return false;
}

// No.4
function fix23(arg) {
    "use strict";

    var ary = new Array(3);

    ary = arg;

    var size = ary.length;

    for (var i = 0; i < size - 1; i++) {
        if ((ary[i] === 2) && (ary[i + 1] === 3)) {
            ary[i + 1] = 0;
        }
    }

    return ary;
}

// No.5
function maxTriple(arg) {
    "use strict";

    var size = arg.length;

    if (size % 2 === 0) {
        return "A length of this array should be odd number."
    }

    var ary = new Array(size);

    ary = arg;

    for (var i = 0, max = 0; i < size; i++) {
        if (ary[i] > max) {
            max = ary[i];
        }
    }

    return max;
}

// No.6
function swapEnds(arg) {
    "use strict";

    var size = arg.length;
    var ary = new Array(size);

    ary = arg;

    var tmp = ary[0];
    ary[0] = ary[size - 1];
    ary[size - 1] = tmp;

    return ary;
}


// No.7
function unlucky1(arg) {
    "use strict";

    var size = arg.length;
    var ary = new Array(size);

    ary = arg;

    for (var i = 0; i < 2; i++) {
        if ((ary[i] === 1) && (ary[i + 1] === 3)) {
            return true;
        }
    }

    if ((ary[size - 2] === 1) && (ary[size - 1] === 3)) {
        return true;
    }

    return false;
}

// No.8
function front11(arg1, arg2) {
    "use strict";

    var size1 = arg1.length;
    var size2 = arg2.length;
    var ary = new Array(2);

    ary[0] = arg1;
    ary[1] = arg2;

    if ((size1 !== 0) && (size2 !== 0)) {
        var newAry = new Array(2);

        newAry[0] = ary[0].shift();
        newAry[1] = ary[1].shift();
    } else if ((size1 === 0) && (size2 !== 0)) {
        var newAry = new Array(1);

        newAry[0] = ary[1].shift();
    } else if ((size1 !== 0) && (size2 === 0)) {
        var newAry = new Array(1);

        newAry[0] = ary[0].shift();
    } else {
        return null;
    }

    return newAry;
}

// No.9
function isEverywhere(arg1, arg2) {
    "use strict";

    var size = arg1.length;
    var ary = new Array(2);

    ary[0] = arg1;
    ary[1] = arg2;

    for (var i = 0; i < size - 1; i++) {
        if ((ary[0][i] !== ary[1]) && (ary[0][i + 1] !== ary[1])) {
            return false;
        }
    }

    return true;
}

// No.10
function tenRun(arg) {
    "use strict";

    var size = arg.length;
    var ary = new Array(size);

    ary = arg;

    for (var i = 0, tmp = 0; i < size; i++) {
        if ((ary[i] % 10 === 0) && (ary[i] !== tmp)) {
            tmp = ary[i];
        }
        if (tmp !== 0) {
            ary[i] = tmp;
        }
    }

    return ary;
}

// No.11
function twoTwo(arg) {
    "use strict";

    var size = arg.length;
    var ary = new Array(size);

    ary = arg;

    for (var i = 0; i < size; i++) {
        if (ary[i] === 2) {
            if ((ary[i - 1] !== 2) && (ary[i + 1] !== 2)) {
                return false;
            }
        }
    }

    return true;
}

// No.12
function shiftLeft(arg) {
    "use strict";

    var size = arg.length;
    var ary = new Array(size);

    ary = arg;

    var tmp = ary.shift();
    ary[size - 1] = tmp;

    return ary;
}

// No.13
function evenOdd(arg) {
    "use strict";

    var size = arg.length;
    var ary = new Array(size);
    var eveAry = new Array();
    var oddAry = new Array();
    var newAry = new Array(size);

    ary = arg;

    for (var i = 0; i < size; i++) {
        if (ary[i] % 2 === 0) {
            eveAry.push(ary[i]);
        } else {
            oddAry.push(ary[i]);
        }
    }

    eveAry.sort();
    oddAry.sort();

    newAry = eveAry.concat(oddAry)

    return newAry;
}

// No.14
function fizzBuzz(arg1, arg2) {
    "use strict";

    var size = arg2 - arg1;
    var ary = new Array(size);
    var start = arg1;

    for (var i = 0; i < size; i++) {
        ary[i] = start;
        start++;
    }

    String(ary);

    for (var k = 0; k < size; k++) {
        if (((k + 1) % 15 === 0) && ((k + 1) / 15 >= 1)) {
            ary[k] = "FizzBuzz";
        } else if (((k + 1) % 3 === 0) && ((k + 1) / 3 >= 1)) {
            ary[k] = "Fizz";
        } else if (((k + 1) % 5 === 0) && ((k + 1) / 5 >= 1)) {
            ary[k] = "Buzz";
        }
    }

    return ary;
}

// No.15
function countClumps(arg) {
    "use strict";

    var size = arg.length;
    var ary = new Array(size);
    var cnt = 0;

    ary = arg;

    for (var i = 0; i < size; i++) {
        if ((ary[i] === ary[i - 1]) && (ary[i] !== ary[i - 2])) {
            cnt++;
        }
    }

    return cnt;
}
