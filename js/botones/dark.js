document.addEventListener("DOMContentLoaded", function() {
    const dark = document.querySelector(".switch");
    dark.addEventListener("click", function() {
        dark.classList.toggle("active");
        document.body.classList.toggle("active");
        
        
    });
});


document.addEventListener("DOMContentLoaded", function() {
  const boton = document.getElementById("barra-but");
  const cerrarBoton = document.getElementById("cerrar-x");
  const header = document.getElementById("barra-navegacion");
 
  function handleResize(matches) {
    if (matches) {
      boton.addEventListener("click", function() {
        header.style.display = "block";
      });

      cerrarBoton.addEventListener("click", function() {
        header.style.display = "none";
      });

      document.addEventListener("click", function(event) {
        const isClickInsideHeader = header.contains(event.target);
        const isClickInsideBoton = boton.contains(event.target);
        
        if (!isClickInsideHeader && !isClickInsideBoton) {
          header.style.display = "none";
        }
      });
    } else {
      header.style.display = "block";
      boton.removeEventListener("click", function() {
        header.style.display = "block";
      });

      cerrarBoton.removeEventListener("click", function() {
        header.style.display = "none";
      });

      document.removeEventListener("click", function(event) {
        const isClickInsideHeader = header.contains(event.target);
        const isClickInsideBoton = boton.contains(event.target);
        
        if (!isClickInsideHeader && !isClickInsideBoton) {
          header.style.display = "none";
        }
      });
    }
  }

  const mediaQuery = window.matchMedia("(max-width: 1023px)");
  handleResize(mediaQuery.matches);
  mediaQuery.addListener(function(event) {
    handleResize(event.matches);
  });
});



function handlePerfilClick() {
  var perfilContainer = document.getElementById("container-perfil");
  perfilContainer.style.display = "block";
  perfilContainer.style.zIndex = "4";
}

function handleBarraNavegacionClick(event) {
  var perfilContainer = document.getElementById("container-perfil");
  if (event.target.id !== "perfil-x") {
    perfilContainer.style.display = "none";
    perfilContainer.style.zIndex = "0";
  }
}

function handleScreenSize(matches) {
  if (matches) {
    document.getElementById("perfil-x").addEventListener("click", handlePerfilClick);
    document.getElementById("barra-navegacion").addEventListener("click", handleBarraNavegacionClick);
  } else {
    document.getElementById("perfil-x").removeEventListener("click", handlePerfilClick);
    document.getElementById("barra-navegacion").removeEventListener("click", handleBarraNavegacionClick);
  }
}

const mediaQuery = window.matchMedia("(max-width: 1023px)");
handleScreenSize(mediaQuery.matches);
mediaQuery.addEventListener("change", function(event) {
  handleScreenSize(event.matches);
});
