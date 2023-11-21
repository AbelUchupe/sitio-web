// var video = document.getElementById("myVideo");
const tableBody = document.querySelector(".table_body");

    // Agregar un evento para reiniciar la reproducción cuando el video llega al final
    // video.addEventListener("ended", function() {
    //   video.currentTime = 0; // Reiniciar al principio
    //   video.play(); // Volver a reproducir
    // });

let i = 1;



while (i<=20) {
    let rowTable = document.createElement("tr");
    rowTable.innerHTML = '<td><input class="input" type="text"></td><td><input class="input" type="text"></td><td><input class="input" type="text"></td><td><input class="input" type="text"></td><td><input class="input" type="text"></td><td><input class="input" type="text"></td><td><input class="input" type="text"></td><td><input class="input" type="text"></td>';
    tableBody.appendChild(rowTable);
    i=i+1;
}