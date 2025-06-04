const mensagemEl = document.getElementById('mensagem');
const botaoPedido = document.getElementById('botaoPedido');
const botoesResposta = document.getElementById('botoesResposta');
const btnSim = document.getElementById('btnSim');
const btnNao = document.getElementById('btnNao');

const mensagemTexto = "Eu gosto muito de você e queria saber se aceita namorar comigo? 💖";

// Função para digitar mensagem animada
function digitarMensagem(texto, elemento, callback) {
  elemento.style.opacity = '1';
  let i = 0;
  elemento.textContent = '';
  const interval = setInterval(() => {
    elemento.textContent += texto.charAt(i);
    i++;
    if (i > texto.length - 1) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, 100);
}

botaoPedido.addEventListener('click', () => {
  botaoPedido.disabled = true;
  digitarMensagem(mensagemTexto, mensagemEl, () => {
    botaoPedido.textContent = '💞 Obrigado por me ouvir!';
    botoesResposta.classList.add('show');
  });
});

btnSim.addEventListener('click', () => {
  mensagemEl.textContent = "💖 Yay! Eu sabia que você ia dizer sim! Vamos ser muito felizes juntos!";
  btnSim.disabled = true;
  btnNao.disabled = true;
  btnSim.style.backgroundColor = '#4caf50'; // verde
  btnNao.style.backgroundColor = '#ccc'; // cinza
});

btnNao.addEventListener('click', () => {
  mensagemEl.textContent = "😢 Tudo bem, vou continuar sendo seu amigo e admirando você de longe.";
  btnSim.disabled = true;
  btnNao.disabled = true;
  btnNao.style.backgroundColor = '#f44336'; // vermelho
  btnSim.style.backgroundColor = '#ccc'; // cinza
});
