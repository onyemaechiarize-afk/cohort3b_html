document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. MOBILE NAVIGATION & HAMBURGER --- */
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownParent = document.querySelector('.dropdown');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    if (dropdownToggle && dropdownParent) {
        dropdownToggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 991) {
                e.preventDefault();
                dropdownParent.classList.toggle('active');
            }
        });
    }

    /* --- 2. HERO SLIDER LOGIC --- */
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    const dotsContainer = document.getElementById('sliderDots');

    if (slides.length > 0) {
        let currentSlide = 0;
        let autoSlideInterval;

        // Build navigation dots
        dotsContainer.innerHTML = '';
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot-indicator');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.dot-indicator');

        function updateSlider() {
            slides.forEach((slide, index) => {
                slide.classList.remove('active');
                if (dots[index]) dots[index].classList.remove('active');
            });

            slides[currentSlide].classList.add('active');
            if (dots[currentSlide]) dots[currentSlide].classList.add('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlider();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSlider();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateSlider();
            resetTimer();
        }

        function startTimer() {
            autoSlideInterval = setInterval(nextSlide, 5000);
        }

        function startTimer() {
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(nextSlide, 5000);
        }

        function resetTimer() {
            clearInterval(autoSlideInterval);
            startTimer();
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide(10);
                resetTimer();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetTimer();
            });
        }

        startTimer();
    }
});

/* ==========================================================================
   3. FOOTER INTERACTIONS
   ========================================================================== */
// Newsletter Subscription Handling
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const userEmail = emailInput.value.trim();

        if (userEmail !== '') {
            // Replace form with a success message
            newsletterForm.innerHTML = `
                <div class="newsletter-success">
                    <i class="bi bi-check-circle-fill"></i>
                    <span>Thank you for subscribing!</span>
                </div>
            `;
        }
    });
}

// Smooth Scrolling for Footer Quick Links
const footerLinks = document.querySelectorAll('.footer-links a[href^="#"]');

footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId !== '#') {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});