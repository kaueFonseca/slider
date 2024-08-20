const images = document.querySelectorAll('.slide');
const btnForward = document.getElementById('seta-avancar');
const btnReturn = document.getElementById('seta-voltar');

let currentImage = 0;


btnForward.addEventListener('click', ()=>{
  if(currentImage == images.length -1){
    return;
  }
  hideImage();
  currentImage++;
  showCurrentImage();
  hideButtons();
})

btnReturn.addEventListener('click', ()=>{
  if(currentImage == 0){
    return;
  }
  hideImage();
  currentImage--;
  showCurrentImage();
  hideButtons();
})

function hideImage(){
  const hideImages = document.querySelector('.mostrar')
  hideImages.classList.remove('mostrar')
}

function showCurrentImage(){
  images[currentImage].classList.add('mostrar')
}

function hideButtons(){
  const lastImage = images[images.length -1].classList.contains('mostrar');
  if(lastImage){
    btnForward.classList.add('opacidade')
  }else{
    btnForward.classList.remove('opacidade')
  }

  const firstImage = images[0].classList.contains('mostrar');
  if(firstImage){
    btnReturn.classList.add('opacidade')
  }else{
    btnReturn.classList.remove('opacidade')
  }
 
}































// const slides = document.querySelectorAll('.slide');
// const btnAvancar = document.getElementById('seta-avancar');
// const btnVoltar = document.getElementById('seta-voltar');

// let imagemAtual = 0;

// btnAvancar.addEventListener('click', ()=>{
//   if(imagemAtual == slides.length -1){
//     return;
//   }
//   esconderSlideAberto();
//   imagemAtual++;
//   mostrarSlideAtual();
//   mostrarOuEsconderSetas();
// })

// btnVoltar.addEventListener('click', ()=>{
//     if (imagemAtual === 0) {
//         return;
//       }
//     esconderSlideAberto();
//     imagemAtual--;
//     mostrarSlideAtual()
//     mostrarOuEsconderSetas()
// })


// function esconderSlideAberto(){
//   const slideAtual = document.querySelector('.mostrar');
//   slideAtual.classList.remove('mostrar');
// }
// function mostrarSlideAtual(){
//   slides[imagemAtual].classList.add('mostrar');
// }

// function mostrarOuEsconderSetas() {
//   const ultimoSlideVisivel = slides[slides.length - 1].classList.contains('mostrar');
//   if (ultimoSlideVisivel) {
//     btnAvancar.classList.add('opacidade');
//   } else {
//     btnAvancar.classList.remove('opacidade');
//   }

//   const primeiroSlideVisivel = slides[0].classList.contains('mostrar');
//   if (primeiroSlideVisivel) {
//     btnVoltar.classList.add('opacidade');
//   } else {
//     btnVoltar.classList.remove('opacidade');
//   }
  
// }

// const imagens = document.querySelectorAll(".slide");
// const setaAvancar = document.getElementById("seta-avancar");
// const setaVoltar = document.getElementById("seta-voltar");

// let imagemAtual = 0;

// setaAvancar.addEventListener("click", () => {
//   if (imagemAtual === imagens.length - 1) {
//     return;
//   }
//   esconderImagemAberta();
//   imagemAtual++;
//   mostrarImagemAtual()
//   mostrarOuEsconderSetas()
// });

// setaVoltar.addEventListener("click", () => {
//     if (imagemAtual === 0) {
//         return;
//       }
//     esconderImagemAberta();
//     imagemAtual--;
//     mostrarImagemAtual()
//     mostrarOuEsconderSetas()
// });


// function esconderImagemAberta() {
//   const imagemAberta = document.querySelector(".mostrar");
//   imagemAberta.classList.remove("mostrar");
// }

// function mostrarOuEsconderSetas(){
//     const naoEhAPrimeiraImagem = imagemAtual !== 0;
//     if(naoEhAPrimeiraImagem){
//         setaVoltar.classList.remove('opacidade')
//     }else{
//         setaVoltar.classList.add('opacidade')
//     }

//     const chegouNaUltimaImagem = imagemAtual === imagens.length -1;
//     if(chegouNaUltimaImagem){
//         setaAvancar.classList.add('opacidade')
//     }else{
//         setaAvancar.classList.remove('opacidade')

//     }
// }

// function mostrarImagemAtual(){
//     imagens[imagemAtual].classList.add("mostrar");
// }

