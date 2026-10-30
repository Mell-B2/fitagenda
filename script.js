document.addEventListener('DOMContentLoaded', () => {
  // Lógica do Formulário de Agendamento
  const form = document.getElementById('appointment-form');
  const confirmationMsg = document.getElementById('confirmation-message');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Exibe a mensagem de confirmação em estilo neon nilo
      confirmationMsg.style.display = 'block';

      // Limpa os campos do formulário
      form.reset();

      // Oculta a mensagem após 5 segundos
      setTimeout(() => {
        confirmationMsg.style.display = 'none';
      }, 5000);
    });
  }

  // Suporte a rolagem suave para todos os botões de link interno (#)
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});