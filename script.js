// script.js
document.addEventListener('DOMContentLoaded', function () {
    const registerLink = document.getElementById('registerLink');

    if (registerLink) {
        registerLink.addEventListener('click', function (event) {
            event.preventDefault();
            const currentContent = document.querySelector('.wrapper');
            currentContent.style.transition = 'transform 1s ease-in-out'; // Aumenta el tiempo a 1 segundo
            currentContent.style.transform = 'translateX(100%)';

            setTimeout(() => {
                window.location.href = 'page2.html';
            }, 1000); // Ajusta el tiempo de espera también
        });
    }
});
