
// ************************************** Controller ********************************************* \\

let leftSlide = document.querySelector('.left');
let rightSlide = document.querySelector('.right');
let imageSlide = document.querySelector('.img').children;
let flag  = 0;
let totalSlides = imageSlide.length;

leftSlide.addEventListener('click',() =>{
    controller();   
});

rightSlide.addEventListener('click',() =>{
    controller();
});


function controller(){

    if(imageSlide == flag){
        flag++;

        if(flag == totalSlides){
        flag = 0;
        }

    }

    else{
        if(flag == 0){
            flag = totalSlides - 1;
        }
        else{
            flag--;
        }
    }

    for(let i = 0; i < imageSlide.length; i++) {
        imageSlide[i].classList.remove('active')    
    }
    imageSlide[flag].classList.add('active')


    let text = document.querySelector('.text').children;
    console.log(text);
    for(let i = 0; i < text.length;i++){
        if(imageSlide[0].classList.contains('active')){
            text[0].classList.add('show')
            text[1].classList.remove('show')
            text[2].classList.remove('show')
        }
        if(imageSlide[1].classList.contains('active')){
            text[1].classList.add('show')
            text[0].classList.remove('show')
            text[2].classList.remove('show')
        }
        if(imageSlide[2].classList.contains('active')){
            text[2].classList.add('show')
            text[1].classList.remove('show')
            text[0].classList.remove('show')
            text[1].classList.add('text-hidden')
            text[0].classList.add('text-hidden')
        }
    }
}    

// *************************************** Mobile menu ******************************************** \\

const mobileMenu = document.querySelector('.header__mobile-menu');
const mobileLinks = document.querySelector('.mobile-links');
const logo = document.querySelector('.logo');
const opacity = document.querySelector('#opacity')
const btn = document.querySelector('.hero__btn')
const noScroll = document.querySelector('body');

mobileMenu.addEventListener('click', ()=>{
    if(mobileMenu.classList.contains('change')){
        mobileMenu.classList.add('removeChange')
        mobileMenu.classList.remove('change')
        mobileLinks.classList.add('close')
        mobileLinks.classList.remove('open')
        logo.classList.remove('none')
        opacity.classList.remove('opacity')
        noScroll.classList.remove('no-scroll')
        btn.classList.remove('event')
    }
    else{
        mobileMenu.classList.add('change')
        mobileMenu.classList.remove('removeChange')
        mobileLinks.classList.add('open')
        mobileLinks.classList.remove('close')
        logo.classList.add('none')
        opacity.classList.add('opacity')
        noScroll.classList.add('no-scroll')
        btn.classList.add('event')
    }
})


// ******************************* Intro **************************************************** \\

let intro = document.querySelector('.intro')
let name = document.querySelector('.intro-name');
let nameSpan = document.querySelectorAll('.name')
window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        nameSpan.forEach((span,index)=>{
            setTimeout(()=>{
                span.classList.add('active')
            },(index + 1)*500)
        })

        setTimeout(()=>{
            nameSpan.forEach((span,index)=>{
                setTimeout(()=>{
                    span.classList.remove('active')
                    span.classList.add('fade')
                },(index + 1)*50)
            })
        },2500)

        setTimeout(()=>{
            intro.style.top = "-100vh"
        },3300)
    })
})