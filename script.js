function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    const image = document.querySelector("#profile img")

    if(html.classList.contains("light")) {
        image.setAttribute("src", "./assets/image4.jpg")
        image.setAttribute("alt", "Erro ao carregar imagem 1")
    }else{
        image.setAttribute("src", "./assets/image1.jpg")
        image.setAttribute("alt", "Erro ao carregar imagem 2")
    }
}