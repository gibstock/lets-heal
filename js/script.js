
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
const emailSubmit = document.querySelector('#email-submit');
const birthdayReg = document.querySelector('#birthdayReg');
const name = document.querySelector('#name');
const email = document.querySelector('#email');


let codeArray = ['746374', '948374', '930384', '991711', '938373','99843','988444', '017151', '243794', '726222', '009909'];

let mantras = [
    'Let the light in', 'give the last bite away', 'stop and pay close attention', 'say HELLO today', 'Be here NOW', 'Life responds to my deep desire to tap into abundance','Thank you. Thank you. Thank you.',
    'I measure my success by how much fun I’m having.',
    
   ' I am open to accepting all forms of abundance that are on their way to me',
    
    'Life becomes so giving when I am generous',
    
  '  All of life’s truest riches are within my reach',
    
    'I have (more than) enough time (for everything that I love)',
    
    'I delight in and praise the good fortune and success of others; the spark that burns in them also resides in me',
    
    ' I have everything that I need, right here and now, to fully engage with life',
    
    'I transform every obstacle into an opportunity',
    
    ' I am eternally grateful for the abundant intelligence that brought me here',
    
    'In every waking moment, I touch the depth of life and experience my own expansion',
    
    ' I am connected to boundless abundance, creativity, and potential',
    
    ' I am a magnet for miracles',
    
    'I am grateful for every gift that I’ve been given, have now, and have yet to receive',
    
    'The universe always has my back, and is supporting my highest good',
    
    
    
    
    'I have it in me to figure out what I need to become in order to be where I want to be',
    
    ' I am willing to embrace the glorious mess that I am',
    
    ' I am shedding the energies that no longer match the frequency of my future',
    
    'I love my food, and my food loves me',
    
    'I am always doing my best, and I can forgive the rest',
    
    ' I imagine the best possible version of me, and I release any part of me that doesn’t believe in it',
    
    'As I love and accept myself as I am, right now, life gets better',
    
    
    
    'It does not matter how slowly I go compared to others; what truly matters is my authentic presence with each step',
    
    'I am not lukewarm in my passion, but fully committed to what I want to experience today',
    
    'I attract my best possible self by devoting the entirety of my energy to feeling and being what I want',
    
    'The moon shines in every phase of her life, and so can I',
    
    ' My sincere self-acceptance takes me straight to joy',
    
    'I am my own best friend',
    
    'All that I have ever loved stays with me',
    
    'I am afforded ample time to grow into who I’m destined to be, and I am loved along the way',
]

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
    color.scrollIntoView();
    }else{
        return;
    }
    
    
}
function randomizer2() {
        var r1 = Math.floor(Math.random() *(999999 - 100000)) + 100000;
    color.style.background = "#" + r1;
    color.scrollIntoView();
}
function checkForm(form){
    form.subBtn.disabled = true;
    return true;
}
function checkForm2(form){
    form.codeSubmit.disabled = true;
    return true;
}
function mantraPicker(){
    mantra.innerHTML = mantras[Math.floor(Math.random()*mantras.length)];
    randomizer2();
}
function codeCheck(){
    if(codeArray.includes(code.value)){
        mantra.style.display = 'flex';
        mantraPicker();

    }else{
        alert('Please enter your email to receive a valid code. If you have and this is an error, please contact our support team.');
    }
}
today.innerHTML = currentDate;

hamMenu.addEventListener('click', openMenu);
off.addEventListener('click', offMenu);
btn.addEventListener('click', randomizer);
codeBtn.addEventListener('click', codeCheck);
// emailSubmit.addEventListener('click', randomizer2 )
