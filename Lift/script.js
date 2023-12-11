/*
Что мы хотим?
Что бы лифт ехал некоторое время до нужной точки
Для этого нужно использовать таймер, причем сначала его включить, потом отключить, когда лифт достигнет конечной точки
Мы знаем текущую позицию
Мы знаем конечную позицию
Мы знаем дельта между ними
Если дельта положительная(начальное минус конечное) - лифт едет вверх
Если дельта отрицательная(начальное минус конечное) - лифт едет вниз
Нам нужен таймер, который будет вызывать функцию прибавления(например по 20 + px до момента пока мы не достигнем точки lastPos)
В конце нам нужно придать posNow Значение posLast, когда таймер закончит работу
*/ 




//элемент Лифт
let lift = document.querySelector(".lift-karkas");
//Элемент дверь левая
let door1 = document.querySelector(".door1");
//Элемент дверь правая
let door2 = document.querySelector(".door2");

//вытаскиваем кнопки этажей
let bt1 = document.getElementById("1");
let bt2 = document.getElementById("2");
let bt3 = document.getElementById("3");
let bt4 = document.getElementById("4");
let bt5 = document.getElementById("5");
let bt6 = document.getElementById("6");
//вытаскиваем кнопку вызова лифта
let btCall = document.getElementById("0");
//глобальная переменная для хранения точки назначения лифта
let posLast;
btOffStart();

/*
Алгоритм работы лифта
1) Нажимаем на кнопку вызова
2) Двери открываются
2) Нажимаем на кнопку этажа
3) Двери закрываются
4) Лифт едет
5) Когда он приехал на нужный этаж - двери открываются
*/


function btOff(){//выключение кнопок во время взаимодействия с лифтом
    bt1.setAttribute("disabled", "disabled");
    bt2.setAttribute("disabled", "disabled");
    bt3.setAttribute("disabled", "disabled");
    bt4.setAttribute("disabled", "disabled");
    bt5.setAttribute("disabled", "disabled");
    bt6.setAttribute("disabled", "disabled");
    btCall.setAttribute("disabled", "disabled");
}

function btOffStart(){//выключение кнопок во время взаимодействия с лифтом
    bt1.setAttribute("disabled", "disabled");
    bt2.setAttribute("disabled", "disabled");
    bt3.setAttribute("disabled", "disabled");
    bt4.setAttribute("disabled", "disabled");
    bt5.setAttribute("disabled", "disabled");
    bt6.setAttribute("disabled", "disabled");
}


function btOn(){//включение кнопок по завершению взаимодействия с лифтом
    bt1.removeAttribute("disabled");
    bt2.removeAttribute("disabled");
    bt3.removeAttribute("disabled");
    bt4.removeAttribute("disabled");
    bt5.removeAttribute("disabled");
    bt6.removeAttribute("disabled");
    btCall.removeAttribute("disabled");
}

function btOnStart(){//включение кнопок по завершению взаимодействия с лифтом
    bt1.removeAttribute("disabled");
    bt2.removeAttribute("disabled");
    bt3.removeAttribute("disabled");
    bt4.removeAttribute("disabled");
    bt5.removeAttribute("disabled");
    bt6.removeAttribute("disabled");
}

function doorsOpen(){//функция открытия дверей

    btOff();
    //начальные позиции дверей
    let door1Pos = 25;
    let door2Pos = 25;
    
    let timerId=setInterval(()=>{
        door1.style.width=(door1Pos).toString() + "px"
        door1Pos--;
        door2.style.width=(door2Pos).toString() + "px"
        door2Pos++;
        if((door1Pos<=-1)&&(door2Pos>=50)){
            clearInterval(timerId);
            btOn();
        }
    },100);
}

function doorsClose(){//закрытие дверей и вызов функции Transport() по окончанию
    
    btOff();
    //начальные позиции дверей
    let door1Pos = 0;
    let door2Pos = 50;
    
    let timerId=setInterval(()=>{
        door1.style.width=(door1Pos).toString() + "px"
        door1Pos++;
        door2.style.width=(door2Pos).toString() + "px"
        door2Pos--;
        if((door1Pos>=25)&&(door2Pos<=25)){
            clearInterval(timerId);
            Transport();
        }
    },100);
}

function Transport(){//функция передвижения лифта ОСНОВНАЯ

let posNow=lift.getBoundingClientRect();
let now = parseInt(posNow.top);
let delta = posLast - now;
btOff();
if(delta>0){
    //едем вниз
    let timerId=setInterval(function OnlyUp(){
    let posNow=lift.getBoundingClientRect();
    let posTop = parseInt(posNow.top);
    posTop += 10;
    delta-=10;
    lift.style.top=posTop.toString()+"px";
    if(delta==0){//стопим таймер, когда достигли нужной точки
        clearInterval(timerId);
        doorsOpen();
    }
    },50);

}
else if(delta<0){
    //едем вверх
    let timerId=setInterval(function OnlyDown(){
    let posNow=lift.getBoundingClientRect();
    let posTop = parseInt(posNow.top);
    posTop -= 10;
    delta+=10;
    lift.style.top=posTop.toString()+"px";
    if(delta==0){//стопим таймер когда достигли нужной точки
        clearInterval(timerId);
        doorsOpen();
    }
},50);
}
}

//события кнопок

btCall.onclick=function(evt){//кнопка вызова лифта
    evt.preventDefault();
    doorsOpen();
}

bt1.onclick=function(evt){
    evt.preventDefault();
    posLast = 600;
    doorsClose();
    }
bt2.onclick=function(evt){
    evt.preventDefault();
    posLast = 500;
    doorsClose();
}
bt3.onclick=function(evt){
    evt.preventDefault();
    posLast = 400;
    doorsClose();
}
bt4.onclick=function(evt){
    evt.preventDefault();   
    posLast = 300;
    doorsClose();
}
bt5.onclick=function(evt){
    evt.preventDefault();
    posLast = 200;
    doorsClose();
}
bt6.onclick=function(evt){
    evt.preventDefault();
    posLast = 100;
    doorsClose();
}
