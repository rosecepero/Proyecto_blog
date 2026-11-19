const destacados = [{
        tema: "Web · Nuevo en el blog",
        titulo: "Del navegador al servidor",
        resumen: "Descubre qué ocurre cuando abres una página y qué función cumplen HTML y CSS.",
        enlace: "./entradas/primera-pagina-web/index.html",
        imagen: "./imagenes/web.jpg",
        alt: "Tecnología relacionada con la navegación web"
    },
    {
        tema: "Seguridad · Lectura destacada",
        titulo: "Antes de pulsar, revisa",
        resumen: "Un mensaje urgente merece una segunda mirada. Aprende a reconocer las señales del phishing.",
        enlace: "./entradas/reconocer-phishing/index.html",
        imagen: "./imagenes/phishing.jpg",
        alt: "Imagen sobre phishing"
    },
    {
        tema: "Virtualización · Para experimentar",
        titulo: "Ubuntu dentro de Windows",
        resumen: "Conoce cómo funciona una máquina virtual antes de preparar tu propia práctica.",
        enlace: "./entradas/maquinas-virtuales/index_virtualizacion.html",
        imagen: "./imagenes/virtualizacion.jpg",
        alt: "Imagen que acompaña la entrada sobre virtualización"
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
const paginaWeb = "./entradas/primera-pagina-web/index.html";
const paginaSeguridad = "./entradas/reconocer-phishing/index.html";
const paginaVirtualizacion =
    "./entradas/maquinas-virtuales/index_virtualizacion.html";
const paginaAcerca = "./acerca/index_acerca.html";

const secciones = {
    inicio: {
        titulo: "Bienvenida",
        descripcion: "Un espacio para entender, practicar y aprender a protegerte.",
        temas: [{
                titulo: "Entiende cómo funciona",
                resumen: "Descubre qué ocurre cuando visitas una página web.",
                imagen: "./imagenes/web.jpg",
                enlace: paginaWeb
            },
            {
                titulo: "Ponlo a prueba",
                resumen: "Experimenta con otro sistema operativo en una máquina virtual.",
                imagen: "./imagenes/virtualizacion.jpg",
                enlace: paginaVirtualizacion
            },
            {
                titulo: "Aprende a protegerte",
                resumen: "Revisa las señales de un correo sospechoso.",
                imagen: "./imagenes/phishing.jpg",
                enlace: paginaSeguridad
            }
        ]
    },

    web: {
        titulo: "Temas de Web",
        descripcion: "Del navegador al servidor, paso a paso.",
        temas: [{
                titulo: "Qué pide el navegador",
                resumen: "El viaje que comienza al abrir una página.",
                imagen: "./imagenes/web.jpg",
                enlace: paginaWeb
            },
            {
                titulo: "La respuesta del servidor",
                resumen: "Qué devuelve el servidor a una petición.",
                imagen: "./imagenes/web.jpg",
                enlace: paginaWeb
            },
            {
                titulo: "HTML y CSS",
                resumen: "Cómo se organizan el contenido y su presentación.",
                imagen: "./imagenes/web.jpg",
                enlace: paginaWeb
            }
        ]
    },

    seguridad: {
        titulo: "Temas de Seguridad",
        descripcion: "Observa los detalles antes de confiar en un mensaje.",
        temas: [{
                titulo: "Reconoce el phishing",
                resumen: "Identifica cómo intentan ganarse tu confianza.",
                imagen: "./imagenes/phishing.jpg",
                enlace: paginaSeguridad + "#reconoce-phishing"
            },
            {
                titulo: "Revisa un enlace",
                resumen: "Comprueba a dónde te invita a ir un mensaje.",
                imagen: "./imagenes/phishing.jpg",
                enlace: paginaSeguridad + "#revisa-enlace"
            },
            {
                titulo: "Analiza un correo ficticio",
                resumen: "Practica buscando sus señales de alerta.",
                imagen: "./imagenes/phishing.jpg",
                enlace: paginaSeguridad + "#analiza-correo"
            }
        ]
    },

    virtualizacion: {
        titulo: "Temas de Virtualización",
        descripcion: "Explora otros sistemas desde tu propio ordenador.",
        temas: [{
                titulo: "Qué es una máquina virtual",
                resumen: "Cómo se utilizan los recursos del equipo físico.",
                imagen: "./imagenes/virtualizacion.jpg",
                enlace: paginaVirtualizacion
            },
            {
                titulo: "El papel del hipervisor",
                resumen: "La herramienta que permite ejecutar la máquina virtual.",
                imagen: "./imagenes/virtualizacion.jpg",
                enlace: paginaVirtualizacion
            },
            {
                titulo: "Windows y Ubuntu",
                resumen: "Un ejemplo de anfitrión y sistema invitado.",
                imagen: "./imagenes/virtualizacion.jpg",
                enlace: paginaVirtualizacion
            }
        ]
    },

    acerca: {
        titulo: "Acerca de mí",
        descripcion: "Quién está detrás de Mi rincón tecnológico.",
        temas: [{
                titulo: "Quién soy",
                resumen: "Mi interés por la informática.",
                imagen: "./imagenes/web.jpg",
                enlace: paginaAcerca
            },
            {
                titulo: "Qué estoy aprendiendo",
                resumen: "Redes, seguridad y sistemas.",
                imagen: "./imagenes/virtualizacion.jpg",
                enlace: paginaAcerca
            },
            {
                titulo: "Por qué este blog",
                resumen: "Compartir lo que aprendo con ejemplos sencillos.",
                imagen: "./imagenes/phishing.jpg",
                enlace: paginaAcerca
            }
        ]
    }
};

const explorador = document.querySelector("#explorador");
const tituloSeccion = document.querySelector("#titulo-entradas");
const descripcionSeccion = document.querySelector("#descripcion-seccion");
const listaTemas = document.querySelector("#lista-temas");
const enlacesMenu = document.querySelectorAll(".menu-lateral a");

function mostrarSeccion(nombre) {
    const seccion = secciones[nombre];

    explorador.dataset.seccion = nombre;
    tituloSeccion.textContent = seccion.titulo;
    descripcionSeccion.textContent = seccion.descripcion;

    enlacesMenu.forEach((opcion) => {
        opcion.classList.toggle(
            "vista-activa",
            opcion.dataset.seccion === nombre
        );
    });

    const bloques = seccion.temas.map((tema) => {
        const bloque = document.createElement("a");
        bloque.className = "tema-blog";
        bloque.href = tema.enlace;

        const foto = document.createElement("img");
        foto.src = tema.imagen;
        foto.alt = "";

        const texto = document.createElement("div");
        texto.className = "tema-blog-texto";

        const titulo = document.createElement("h3");
        titulo.textContent = tema.titulo;

        const resumen = document.createElement("p");
        resumen.textContent = tema.resumen;

        const flecha = document.createElement("span");
        flecha.className = "tema-blog-flecha";
        flecha.textContent = "→";
        flecha.setAttribute("aria-hidden", "true");

        texto.append(titulo, resumen, flecha);
        bloque.append(foto, texto);

        return bloque;
    });

    listaTemas.replaceChildren(...bloques);
}

enlacesMenu.forEach((opcion) => {
    opcion.addEventListener("mouseenter", () => {
        mostrarSeccion(opcion.dataset.seccion);
    });

    opcion.addEventListener("focus", () => {
        mostrarSeccion(opcion.dataset.seccion);
    });
});

mostrarSeccion("inicio");