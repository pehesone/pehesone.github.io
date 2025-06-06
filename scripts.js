// Pega o botão:
let mybutton = document.getElementById("btnVoltarAoTopo");

// Quando o usuário rolar 20px para baixo a partir do topo do documento, mostre o botão
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // O "||" significa "OU"
  // document.body.scrollTop > 20 -> para Safari
  // document.documentElement.scrollTop > 20 -> para Chrome, Firefox, IE e Opera
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block"; // Muda o estilo do botão para "block", que o torna visível
  } else {
    mybutton.style.display = "none"; // Esconde o botão novamente se o usuário voltar para o topo
  }
}

// Quando o usuário clicar no botão, role para o topo do documento
mybutton.onclick = function() {topFunction()};

function topFunction() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}



/* EFEITO DE DIGITAÇÃO */



// Roda a função quando o conteúdo da página é carregado
document.addEventListener("DOMContentLoaded", function() {
  const titleElement = document.getElementById("typing-title");
  // O texto que você quer que seja digitado. Altere para o seu nome!
  const textToType = "Pedro Henrique Souza Neves";

  // Verifica se o elemento com o id 'typing-title' realmente existe na página atual
  if (titleElement) {
    typeWriter(titleElement, textToType, 0);
  }
});

// Função que faz a mágica da digitação
function typeWriter(element, text, i) {
  if (i < text.length) {
    // Adiciona a próxima letra ao elemento
    element.innerHTML += text.charAt(i);
    // Chama a si mesma novamente após um pequeno atraso para digitar a próxima letra
    setTimeout(function() {
      typeWriter(element, text, i + 1);
    }, 150); // O número 150 é a velocidade da digitação em milissegundos. Aumente para mais devagar, diminua para mais rápido.
  }
}



/* EFEITO DE INCLINAÇÃO 3D NOS CARDS DO PORTFÓLIO */

// Seleciona todos os artigos (cards de projeto) dentro da seção de portfólio
const portfolioCards = document.querySelectorAll("#meu-portfolio article");

// Para cada card, adiciona os eventos de mouse
portfolioCards.forEach(card => {
  // Evento para quando o mouse se move sobre o card
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect(); // Pega o tamanho e posição do card na tela
    const x = e.clientX - rect.left; // Posição X do mouse dentro do card
    const y = e.clientY - rect.top; // Posição Y do mouse dentro do card

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Calcula a rotação no eixo X (até -10 ou 10 graus)
    const rotateY = ((x - centerX) / centerX) * 10; // Calcula a rotação no eixo Y (até -10 ou 10 graus)

    // ESTA É A LINHA CORRIGIDA:
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  // Evento para quando o mouse sai do card
  card.addEventListener("mouseleave", () => {
    // Reseta a transformação, fazendo o card voltar suavemente à posição original
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  });
});