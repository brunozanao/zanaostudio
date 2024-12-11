// Custom Cursor
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    });

    // Add hover effect to clickable elements
    const clickables = document.querySelectorAll('a, button, .step');
    clickables.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            cursorFollower.classList.add('active');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            cursorFollower.classList.remove('active');
        });
    });
});

// Logo slider
document.addEventListener('DOMContentLoaded', function() {
    const logoSliders = document.querySelectorAll('.logo-slide');
    
    logoSliders.forEach(slider => {
        // Clone logos for infinite loop
        const logos = slider.innerHTML;
        slider.innerHTML = logos + logos;
        
        // Pause animation on hover
        slider.addEventListener('mouseenter', () => {
            slider.style.animationPlayState = 'paused';
        });
        
        slider.addEventListener('mouseleave', () => {
            slider.style.animationPlayState = 'running';
        });
    });
});

// Loader Animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.style.display = 'none';
});

// Scroll Reveal Animations
ScrollReveal().reveal('.hero-content', {
    delay: 200,
    distance: '50px',
    origin: 'bottom'
});

ScrollReveal().reveal('.process-group', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    interval: 300
});

ScrollReveal().reveal('.service-card', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    interval: 200
});

ScrollReveal().reveal('.contact-content', {
    delay: 200,
    distance: '50px',
    origin: 'bottom'
});
