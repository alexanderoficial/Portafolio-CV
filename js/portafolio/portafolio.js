document.addEventListener('DOMContentLoaded', () => {
const btnUno = document.getElementById('box-uno');
const btnDos = document.getElementById('box-dos');
const btnTres = document.getElementById('box-tres');
const btnCuatro = document.getElementById('box-cuatro');

// todas las secciones por clase
const boxUno = document.querySelector('.box-uno');
const boxDos = document.querySelector('.box-dos');
const boxTres = document.querySelector('.box-tres');
const boxCuatro = document.querySelector('.box-cuatro');


function mostrarSolo(seccion) {
    [boxUno, boxDos, boxTres, boxCuatro].forEach(section => section.style.display = 'none');
    
    seccion.style.display = 'flex';
}


btnUno.addEventListener('click', () => mostrarSolo(boxUno));
btnDos.addEventListener('click', () => mostrarSolo(boxDos));
btnTres.addEventListener('click', () => mostrarSolo(boxTres));
btnCuatro.addEventListener('click', () => mostrarSolo(boxCuatro));



mostrarSolo(boxUno); 

});
