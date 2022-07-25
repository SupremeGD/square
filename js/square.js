var div = document.querySelector("#square");
var btn1 = document.querySelector("#button_1");
var btn2 = document.querySelector("#button_2");
var btn3 = document.querySelector("#button_3");
var btn4 = document.querySelector("#button_4");
var btn5 = document.querySelector("#button_5");

//按钮1
var sum1 = 0;
btn1.onclick = function button_1() {
    sum1 = sum1 + 1;
    if (sum1 % 2 == 0) {
        div.style.width = "100px";
    } else {
        div.style.width = "200px";
    }
}

//按钮2
var sum2 = 0;
btn2.onclick = function button_2() {
    sum2 = sum2 + 1;
    if (sum2 % 2 == 0) {
        div.style.height = "100px";
    } else {
        div.style.height = "200px";
    }
}

//按钮3
var sum3 = 0;
btn3.onclick = function button_3() {
    sum3 = sum3 + 1;
    if (sum3 % 2 == 0) {
        div.style.background = "greenyellow";
    } else {
        div.style.background = "red";
    }
}

//按钮4
var left = 0;
btn4.onclick = function button_4() {
    left = left + 200;
    div.style.transform = "translateX(" + left + "px)";
}

//按钮5
btn5.onclick = function button_5() {
    left = left -200;
    div.style.transform = "translateX(" + left + "px)";
}