let indice = 0;

function mostrarFerramenta() {
  const itens = document.querySelectorAll('.item-carrossel');

  // Esconde todos os blocos
  itens.forEach(item => item.classList.remove('ativo'));

  // Mostra só o atual
  itens[indice].classList.add('ativo');
}

function avancar() {
  const itens = document.querySelectorAll('.item-carrossel');
  indice = (indice + 1) % itens.length;
  mostrarFerramenta();
}

function voltar() {
  const itens = document.querySelectorAll('.item-carrossel');
  indice = (indice - 1 + itens.length) % itens.length;
  mostrarFerramenta();
}

// Mostrar o primeiro ao abrir a página
document.addEventListener("DOMContentLoaded", mostrarFerramenta);
