document.getElementById('year').textContent = new Date().getFullYear();

const header = document.getElementById('header');
const burger = document.getElementById('burger');
burger.addEventListener('click', () => header.classList.toggle('open'));

document.querySelectorAll('.nav a, .nav-cta').forEach(link => {
  link.addEventListener('click', () => header.classList.remove('open'));
});

const form = document.getElementById('contact-form');
const note = document.getElementById('form-note');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  note.textContent = 'Merci ! Votre demande a bien été envoyée, nous vous répondons sous 24h.';
  form.reset();
});
