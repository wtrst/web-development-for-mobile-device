function makeAbba(str1, str2) {
    'use strict';
    
    var result = str1 + str2 + str2 + str1;
    return result;
}


function endsLy(str) {
    'use strict';
    
    if (str.length <= 1) {
        return false;
    }
    
    var ends = str.substr(str.length - 2, 2);
    
    if (ends === "ly") {
        return true;
    } else {
        return false;
    }
    
}


function firstHalf(str) {
    'use strict';
    
    if (str.length % 2 !== 0) {
        return "Type a word which has even length.";
    }
    
    var halfLen = str.length / 2;
    
    return str.substr(0, halfLen);
        
}


function right2(str) {
    'use strict';
    
    if (str.length < 2) {
        return "A length of a word should be at least 2.";
    } else if (str.length === 2) {
        return str;
    } else {
        return str.substr(str.length - 2, 2) + str.substr(0, str.length - 2);
    }
        
}


function conCat(str1, str2) {
    'use strict';
    
    if (str1.substr(str1.length - 1, 1) === str2.substr(0, 1)) {
        return str1 + str2.substr(1, str2.length - 1);
    } else {
        return str1 + str2;
    }
        
}


function frontAgain(str) {
    'use strict';
    
    if (str.length < 2) {
        return "A length of a word should be at least 2.";
    } else if (str.length === 2) {
        return true;
    } else {
        if (str.substr(0, 2) === str.substr(str.length - 2, 2)) {
            return true;
        } else {
            return false;
        }
    }
        
}


function deFront(str) {
    'use strict';
    
    var result = "";
    if (str.substr(0, 1) === "a") {
        result += "a";
    }
    if (str.substr(1, 1) === "b") {
        result += "b";
    }
    
    result += str.substr(2, str.length - 2);
    return result;
        
}


function withoutX2(str) {
    'use strict';
    
    return str.substr(0, 2).replace(/x/g, "") + str.substr(2, str.length - 2);    
}


function lastChars(str1, str2) {
    'use strict';
    
    if (str1.length > 0 && str2.length > 0) {
        return str1.substr(0, 1) + str2.substr(str2.length - 1, 1);
    } else if (str1.length === 0 && str2.length > 0) {
        return "@" + str2.substr(str2.length - 1, 1);
    } else if (str1.length > 0 && str2.length === 0) {
        return str1.substr(0, 1) + "@";
    } else {
        return "@@";
    }
        
}


function middleTwo(str) {
    'use strict';
    
    if (str.length < 2) {
        return "A length of a word should be at least 2.";
    } else if (str.length % 2 !== 0) {
        return "A word should have even length.";
    } else if (str.length === 2) {
        return str;
    } else {
        var half = str.length / 2;
        return str.substr(half - 1, 2);
    }
        
}

