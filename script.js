const botao = document.querySelector(".bot");
let clicado = document.querySelector(".clicado");

botao.addEventListener("click", e =>{
    clicado.innerHTML = "Olá! Você acaba de clicar no botão!"
});