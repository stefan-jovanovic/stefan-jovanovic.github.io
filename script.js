document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    navToggle.addEventListener('click', () => {
        const isVisible = navList.classList.contains('nav-list--visible');
        navToggle.setAttribute('aria-expanded', !isVisible);
        navList.classList.toggle('nav-list--visible');
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
