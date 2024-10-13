document.addEventListener("DOMContentLoaded", function () {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            
            const mainMenuLinks = document.querySelectorAll('.header__menu .menu__link');
            const burger = document.getElementById('burger');
            const nav = document.getElementById('nav');
            
            burger.addEventListener('click', () => {
                burger.classList.toggle('toggle');
                nav.classList.toggle('show');
            });
            
            
            const navLinks = document.querySelectorAll('#nav a');
            
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    burger.classList.remove('toggle'); 
                    nav.classList.remove('show'); 
                });
            });

            function setActiveLink() {
                const currentUrl = window.location.href;
                
                mainMenuLinks.forEach(link => {
                    if (link.href === currentUrl) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }

            setActiveLink(); 
        });
});
