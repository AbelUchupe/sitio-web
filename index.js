var video = document.getElementById("myVideo");

    // Agregar un evento para reiniciar la reproducción cuando el video llega al final
    video.addEventListener("ended", function() {
      video.currentTime = 0; // Reiniciar al principio
      video.play(); // Volver a reproducir
    });