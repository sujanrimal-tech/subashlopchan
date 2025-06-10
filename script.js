document.addEventListener('DOMContentLoaded', () => {

    // --- Scroll-Reveal Animation Script ---
    // Sets up an observer to watch for when elements with the 'scroll-reveal' class enter the viewport.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is intersecting (visible), add the 'visible' class to trigger the animation.
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger the animation when 10% of the element is visible.
    });

    // Find all elements with the 'scroll-reveal' class and have the observer watch them.
    document.querySelectorAll('.scroll-reveal').forEach(section => {
        observer.observe(section);
    });

    // --- Scroll-to-Top Button Script ---
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    // Listen for scroll events on the window.
    window.onscroll = () => {
        // If the user has scrolled down more than 300 pixels, show the button. Otherwise, hide it.
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    };
});

// This function is called by the 'onclick' attribute on the scroll-to-top button in the HTML.
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // This makes the scroll action smooth and animated.
    });
};
