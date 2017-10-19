var arr2 = new Array(9);
var cnt = 0;
var sTime = new Date();
var sHour = sTime.getHours();
var sMin = sTime.getMinutes();
var sSec = sTime.getSeconds();


//To create random number
function makeRandomNum() {
    'use strict';

    var arr = new Array(9);
    var tmp = null;

    for (var i = 0; i < 9; i++) {
        tmp = Math.floor(Math.random() * 9);
        while (arr.includes(tmp) === true) {
            tmp = Math.floor(Math.random() * 9);
        }
        arr[i] = tmp;
    }

    String(arr);

    for (var j = 0; j < 9; j++) {
        if (arr[j] === 0) {
            arr[j] = "";
        }
    }

    return arr;
}

arr2 = makeRandomNum();

//To display number, count and time
function dispNum() {
    'use strict';

    document.getElementById("plc0").innerHTML = arr2[0];
    document.getElementById("plc1").innerHTML = arr2[1];
    document.getElementById("plc2").innerHTML = arr2[2];
    document.getElementById("plc3").innerHTML = arr2[3];
    document.getElementById("plc4").innerHTML = arr2[4];
    document.getElementById("plc5").innerHTML = arr2[5];
    document.getElementById("plc6").innerHTML = arr2[6];
    document.getElementById("plc7").innerHTML = arr2[7];
    document.getElementById("plc8").innerHTML = arr2[8];

    var solveFlg = checkSolve();

    document.getElementById("cnt").innerHTML = "Moves : " + cnt;
    document.getElementById("strtTime").innerHTML = "Start Time : " + sHour + ":" + sMin + ":" + sSec;
    if (solveFlg === 1) {
        var eTime = new Date();
        var eHour = eTime.getHours();
        var eMin = eTime.getMinutes();
        var eSec = eTime.getSeconds();
        document.getElementById("endTime").innerHTML = "End Time : " + eHour + ":" + eMin + ":" + eSec;

        
// ******* EXTRA **********************
//        var score = (eHour * 3600 + eMin * 60 + eSec) - (sHour * 3600 + sMin * 60 + sSec)
//        var scoreH = Math.floor(score / 3600);
//        var scoreM = Math.floor((score - scoreH) / 60);
//        var scoreS = 
//        document.getElementById("score").innerHTML = "Score : " + Math.floor(score / 3600) + ":" + (score / 60) + ":" + (score / 3600);
// ***********************************
    }
}


//To display all element at the begining
makeRandomNum();
dispNum(cnt);


//To get ID of an element which is clicked to move it
function getId(ele) {
    var id = ele.id;

    if (id === "plc0" || id === "plc2" || id === "plc6" || id === "plc8") {
        move2(id);
    } else if (id === "plc1" || id === "plc3" || id === "plc5" || id === "plc7") {
        move3(id);
    } else {
        move4(id);
    }


}

//To move an element which has 2 neighbors
function move2(id) {
    var idNum = Number(id.substr(3, 1));
    var num1 = null;
    var num2 = null;

    switch (idNum) {
        case 0:
            num1 = 1;
            num2 = 3;
            break;
        case 2:
            num1 = 1;
            num2 = 5;
            break;
        case 6:
            num1 = 3;
            num2 = 7;
            break;
        case 8:
            num1 = 5;
            num2 = 7;
            break;
    }

    if (arr2[num1] === "") {
        arr2[num1] = arr2[idNum];
        arr2[idNum] = "";
        dispNum(cnt++);
    } else if (arr2[num2] === "") {
        arr2[num2] = arr2[idNum];
        arr2[idNum] = "";
        dispNum(cnt++);
    }
}

//To move an element which has 3 neighbors
function move3(id) {
    var idNum = Number(id.substr(3, 1));
    var num1 = null;
    var num2 = null;
    var num3 = null;

    switch (idNum) {
        case 1:
            num1 = 0;
            num2 = 2;
            num3 = 4;
            break;
        case 3:
            num1 = 0;
            num2 = 4;
            num3 = 6;
            break;
        case 5:
            num1 = 2;
            num2 = 4;
            num3 = 8;
            break;
        case 7:
            num1 = 4;
            num2 = 6;
            num3 = 8;
            break;
    }

    if (arr2[num1] === "") {
        arr2[num1] = arr2[idNum];
        arr2[idNum] = "";
        dispNum(cnt++);
    } else if (arr2[num2] === "") {
        arr2[num2] = arr2[idNum];
        arr2[idNum] = "";
        dispNum(cnt++);
    } else if (arr2[num3] === "") {
        arr2[num3] = arr2[idNum];
        arr2[idNum] = "";
        dispNum(cnt++);
    }
}

//To move an element which has 4 neighbors
function move4(id) {
    var idNum = Number(id.substr(3, 1));
    var num1 = 1;
    var num2 = 3;
    var num3 = 5;
    var num4 = 7;


    if (arr2[num1] === "") {
        arr2[num1] = arr2[idNum];
        arr2[idNum] = "";
        dispNum(cnt++);
    } else if (arr2[num2] === "") {
        arr2[num2] = arr2[idNum];
        arr2[idNum] = "";
        dispNum(cnt++);
    } else if (arr2[num3] === "") {
        arr2[num3] = arr2[idNum];
        arr2[idNum] = "";
        dispNum(cnt++);
    } else if (arr2[num4] === "") {
        arr2[num4] = arr2[idNum];
        arr2[idNum] = "";
        dispNum(cnt++);
    }
}


//To judge solving the puzzle
function checkSolve() {
    var solveFlg = 0;

    if ((arr2[0] === 1) && (arr2[1] === 2) && (arr2[2] === 3) && (arr2[3] === 4) && (arr2[4] === 5) && (arr2[5] === 6) && (arr2[6] === 7) && (arr2[7] === 8) && (arr2[8] === "")) {
        solveFlg = 1;
    }

    return solveFlg;
}


//To get ID of an element which is mouseovered to change its color
function changeColor(ele) {
    var id = ele.id;
    var result = 0;

    if (arr2[Number(id.substr(3, 1))] === "") {
        return;
    }

    if (id === "plc0" || id === "plc2" || id === "plc6" || id === "plc8") {
        result = checkMove2(id);
    } else if (id === "plc1" || id === "plc3" || id === "plc5" || id === "plc7") {
        result = checkMove3(id);
    } else {
        result = checkMove4(id);
    }

    if (result === 1) {
        ele.style.backgroundColor = "lightgreen";
    } else {
        ele.style.backgroundColor = "lightpink";
    }

}


//To change color of an element which has 2 neighbors
function checkMove2(id) {
    var idNum = Number(id.substr(3, 1));
    var num1 = null;
    var num2 = null;

    switch (idNum) {
        case 0:
            num1 = 1;
            num2 = 3;
            break;
        case 2:
            num1 = 1;
            num2 = 5;
            break;
        case 6:
            num1 = 3;
            num2 = 7;
            break;
        case 8:
            num1 = 5;
            num2 = 7;
            break;
    }

    if ((arr2[num1] === "") || (arr2[num2] === "")) {
        return 1;
    } else {
        return 0;
    }
}


//To change color of an element which has 3 neighbors
function checkMove3(id) {
    var idNum = Number(id.substr(3, 1));
    var num1 = null;
    var num2 = null;
    var num3 = null;

    switch (idNum) {
        case 1:
            num1 = 0;
            num2 = 2;
            num3 = 4;
            break;
        case 3:
            num1 = 0;
            num2 = 4;
            num3 = 6;
            break;
        case 5:
            num1 = 2;
            num2 = 4;
            num3 = 8;
            break;
        case 7:
            num1 = 4;
            num2 = 6;
            num3 = 8;
            break;
    }

    if ((arr2[num1] === "") || (arr2[num2] === "") || (arr2[num3] === "")) {
        return 1;
    } else {
        return 0;
    }
}


//To change color of an element which has 4 neighbors
function checkMove4(id) {
    var idNum = Number(id.substr(3, 1));
    var num1 = 1;
    var num2 = 3;
    var num3 = 5;
    var num4 = 7;


    if ((arr2[num1] === "") || (arr2[num2] === "") || (arr2[num3] === "") || (arr2[num4] === "")) {
        return 1;
    } else {
        return 0;
    }
}


//To return color of an element which is mouseout
function returnColor(ele) {
    ele.style.backgroundColor = "white";
}
