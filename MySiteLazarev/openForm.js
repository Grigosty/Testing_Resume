
document.addEventListener("DOMContentLoaded", () => {
    if((sessionStorage.getItem("isAuth")=="true")||(localStorage.getItem("isAuth")=="true")){
        
    }
    else{
        window.location.href = 'authpage.html';
    }
});