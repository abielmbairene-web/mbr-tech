const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const button = contactForm.querySelector('button[type="submit"]');
    if (button) {
      const originalText = button.textContent;
      button.textContent = 'Message envoyé';
      button.disabled = true;

      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        contactForm.reset();
      }, 2200);
    }
  });
}
