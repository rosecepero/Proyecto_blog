const destacados = [{
        tema: "Web",
        titulo: "¿Qué ocurre cuando abres una página web?",
        resumen: "Sigue el viaje de una petición desde tu navegador hasta el servidor.",
        enlace: "./entradas/primera-pagina-web/index.html",
        imagen: "./imagenes/web.jpg",
        alt: "Ilustración sobre cómo funciona la web"
    },
    {
        tema: "Seguridad",
        titulo: "Cómo reconocer un correo de phishing",
        resumen: "Aprende qué detalles revisar antes de confiar en un correo sospechoso.",
        enlace: "./entradas/reconocer-phishing/index.html",
        imagen: "./imagenes/phishing.jpg",
        alt: "Ilustración sobre correos sospechosos"
    },
    {
        tema: "Virtualización",
        titulo: "Qué es una máquina virtual",
        resumen: "Descubre cómo puedes ejecutar Ubuntu dentro de Windows con VirtualBox.",
        enlace: "./entradas/maquinas-virtuales/index_virtualizacion.html",
        imagen: "./imagenes/virtualizacion.jpg",
        alt: "Ilustración sobre máquinas virtuales"
    }
];

let posicion = 0;

const tema = document.querySelector("#destacado-tema");
const titulo = document.querySelector("#destacado-titulo");
const resumen = document.querySelector("#destacado-resumen");
const enlace = document.querySelector("#destacado-enlace");
const imagen = document.querySelector("#destacado-imagen");
const indicador = document.querySelector("#carrusel-posicion");
const controles = document.querySelector("#carrusel-controles");

function mostrarDestacado() {
    const entrada = destacados[posicion];

    tema.textContent = entrada.tema;
    titulo.textContent = entrada.titulo;
    resumen.textContent = entrada.resumen;
    enlace.href = entrada.enlace;
    imagen.src = entrada.imagen;
    imagen.alt = entrada.alt;
    indicador.textContent = `${posicion + 1} de ${destacados.length} · ${entrada.tema}`;
}

document.querySelector("#siguiente").addEventListener("click", () => {
    posicion = (posicion + 1) % destacados.length;
    mostrarDestacado();
});

document.querySelector("#anterior").addEventListener("click", () => {
    posicion = (posicion - 1 + destacados.length) % destacados.length;
    mostrarDestacado();
});

mostrarDestacado();
controles.hidden = false;