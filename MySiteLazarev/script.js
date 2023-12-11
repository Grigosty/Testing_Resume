/*
Создать форму авторизации
1) Механизм сохранения данных при регистрации
2) Механизм сравнения данных при авторизации
    2.1) если сравнение удачно - открытие страницы "Главная"
    2.2) если сравнение неудачно - alert("Вы ввели некорректный логин/пароль")
3) Стилистические улучшения
*/


let name = document.querySelector('.iname');

let pass = document.querySelector('.ipass');

let form = document.querySelector('.check');


let body = document.querySelector('body');
let buttonIn = document.getElementById('bt');
let buttonAuth=document.getElementById('btAuth');
let newLabelContent = document.querySelector('label');


function changingContext(){
  newLabelContent.textContent="Такой email уже существует. Попробуйте другой."
}

function clearContext(){
  newLabelContent.textContent="";
}

function spaceContent(){
  newLabelContent.textContent="Одно или несколько полей пустые, заполните поля!";
}

buttonIn.onclick = function (evt) {
  evt.preventDefault();
  if((name.value!='')&&(pass.value!=''))
  {
    let counterStop = 0;
    for(let i=0; i<localStorage.length; i++){
      counterStop = i;
      if(localStorage.key(i)==name.value){
        setTimeout(changingContext);
        setTimeout(clearContext, 3000);
        name.value="";
        pass.value="";
        break;
      }
    }
    if(counterStop == localStorage.length-1){
      localStorage.setItem(name.value,pass.value);
      name.value = '';
      pass.value = '';
      alert("Теперь можно авторизоваться!");
      window.location.href='authpage.html';
      
    }
  }
  else
  {
    setTimeout(spaceContent);
    setTimeout(clearContext, 3000);
  }
};
buttonAuth.onclick = function(evt){
  evt.preventDefault();
  window.location.href = 'authpage.html';
}



  
//console.log(bodyAuth);


  
