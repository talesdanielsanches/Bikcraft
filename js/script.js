/*Ativar links do menu*/
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  //includes serve para confirmar se existe parte de um um conteudo dentro de um outro determinado conteudo.
  if (url.includes(href)) {
    link.classList.add("ativo-header");
  }
}

links.forEach(ativarLink);

//--------------------------------------------------------

/*Ativar itens do orçamento*/
//URLSearchParams é uma classe que pega automaticamente os parâmetros enviados pela URL e transforma em string e entrega elas dentro de um array. Para pegá-las, basta usar o forEach assim como fizemos nos links, e na função chamar o parametro
const parametros = new URLSearchParams(location.search);

//Dentro da função estamos pegando o elemento do HTML que tem o valor do ID igual ao valor que veio na URL como parâmetro, depois deixamos ele "checkado" e o resultado acontece.
function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

//--------------------------------------------------------

/*Perguntas frequentes*/

const selecionaPergunta = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("perg-ativa");
  const ativa = resposta.classList.contains("perg-ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventoPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

selecionaPergunta.forEach(eventoPerguntas);
