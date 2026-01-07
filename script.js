const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);
    });

    const buttons = document.querySelectorAll('.btn, .project-link, .cta a');
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', () => {
            btn.style.transform = "scale(0.95)";
        });
        btn.addEventListener('mouseup', () => {
            btn.style.transform = "scale(1)";
        });
    });

    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Terima kasih, Leanarita! Pesan simulasi berhasil dikirim.');
            contactForm.reset();
        });
    }
});