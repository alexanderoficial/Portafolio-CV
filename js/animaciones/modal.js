document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("termsModal");
    var acceptBtn = document.getElementById("acceptBtn");

    modal.style.display = "flex";

    acceptBtn.onclick = function() {
        modal.style.display = "none";
    }
});

