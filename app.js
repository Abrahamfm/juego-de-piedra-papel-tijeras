function obtenerEleccionComputadora() {
    const opciones = ["piedra", "papel", "tijeras"];
    const indice = Math.floor(Math.random() * 3);
    return opciones[indice];
}

function determinarGanador(jugador, computadora) {
    if (jugador === computadora) {
        return "¡Es un empate!";
    } else if (
        (jugador === "piedra" && computadora === "tijeras") ||
        (jugador === "papel" && computadora === "piedra") ||
        (jugador === "tijeras" && computadora === "papel")
    ) {
        return "¡Ganaste!";
    } else {
        return "¡Perdiste! La computadora gana.";
    }
}

function jugar() {
    let jugador = prompt("Elige: piedra, papel o tijeras").toLowerCase();
    
    if (!["piedra", "papel", "tijeras"].includes(jugador)) {
        console.log("Elección inválida. Por favor, elige piedra, papel o tijeras.");
        return;
    }

    let computadora = obtenerEleccionComputadora();
    
    console.log(`Tú elegiste: ${jugador}`);
    console.log(`La computadora eligió: ${computadora}`);
    console.log(determinarGanador(jugador, computadora));
}

jugar();

