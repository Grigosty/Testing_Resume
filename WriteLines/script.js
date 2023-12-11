//объявления
let a_canvas = document.getElementById("a");
let context = a_canvas.getContext("2d");
let input = document.getElementById("1");
let page = document.querySelector("page");
let btClean=document.getElementById("btClean");
let colorOfPero = document.getElementById("pero");
let colorOfBack = document.getElementById("background");

let firstX;//X первой точки
let firstY;//Y первой точки
let secondX;//X второй точки
let secondY;//Y второй точки

//вспомогительные функции
function draw(firstX,firstY,secondX,secondY){
    context.moveTo(firstX,firstY);
    context.lineTo(secondX,secondY);
    context.stroke();
}

//обработчики событий

//Изменение цвета пера
colorOfPero.onchange=function(){
    context.closePath();
    context.strokeStyle=colorOfPero.value;
    context.beginPath();
}

//Изменение цвета фона
colorOfBack.onchange=function(e){
    a_canvas.style.backgroundColor=colorOfBack.value;
}

//очистка экрана
btClean.onclick=function(e){
    context.closePath();
    context.clearRect(0,0,a_canvas.width,a_canvas.height);
    
}

//начало рисования (когда зажимаем ЛКМ)
a_canvas.onmousedown=function getCursorPos(e){
    firstX = e.pageX-9;
    firstY = e.pageY-8;
    a_canvas.addEventListener("mousemove", getChangingPos);
}

//рисование (когда двигаем мышкой при зажатой mousedown)
a_canvas.onmouseup=function stopChanging(e){
    a_canvas.removeEventListener("mousemove",getChangingPos);
}

//метод, который слушает движение мышки при зажатой ЛКМ
function getChangingPos(e){
    secondX = e.pageX-9;
    secondY = e.pageY-8;
    draw(firstX,firstY,secondX,secondY);
    firstX = secondX;
    firstY = secondY;
}