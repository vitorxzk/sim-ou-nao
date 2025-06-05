// script.js
// Interação para o botão do pedido de namoro

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('ask-btn');
  const response = document.getElementById('response');

  btn.addEventListener('click', () => {
    // Esconde o botão com transição suave
    btn.style.transition = 'opacity 0.7s ease';
    btn.style.opacity = '0';

    // Após o botão desaparecer, esconde ele do layout e mostra a resposta
    setTimeout(() => {
      btn.style.display = 'none';
      response.classList.remove('hidden');
      // força repaint para garantir transição
      void response.offsetWidth;
      // mostra com fade-in
      response.classList.add('visible');
    }, 700);
  });
});

