// Toggle Mobile Navigation
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

function toggleMobileNav() {
  if (mobileNav.style.display === 'block') {
    mobileNav.style.display = 'none';
  } else {
    mobileNav.style.display = 'block';
  }
}

hamburger.addEventListener('click', toggleMobileNav);

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }

  fadeInOnScroll();
});

// Smooth scroll to top
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Fade-in on scroll
const fadeElems = document.querySelectorAll('.fade');

function fadeInOnScroll() {
  fadeElems.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
}

// Call once on page load
fadeInOnScroll();
