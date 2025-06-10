document.addEventListener('DOMContentLoaded', () => {

    // --- Smooth Scroll-Reveal Animation ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing after it's visible so it doesn't re-animate
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 
    });

    document.querySelectorAll('.scroll-reveal').forEach(section => {
        observer.observe(section);
    });

    // --- Scroll-to-Top Button Logic ---
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    window.onscroll = () => {
        if (scrollTopBtn) {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                scrollTopBtn.style.display = 'block';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        }
    };
    
    // The function is now inside the event listener for better scope management
    if(scrollTopBtn) {
        scrollTopBtn.onclick = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }


    // --- Survey Form Submission Logic ---
    const surveyForm = document.getElementById('energy-survey-form');
    const surveyContainer = document.getElementById('survey-container');
    const thankYouMessage = document.getElementById('survey-thank-you');

    if (surveyForm) {
        surveyForm.addEventListener('submit', (event) => {
            // 1. Prevent the default browser action of reloading the page
            event.preventDefault();

            // In a real application, you would send this data to a server.
            // For this portfolio, we'll just show a thank you message.
            const formData = new FormData(surveyForm);
            const selectedSource = formData.get('energy_source');
            const comments = formData.get('comments');
            console.log('Survey Submitted!');
            console.log('Selected Source:', selectedSource);
            console.log('Comments:', comments);

            // 2. Hide the form and show the thank you message
            if (surveyContainer && thankYouMessage) {
                surveyForm.style.display = 'none';
                thankYouMessage.style.display = 'block';
            }
        });
    }
});
