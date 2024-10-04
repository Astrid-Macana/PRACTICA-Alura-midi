function sonido(idElemento) {
    document.querySelector(idElemento).play();
    
}
const listDeTeclas = document.querySelectorAll('.tecla')

for (let contador = 0; contador < listDeTeclas.length; contador++) {
  const tecla = listDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#sonido_${instrumento}`;
  tecla.onclick = function () {
    sonido(idAudio);
  };

   
   tecla.onkeydown = function (evento) {
    if (evento.code === 'Space' || evento.code === 'Enter') {
      tecla.classList.add("activa");
    }
    
    
   };
   tecla.onkeyup = function () {
     tecla.classList.remove("activa");
   };
}