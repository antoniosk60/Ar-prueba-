// Interacciones básicas y AOS
document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  }

  AOS.init({ duration: 700, once: true });

  // Form feedback sin backend adicional (Formspree)
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      msg.textContent = 'Enviando...';
      try {
        const data = new FormData(form);
        const res = await fetch(form.action, {
          method: form.method,
          headers: { 'Accept': 'application/json' },
          body: data
        });
        if (res.ok) {
          msg.textContent = '¡Gracias! Te contactaremos pronto.';
          form.reset();
        } else {
          msg.textContent = 'Hubo un problema al enviar. Intenta de nuevo.';
        }
      } catch (err) {
        msg.textContent = 'Error de red. Verifica tu conexión.';
      }
    });
  }
});
