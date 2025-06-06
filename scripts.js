/* scripts.js */

// ---- EFEITO 1: BOTÃO VOLTAR AO TOPO ----

const mybutton = document.getElementById("btnVoltarAoTopo");

// mostra ou esconde o botão baseado na posição da rolagem
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

// rola a página para o topo quando o botão é clicado
mybutton.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// ---- EFEITO 2: ANIMAÇÃO DE DIGITAÇÃO ----

document.addEventListener("DOMContentLoaded", function () {
  const titleElement = document.getElementById("typing-title");
  const textToType = "Pedro Henrique Souza Neves";

  if (titleElement) {
    typeWriter(titleElement, textToType, 0);
  }
});

// função recursiva para o efeito de digitação
function typeWriter(element, text, i) {
  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    setTimeout(function () {
      typeWriter(element, text, i + 1);
    }, 150); // velocidade da digitação em milissegundos
  }
}

// ---- EFEITO 3: INCLINAÇÃO 3D NOS CARDS ----

const portfolioCards = document.querySelectorAll("#meu-portfolio article");

portfolioCards.forEach(card => {
  // aplica o efeito de inclinação quando o mouse se move sobre o card
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  // reseta a inclinação quando o mouse sai do card
  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  });
});