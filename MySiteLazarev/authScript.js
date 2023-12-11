let nameOut = document.querySelector('.inameout');
let passOut = document.querySelector('.ipassout');
let buttonOut = document.getElementById('bt2');
let buttonReg = document.getElementById('btReg');
let form = document.querySelector('.form-container');
let newLabelContent = document.querySelector('label');
let checkBox = document.getElementById('checkBox');
function clearContext(){
  newLabelContent.textContent="";
}

function spaceContent(){
  newLabelContent.textContent="Одно или несколько полей пустые, заполните поля!";
}

function addContent(){
  newLabelContent.textContent="Вы ввели неправильный Логин/пароль";
}

buttonOut.onclick = function(evt) {
    evt.preventDefault();
    if((nameOut.value!='')&&(passOut!='')){
        let systemPass = localStorage.getItem(nameOut.value);
        if((localStorage.getItem(nameOut.value)==passOut.value)&&(systemPass==passOut.value)){
            nameOut.value = '';
            passOut. value = '';
            if(checkBox.checked){
              localStorage.setItem("isAuth", "true");
            }
            else{
              sessionStorage.setItem("isAuth", "true");
            }
            
            window.location.href = 'index.html';
        }
        else{
          setTimeout(addContent);
          setTimeout(clearContext, 3000);
          nameOut.value = '';
          passOut. value = '';
        }
    }
    else{
      setTimeout(spaceContent);
      setTimeout(clearContext, 3000);
    }
    
};

buttonReg.onclick = function(evt){
  evt.preventDefault();
  window.location.href = 'registrationpage.html';
}

