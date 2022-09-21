var btnGithubPopup1 = document.querySelector('#btnGithubPopup1');
var overlay = document.querySelector('#overlay');
var popup = document.querySelector('#popup');
var btnClosePopup = document.querySelector('#btnClosePopup');


btnGithubPopup1.addEventListener('click',activeClass)
btnClosePopup.addEventListener('click',removeClass)

function activeClass(){
    overlay.classList.add('active');
    popup.classList.add('active');
}
function removeClass(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
}