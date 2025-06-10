document.addEventListener('DOMContentLoaded', () => {

    // --- Hero Image Gallery Logic ---
    const images = document.querySelectorAll('.hero-image');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function showImage(index) {
        // Hide all images
        images.forEach(img => img.classList.remove('active'));
        // Show the correct image
        images[index].classList.add('active');
    }

    if (images.length > 0) {
        // Show the first image initially
        showImage(currentIndex);

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });
    }


    // --- Smooth Scroll-Reveal Animation ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
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
        if (scrollTopBtn && (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)) {
            scrollTopBtn.style.display = 'block';
        } else if (scrollTopBtn) {
            scrollTopBtn.style.display = 'none';
        }
    };
    
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
            event.preventDefault();
            const formData = new FormData(surveyForm);
            console.log('Survey Submitted:', Object.fromEntries(formData));

            if (surveyContainer && thankYouMessage) {
                surveyForm.style.display = 'none';
                thankYouMessage.style.display = 'block';
            }
        });
    }
});
