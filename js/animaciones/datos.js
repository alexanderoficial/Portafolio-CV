
document.addEventListener("DOMContentLoaded", function() {
  const spans = document.querySelectorAll('.datos-perfil span');
  let index = 0;

  function mostrarSiguiente() {
    spans.forEach(span => {
      span.style.opacity = '0'; 
    });

    spans[index].style.opacity = '1';
    index = (index + 1) % spans.length; 
  }

 
  setInterval(mostrarSiguiente, 4000);
});
