var plusbutton = document.getElementById('plusbutton')
var popup =document.getElementById('popup');
var blur= document.getElementById('blur');


function openPopUp(){
    popup.classList.add("open-popup");
    blur.classList.toggle('active');
}

function closePopUp(){
    popup.classList.remove("open-popup");
    blur.classList.remove('active')
}

function addtodo(){}