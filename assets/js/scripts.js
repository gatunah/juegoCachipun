var eleccionN;
var stringMaquina;
var contador;
var puntajeUsuario = 0;
var puntajeMaquina = 0;
var ganador;
var respuesta,
  conteo = 0;

function ingresarPartidas() {
  contador = document.getElementById("partidas").value;
  imprPartidas.innerText = `Partidas ingresadas: ${contador}`;
  
}
function elegir(eleccion) {
  eleccionN = eleccion;
  imprEleccion.innerText = eleccion;
}
function iniciarJuego() {
  ingresarPartidas();
  var respuestaMaquina = randomOpcion();
  console.log(resultadoJuego(eleccionN, respuestaMaquina));
}
//ENTREGA OPCION ALEATORIA
function randomOpcion() {
  var arrayOpciones = ["piedra", "papel", "tijera"];
  stringMaquina = arrayOpciones[Math.floor(Math.random() * 3)];
  return stringMaquina;
}
function resultadoJuego(eleccionN, respuestaMaquina) {
  if (conteo >= contador) {
    if (puntajeMaquina > puntajeUsuario) {
      ganador = "¡Perdiste!😒";
    } else if (puntajeUsuario > puntajeMaquina) {
      ganador = "¡Eres el ganador, Felicitaciones!😁🎉";
    } else if (puntajeMaquina == puntajeUsuario && conteo != 0) {
      ganador = "¡Empataste con la máquina!😜";
    }
    divResultado.innerHTML = `<h2>El juego ha finalizado<h2> ${ganador} <br>
    <a class="btn btn-danger" href="index.html">Jugar otra vez</a`;
    
  } else {
    if (eleccionN == respuestaMaquina) {
      respuesta = "¡Empataste esta pártida!🤔";
      console.log(respuesta);
    } else if (
      (eleccionN == "piedra" && respuestaMaquina == "papel") ||
      (eleccionN == "papel" && respuestaMaquina == "tijera") ||
      (eleccionN == "tijera" && respuestaMaquina == "piedra")
    ) {
      respuesta = "¡Perdiste esta partida!😔👎";
      puntajeMaquina++;
    } else if (
      (eleccionN == "piedra" && respuestaMaquina == "tijera") ||
      (eleccionN == "papel" && respuestaMaquina == "piedra") ||
      (eleccionN == "tijera" && respuestaMaquina == "papel")
    ) {
      respuesta = "¡Ganaste esta partida!😁🎉";
      puntajeUsuario++;
    }
    //AGREGA 1 CADA VEZ QUE SE EJECUTA 1 PARTIDA
    conteo++;
    //SE IMPRIMEN VALORES 
    divUsuario.innerHTML = `<h2>Escogiste: <br> ${eleccionN}<h2>`;
    divVS.innerHTML = "<h2>VS</h2>";
    divMaquina.innerHTML = `<h2>Máquina escogió <br> ${stringMaquina}<h2>`;
    divResultado.innerHTML = `<h2>${respuesta}<h2>`;
    resultadoUsuario.innerHTML = `Resultado: <br> ${puntajeUsuario}`;
    resultadoMaquina.innerHTML = `Resultado: <br> ${puntajeMaquina}`;
    console.log(puntajeMaquina + " " + puntajeUsuario);

    return respuesta;
  }
}
