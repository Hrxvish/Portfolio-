// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Navigation for mobile
const toggleNav = () => {
    const nav = document.querySelector('header nav ul');
    nav.classList.toggle('active');
}

document.querySelector('.logo').addEventListener('click', toggleNav);
