document.addEventListener('DOMContentLoaded', () => {

    // --- Scroll-Reveal Animation Script ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.scroll-reveal').forEach(section => {
        observer.observe(section);
    });

    // --- Scroll-to-Top Button Script ---
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    window.onscroll = () => {
        if (scrollTopBtn && (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)) {
            scrollTopBtn.style.display = 'block';
        } else if (scrollTopBtn) {
            scrollTopBtn.style.display = 'none';
        }
    };
});

// Function for the scroll-to-top button
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
