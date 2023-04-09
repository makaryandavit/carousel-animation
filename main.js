const content = document.querySelector('.content');
const left = document.querySelector('.dzax');
const right = document.querySelector('.aj');
let i = 0;

left.addEventListener('click',function(){
    content.style.cssText = `transform: rotateY(${i+=90}deg);transition: 2s ease-in-out;`
})

right.addEventListener('click',function(){
    content.style.cssText = `transform: rotateY(${i-=90}deg);transition: 2s ease-in-out;`
})