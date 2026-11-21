const destacados = [{

        tema: "Actualidad IA · 19/11/2026",
        titulo: "La IA también se ejecuta en el navegador",
        resumen: "Microsoft presenta Aion Instruct en Edge para incorporar funciones de IA que se ejecutan en el propio dispositivo.",
        enlace: "https://blogs.windows.com/msedgedev/2026/11/19/hybrid-intelligence-on-the-web-introducing-aion-instruct-and-prompt-api-in-microsoft-edge/",
        imagen: "./imagenes/novedad-ia.png",
        alt: "Hilos morados atraviesan una pieza de vidrio y se unen en un hilo verde lima"
    },
    {
        tema: "Aplicaciones · 25/09/2026",
        titulo: "Copilot reúne Home, Code y Autopilot",
        resumen: "Microsoft presenta una renovación de Copilot para conversar, crear soluciones y delegar tareas, con un despliegue gradual.",
        enlace: "https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/",
        imagen: "./imagenes/novedad-aplicacion.png",
        alt: "Una cinta de vidrio curvada rodea papeles y un bolígrafo entre reflejos malva y cobre"
    },
    {
        tema: "Mi trabajo · Investigación OSINT",
        titulo: "¿Qué puede revelar un vídeo de pocos segundos?",
        resumen: "Así investigué las pistas de un vídeo mediante fuentes abiertas para mi trabajo de Seguridad de la Información.",
        enlace: "./entradas/investigacion-osint/index.html",
        imagen: "./imagenes/osint-avion.png",
        alt: "Avión con el nombre de la aerolínea y la matrícula señalados en amarillo"
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
    const esExterno = entrada.enlace.startsWith("https://");

    if (esExterno) {
        enlace.target = "_blank";
        enlace.rel = "noopener noreferrer";
        enlace.textContent = "Leer noticia ↗";
        enlace.setAttribute("aria-label", "Leer noticia, abre en otra pestaña");
    } else {
        enlace.removeAttribute("target");
        enlace.removeAttribute("rel");
        enlace.textContent = "Ver publicación →";
        enlace.removeAttribute("aria-label");
    }
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
                imagen: "./imagenes/web-navegador.png",
                enlace: paginaWeb
            },

            {
                titulo: "Aprende a protegerte",
                resumen: "Revisa las señales de un correo sospechoso.",
                imagen: "./imagenes/seguridad-sobre.png",
                enlace: paginaSeguridad
            },
            {
                titulo: "Ponlo a prueba",
                resumen: "Experimenta con otro sistema operativo en una máquina virtual.",
                imagen: "./imagenes/virtualizacion-practica.png",
                enlace: paginaVirtualizacion
            }
        ]
    },

    web: {
        titulo: "Temas de Web",
        descripcion: "Del navegador al servidor, paso a paso.",
        temas: [{
                titulo: "Qué pide el navegador",
                resumen: "El viaje que comienza al abrir una página.",
                imagen: "./imagenes/web-navegador.png",
                enlace: paginaWeb + "#navegador"
            },
            {
                titulo: "La respuesta del servidor",
                resumen: "Qué devuelve el servidor a una petición.",
                imagen: "./imagenes/web-servidor.png",
                enlace: paginaWeb + "#servidor"
            },
            {
                titulo: "HTML y CSS",
                resumen: "Cómo se organizan el contenido y su presentación.",
                imagen: "./imagenes/web-codigo.png",
                enlace: paginaWeb + "#html-css"
            }
        ]
    },

    seguridad: {
        titulo: "Temas de Seguridad",
        descripcion: "Observa los detalles antes de confiar en un mensaje.",
        temas: [{
                titulo: "Reconoce el phishing",
                resumen: "Identifica cómo intentan ganarse tu confianza.",
                imagen: "./imagenes/seguridad-sobre.png",
                enlace: paginaSeguridad + "#reconoce-phishing"
            },
            {
                titulo: "Revisa un enlace",
                resumen: "Comprueba a dónde te invita a ir un mensaje.",
                imagen: "./imagenes/seguridad-enlace.png",
                enlace: paginaSeguridad + "#revisa-enlace"
            },
            {
                titulo: "Analiza un correo ficticio",
                resumen: "Practica buscando sus señales de alerta.",
                imagen: "./imagenes/seguridad-correo.png",
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
                imagen: "./imagenes/virtualizacion-maquina.png",
                enlace: paginaVirtualizacion + "#maquina-virtual"
            },
            {
                titulo: "El papel del hipervisor",
                resumen: "La herramienta que permite ejecutar la máquina virtual.",
                imagen: "./imagenes/virtualizacion-hipervisor.png",
                enlace: paginaVirtualizacion + "#hipervisor"
            },
            {
                titulo: "Windows y Ubuntu",
                resumen: "Un ejemplo de anfitrión y sistema invitado.",
                imagen: "./imagenes/virtualizacion-practica.png",
                enlace: paginaVirtualizacion + "#windows-ubuntu"
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
                enlace: paginaAcerca + "#quien-soy"
            },
            {
                titulo: "Qué estoy aprendiendo",
                resumen: "Redes, seguridad y sistemas.",
                imagen: "./imagenes/virtualizacion.jpg",
                enlace: paginaAcerca + "#aprendiendo"
            },
            {
                titulo: "Por qué este blog",
                resumen: "Compartir lo que aprendo con ejemplos sencillos.",
                imagen: "./imagenes/phishing.jpg",
                enlace: paginaAcerca + "#sobre-blog"
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

        titulo.append(" ", flecha);
        texto.append(titulo, resumen);
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

const parametros = new URLSearchParams(window.location.search);
const seccionSolicitada = parametros.get("seccion");

const seccionInicial = Object.hasOwn(secciones, seccionSolicitada) ?
    seccionSolicitada :
    "inicio";

mostrarSeccion(seccionInicial);