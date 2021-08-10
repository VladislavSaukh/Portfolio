let headOverHeals = document.getElementById('HeadOverHeals');
let teaKozzy = document.getElementById('tea-kozzy');
let headButton =  document.querySelector('.for-HeadOverHeals')
let teaButton = document.querySelector('.for-tea-kozzy');
let changeButton = document.getElementById('change-background')
let main = document.querySelector('main')
let isOpen = true;
let isTeaOpen = true;
let neDarkMode = false;
let openHead = ()=>{
    headOverHeals.style.display ='block';
    headOverHeals.style.opacity ='1';
    headButton.innerHTML= 'Close';
    isOpen = false;
    if(neDarkMode){headButton.style.backgroundColor='white'; headButton.style.color='black'} else {headButton.style.backgroundColor='black', headButton.style.color='white'}
    headButton.removeEventListener('click', openHead)
    headButton.addEventListener('click', closeHead)
}
let closeHead = ()=>{
    headOverHeals.style.display='none'
    headOverHeals.style.opacity='1';
    headButton.innerHTML = 'Show'
    isOpen=true;
    if(neDarkMode){headButton.style.backgroundColor='white'} else {headButton.style.backgroundColor='black'}
    headButton.removeEventListener('click', closeHead)
    headButton.addEventListener('click', openHead)
}
let openTea = ()=>{
    teaKozzy.style.display ='block';
    teaKozzy.style.opacity ='1';
    teaButton.innerHTML= 'Close';
    isTeaOpen = false;
    teaButton.removeEventListener('click', openTea)
    teaButton.addEventListener('click', closeTea)
}
let closeTea = ()=>{
    teaKozzy.style.display='none'
    teaKozzy.style.opacity='1';
    teaButton.innerHTML = 'Show'
    isTeaOpen=true;
    teaButton.removeEventListener('click', closeTea)
    teaButton.addEventListener('click', openTea)
}
let changeToDark =()=>{
    main.style.backgroundColor='black'
    main.style.color='white'
    changeButton.style.backgroundColor='white'
    changeButton.style.color='black'
    changeButton.innerHTML='Light Mode'
    document.querySelector('ul').style.borderTop='1px solid white'
    document.querySelector('ul').style.borderBottom='1px solid white'
    neDarkMode = true;
    changeButton.removeEventListener('click', changeToDark)
    changeButton.addEventListener('click', changeToLight)
}
let changeToLight = ()=>{
    main.style.backgroundColor='white'
    main.style.color='black'
    changeButton.style.backgroundColor='black'
    changeButton.style.color='white'
    changeButton.innerHTML='Dark Mode'
    document.querySelector('ul').style.borderTop='1px solid black'
    document.querySelector('ul').style.borderBottom='1px solid black'
    neDarkMode = false;
    changeButton.removeEventListener('click', changeToLight)
    changeButton.addEventListener('click', changeToDark)
}
changeToDark()
if(neDarkMode){headButton.style.backgroundColor='white'; headButton.style.color='black'} else {headButton.style.backgroundColor='black', headButton.style.color='white'}
 isOpen ?  headButton.addEventListener('click', openHead) : headButton.addEventListener('click', closeHead);
 isTeaOpen ?  teaButton.addEventListener('click', openTea) : teaButton.addEventListener('click', closeTea)
 neDarkMode ? changeButton.addEventListener('click', changeToDark) : changeButton.addEventListener('click', changeToLight)