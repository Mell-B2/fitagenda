const form = document.getElementById('appointment-form');
const confirmationMsg = document.getElementById('confirmation-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Exibe a mensagem de sucesso
  confirmationMsg.style.display = 'block';

  // Reseta o formulário
  form.reset();

  // Oculta a mensagem após 5 segundos
  setTimeout(() => {
    confirmationMsg.style.display = 'none';
  }, 5000);
});