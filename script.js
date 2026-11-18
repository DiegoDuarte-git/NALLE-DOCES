(function () {
  "use strict";

  // Caminho do vídeo: altere apenas esta linha para trocar o arquivo.
  const VIDEO_SRC = "videos/apresentacao.mp4";

  const player = document.getElementById("player");
  const mensagemErro = document.getElementById("erro");

  // Exibe uma mensagem simples e oculta o player se o vídeo falhar.
  function mostrarErro() {
    player.hidden = true;
    mensagemErro.hidden = false;
  }

  // Se o arquivo não existir ou não puder ser decodificado, o evento "error" é disparado.
  player.addEventListener("error", mostrarErro);

  // Define a fonte do vídeo.
  player.src = VIDEO_SRC;
})();
