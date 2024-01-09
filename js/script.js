

/* Cuando hago CLICK en .button, .nav TOGGLE 'activo'*/
const btn = document.querySelector('.header__btn');
const nav = document.querySelector('.header__nav');

btn.addEventListener('click', ()=>{
    nav.classList.toggle('header__nav--activo');
});

/* Programando el slider */
const slider = document.querySelector('.sobreMi__carousel');
const sliderLi = document.querySelectorAll('.sobreMi__li');
const adelante = document.querySelector('.sobreMi__arrowAdelante');

let index = 1;
adelante.addEventListener('click', ()=>{
    let porcentaje = index*-33.3;
    slider.style.transform = "translateX("+ porcentaje + "%)"
    index++;

    if(index > (sliderLi.length - 1)){
        index = 0;
    }
});

const imgProyecto = document.querySelector('.proyectos__img');

imgProyecto.addEventListener('click', ()=>{
    window.open('https://angeladaza.github.io/TallerFinalPunto3.github.io/');
});