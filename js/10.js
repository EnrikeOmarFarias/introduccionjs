// Metodos de propiedad

var reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciento cancion con el id: ${id}`);
  },

  pausar: function () {
    console.log("Pausando...");
  },

  borrarCancion: function (id) {
    console.log(`Eliminando la cancion con el id: ${id}`);
  },
};

reproductor.crearPlayList = function (nombre) {
  console.log(`Creando la playlist : ${nombre}`);
};

reproductor.reproduciendoPlayList = function (nombre) {
  console.log(`Reproduciendo la playlist : ${nombre}`);
};

reproductor.reproducir(3710);
reproductor.pausar();
reproductor.borrarCancion(30);
reproductor.crearPlayList("cachengue");
reproductor.reproduciendoPlayList("cachengue");
