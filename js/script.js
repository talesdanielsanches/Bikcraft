const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  //includes serve para procurar um determinado conteudo dentro de um elemento.
  if (url.includes(href)) {
    link.classList.add("ativo-header");
  }
}

links.forEach(ativarLink);
