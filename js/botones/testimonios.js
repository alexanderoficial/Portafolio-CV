document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const users = document.querySelectorAll('.user');
    const totalUsers = users.length;

    function showUser(index) {
        users.forEach((user, i) => {
            if (i === index) {
                user.style.display = "block";
            } else {
                user.style.display = "none";
            }
        });
    }

    function nextUser() {
        currentIndex = (currentIndex + 1) % totalUsers;
        showUser(currentIndex);
    }

    function prevUser() {
        currentIndex = (currentIndex - 1 + totalUsers) % totalUsers;
        showUser(currentIndex);
    }

    document.getElementById('siguiente').addEventListener('click', nextUser);
    document.getElementById('regresar').addEventListener('click', prevUser);

    setInterval(nextUser, 8000);
});
