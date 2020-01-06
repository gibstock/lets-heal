const hamMenu = document.querySelector('.hamburger');
const navWrapper = document.querySelector('.nav-wrapper');
const nav = navWrapper.querySelector('nav');
const off = document.querySelector('.offerings');
const main = document.querySelector('.main-grid');
const dailyColor = document.querySelector('.daily-color');
const label = dailyColor.querySelector('label');
const today = label.querySelector('#today');
const btn = dailyColor.querySelector('#button');
const color = document.querySelector('.color');
const bday = document.querySelector('#birthday');
const code = document.querySelector('#code');
const mantra = document.querySelector('.daily-mantra');
const codeBtn = document.querySelector('#code-submit');


let codeArray = ['746374', '948374', '930384', '991711', '938373','99843','988444', '017151', '243794', '726222', '009909'];

let date = new Date();
let month = date.getMonth() + 1;
let day = date.getDate();
let year = date.getFullYear();
let currentDate = `${month}/${day}/${year}`;

function openMenu(){
    if(nav.style.display === '' || nav.style.display === 'none'){
        nav.style.display = 'inherit';
        nav.style.opacity = '1';
    }else if(nav.style.display === 'inherit'){
        nav.style.display = 'none';
        nav.style.opacity = '0';
    }
}
function offMenu(){
    if(main.style.display === '' || main.style.display === 'none'){
        main.style.display = 'grid';
    }else if(main.style.display === 'grid'){
        main.style.display = 'none';
    }

}

function randomizer() {
    if(bday.value !== ""){
        var r1 = Math.floor(Math.random() *(999999 - 100000)) + 100000;
    color.style.background = "#" + r1;
    }else{
        return;
    }
    
    
}
function checkForm(form){
    form.subBtn.disabled = true;
    return true;
}
function codeCheck(){
    if(codeArray.includes(code.value)){
        mantra.style.display = 'flex';
    }else{
        alert('Please enter your email to receive a valid code. If you have and this is an error, please contact our support team.');
    }
}
today.innerHTML = currentDate;

hamMenu.addEventListener('click', openMenu);
off.addEventListener('click', offMenu);
btn.addEventListener('click', randomizer);
codeBtn.addEventListener('click', codeCheck);
