function toggleMode() {
  // substituição do background
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const image = document.querySelector("#profile img") // pesquisa pelo seletor css

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    image.setAttribute("src", "./assets/avatar-light.png") // adicionar/modificar algum atributo
  } else {
    // se tiver sem light mode, adicionar a imagem normal
    image.setAttribute("src", "./assets/avatar.png")
  }

  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  */
}
