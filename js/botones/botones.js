document.addEventListener("DOMContentLoaded", function() {
    const sections = {
    inicio: document.querySelectorAll('.inicio-padre'),
    resumen: document.querySelectorAll('.resumen'),
    portafolio: document.querySelectorAll('.portafolio'),
    servicios: document.querySelectorAll('.servicios'),
    testimonios: document.querySelectorAll('.testimonios'),
    blog: document.querySelectorAll('.blog'),
    contacto: document.querySelectorAll('.contacto')
   
};

    const buttons = document.querySelectorAll('#barra-navegacion button');

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const id = button.getAttribute("id");
            hideAllSectionsExcept(id);
            showSection(id);
        });
    });

    function hideAllSectionsExcept(id) {
        for (const section in sections) {
            if (section !== id) {
                sections[section].forEach(element => {
                    element.style.display = 'none';
                });
            }
        }
    }

   function showSection(id) {
    if (sections[id]) {
        sections[id].forEach(element => {
            if (id === 'blog' || id === 'portafolio' || id === 'servicios') {
                element.style.display = 'flex';
            } else {
                element.style.display = 'block';
            }
        });
    } 
}

    // Agregamos un event listener adicional para el botón de inicio
    const inicioBtns = document.querySelectorAll('#inicio-padre');

    inicioBtns.forEach(button => {
        button.addEventListener("click", () => {
            showSection('inicio');
        });
    });
    
});
