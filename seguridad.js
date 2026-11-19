const botonPistas = document.querySelector("#boton-pistas");
const pistasCorreo = document.querySelector("#pistas-correo");

pistasCorreo.hidden = true;
botonPistas.hidden = false;

botonPistas.addEventListener("click", () => {
    const mostrar = pistasCorreo.hidden;

    pistasCorreo.hidden = !mostrar;
    botonPistas.setAttribute("aria-expanded", String(mostrar));
    botonPistas.textContent = mostrar ?
        "Ocultar pistas" :
        "Ver pistas";
});