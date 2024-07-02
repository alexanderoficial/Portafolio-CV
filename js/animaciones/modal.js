document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("termsModal");
    var acceptBtn = document.getElementById("acceptBtn");

    if (window.innerWidth > 1023) {
        modal.style.display = "flex";
    }

    acceptBtn.onclick = function() {
        modal.style.display = "none";
    }
});
