/*
const conteudoModel = document.querySelector('.conteudo-modal');
const model = document.querySelector('.modal');
const btn = document.getElementById("btn");
const video1 = document.getElementById("video");
const link1 = video1.src;
const botaofecha = document.querySelector(".fecha-modal");

btn.addEventListener('click', function () {
  conteudoModel.style = 'display: flex;';
  model.classList.add('aberto');
  video1.setAttribute("src", link1);
});

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('fecha-modal')) {
    conteudoModel.style = 'display: none;';
    model.classList.remove('aberto');
    video1.setAttribute("src", "");
  }
});*/

const botaoTrailer = document.querySelector(".botao-trailer");
const mode = document.querySelector(".modal");
const video = document.getElementById("video");
const link = video.src;
const botaoFechaModal = document.querySelector(".fecha-modal");

//parte de abrir o trailer e coloca de volta o link do video

function alteraModal() {
  mode.classList.toggle("aberto");
}
botaoTrailer.addEventListener('click', () => {
  video.setAttribute("src", link);
  alteraModal();
});
//parte de fecha o trailer e para o video

botaoFechaModal.addEventListener('click', () => {
  alteraModal();
  video.setAttribute("src", "");
});
