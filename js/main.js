// VARIABLES DEL DOM
const header = document.getElementById("header");
const footer = document.getElementById("footer");
const contenedorLibros = document.querySelector("#librosContainer");
const selectGenero = document.querySelector("#selectGenero");
const selectAutor = document.querySelector("#selectAutor");
const searchInput = document.querySelector("#searchInput");
const btnBuscar = document.querySelector("#btnBuscar");

// CARGAR HEADER Y FOOTER
const cargarHeader = () => {
    if (header) {
        header.innerHTML = `
            <div class="header-content">
                <div class="logo">
                    <img src="img/icono.jpg" alt="Logo de un libro" class="logo-img">
                    <h1 class="logo-text">Book Glimpse</h1>
                </div>
                <nav>
                    <ul class="menu">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="categorias.html">Categorías</a></li>
                        <li><a href="recomendaciones.html">Recomendaciones</a></li>
                    </ul>
                </nav>
            </div>
        `;
    } else {
        console.error("Header no encontrado. Verifica el HTML.");
    }
};
const cargarFooter = () => {
    if (footer) {
        footer.innerHTML = `<p>Leydy Jaico - 2025</p>`;
    } else {
        console.error("Footer no encontrado. Verifica el HTML.");
    }
};


// ----------------------------------------------------
// SECCIÓN CATEGORIAS
// ----------------------------------------------------
const listaLibrosJSON=[
    {
        "genero": "Ficción",
        "imagen": "img/categorias/ficcion.jpg",
        "libros": [
            {
                "encabezado": "Cien años de soledad",
                "autor": "Gabriel García Márquez",
                "pdf": "pdf/ficcion/cien_años_de_soledad.pdf"
            },
            {
                "encabezado": "Ficciones",
                "autor": "Jorge Luis Borges",
                "pdf": "pdf/ficcion/ficciones.pdf"
            },
            {
                "encabezado": "La ciudad y los perros",
                "autor": "Mario Vargas Llosa",
                "pdf": "pdf/ficcion/la_ciudad_y_los_perros.pdf"
            },
            {
                "encabezado": "Rayuela",
                "autor": "Julio Cortázar",
                "pdf": "pdf/ficcion/rayuela.pdf"
            },
            {
                "encabezado": "El entenado",
                "autor": "Juan José Saer",
                "pdf": "pdf/ficcion/el_entenado.pdf"
            },
            {
                "encabezado": "La casa de los espíritus",
                "autor": "Isabel Allende",
                "pdf": "pdf/ficcion/la_casa_de_los_espiritus.pdf"
            }
        ]
    },
    {
        "genero": "Romántico",
        "imagen": "img/categorias/romantico.jpg",
        "libros": [
            {
                "encabezado": "Como agua para chocolate",
                "autor": "Laura Esquivel",
                "pdf": "pdf/romantico/como_agua_para_chocolate.pdf"
            },
            {
                "encabezado": "Dime quién soy",
                "autor": "Julia Navarro",
                "pdf": "pdf/romantico/dime_quien_soy.pdf"
            },
            {
                "encabezado": "El príncipe de la niebla",
                "autor": "Carlos Ruiz Zafón",
                "pdf": "pdf/romantico/el_principe_de_la_niebla.pdf"
            },
            {
                "encabezado": "Paula",
                "autor": "Isabel Allende",
                "pdf": "pdf/romantico/paula.pdf"
            },
            {
                "encabezado": "Yo antes de ti",
                "autor": "Jojo Moyes",
                "pdf": "pdf/romantico/yo_antes_de_ti.pdf"
            },
            {
                "encabezado": "El cuaderno de Noah",
                "autor": "Nicholas Sparks",
                "pdf": "pdf/romantico/el_cuaderno_de_noah.pdf"
            }
        ]
    },
    
    {
        "genero": "Terror",
        "imagen": "img/categorias/terror.jpg",
        "libros": [
            {
                "encabezado": "El prisionero del cielo",
                "autor": "Carlos Ruiz Zafón",
                "pdf": "pdf/terror/el_prisionero_del_cielo.pdf"
            },
            {
                "encabezado": "El rostro del mal",
                "autor": "Pedro Fernández",
                "pdf": "pdf/terror/terror.pdf"
            },
            {
                "encabezado": "El viajero del siglo",
                "autor": "Andrés Neuman",
                "pdf": "pdf/terror/terror.pdf"
            },
            {
                "encabezado": "La última casa a la izquierda",
                "autor": "Héctor Cárdenas",
                "pdf": "pdf/terror/terror.pdf"
            },
            {
                "encabezado": "El bosque de los árboles muertos",
                "autor": "Paco Gómez Escribano",
                "pdf": "pdf/terror/terror.pdf"
            },
            {
                "encabezado": "It",
                "autor": "Stephen King",
                "pdf": "pdf/terror/.pdf"
            }
        ]
    },
    {
        "genero": "Literatura Clásica",
        "imagen": "img/categorias/literatura_clasica.jpg",
        "libros": [
            {
                "encabezado": "Don Quijote de la Mancha",
                "autor": "Miguel de Cervantes",
                "pdf": "pdf/literatura_clasica/don_quijote_de_la_mancha.pdf"
            },
            {
                "encabezado": "Bodas de sangre",
                "autor": "Federico García Lorca",
                "pdf": "pdf/literatura_clasica/.pdf"
            },
            {
                "encabezado": "Ismaelillo",
                "autor": "José Martí",
                "pdf": "pdf/literatura_clasica/bodas_de_sangre.pdf"
            },
            {
                "encabezado": "Campos de Castilla",
                "autor": "Antonio Machado",
                "pdf": "pdf/literatura_clasica/campos_de_castilla.pdf"
            },
            {
                "encabezado": "Visión de Anáhuac",
                "autor": "Alfonso Reyes",
                "pdf": "pdf/literatura_clasica/vision_de_anahuac.pdf"
            },
            {
                "encabezado": "Carta atenagórica",
                "autor": "Sor Juana Ibarra de la Cruz",
                "pdf": "pdf/literatura_clasica/carta_atenagorica.pdf"
            }
        ]
    },
    {
        "genero": "Cuentos",
        "imagen": "img/categorias/cuentos.jpg",
        "libros": [
            {
                "encabezado": "Cuentos de la selva",
                "autor": "Horacio Quiroga",
                "pdf": "pdf/cuentos/cuentos_de_la_selva.pdf"
            },
            {
                "encabezado": "El Aleph",
                "autor": "Jorge Luis Borges",
                "pdf": "pdf/cuentos/el_aleph.pdf"
            },
            {
                "encabezado": "Cuentos completos",
                "autor": "Edgar Allan Poe",
                "pdf": "pdf/cuentos/cuentos_completos.pdf"
            },
            {
                "encabezado": "Las cosas que perdimos en el fuego",
                "autor": "Mariana Enriquez",
                "pdf": "pdf/cuentos/las_cosas_que_perdimos_en_el_fuego.pdf"
            },
            {
                "encabezado": "El pozo",
                "autor": "Juan Carlos Onetti",
                "pdf": "pdf/cuentos/el_pozo.pdf"
            },
            {
                "encabezado": "La casa de Adela",
                "autor": "Luisa Valenzuela",
                "pdf": "pdf/cuentos/la_casa_de_adela.pdf"
            }
        ]
    }
]
//FUNCIONES 
const cargarGeneros = () => {
    if (!selectGenero) return;

    selectGenero.innerHTML = "<option value=''>Selecciona un género</option>";
    listaLibrosJSON.forEach(({ genero }) => {
        const option = document.createElement("option");
        option.value = genero;
        option.textContent = genero;
        selectGenero.appendChild(option);
    });
};

const cargarAutores = (generoSeleccionado = null) => {
    if (!selectAutor) return;

    selectAutor.innerHTML = "<option value=''>Selecciona un autor</option>";
    const autoresUnicos = new Set();

    listaLibrosJSON.forEach(({ genero, libros }) => {
        if (!generoSeleccionado || genero === generoSeleccionado) {
            libros.forEach(({ autor }) => autoresUnicos.add(autor));
        }
    });

    autoresUnicos.forEach((autor) => {
        const option = document.createElement("option");
        option.value = autor;
        option.textContent = autor;
        selectAutor.appendChild(option);
    });
};

const renderizarLibros = (libros, generoImagen) => {
    contenedorLibros.innerHTML = "";

    if (libros.length === 0) {
        contenedorLibros.innerHTML = `<p class="no-libros">No hay libros disponibles.</p>`;
        return;
    }

    libros.forEach(({ encabezado, autor, pdf }) => {
        const card = document.createElement("div");
        card.classList.add("libro-card");

        const imgSrc = generoImagen || "img/default.jpg"; // Imagen por defecto si no hay imagen del género
        card.innerHTML = `
            <img src="${imgSrc}" alt="${encabezado}" class="libro-img">
            <h3>${encabezado}</h3>
            <p>${autor}</p>
        `;

        card.addEventListener("click", () => window.open(pdf, "_blank"));
        contenedorLibros.appendChild(card);
    });
};

//EVENTOS

selectGenero?.addEventListener("change", () => {
    const generoSeleccionado = selectGenero.value;
    const genero = listaLibrosJSON.find(({ genero }) => genero === generoSeleccionado);

    if (genero) {
        cargarAutores(generoSeleccionado);
        renderizarLibros(genero.libros, genero.imagen); // Pasar la imagen del género
    } else {
        cargarAutores();
        renderizarLibros([]); // Vaciar resultados
    }
});

selectAutor?.addEventListener("change", () => {
    const autorSeleccionado = selectAutor.value;

    // Encuentra el género relacionado con el autor seleccionado
    let librosPorAutor = [];
    let generoImagen = "";

    listaLibrosJSON.forEach(({ libros, imagen }) => {
        const librosFiltrados = libros.filter(({ autor }) => autor === autorSeleccionado);
        if (librosFiltrados.length > 0) {
            librosPorAutor = librosFiltrados;
            generoImagen = imagen; // Guarda la imagen del género correspondiente
        }
    });

    renderizarLibros(librosPorAutor, generoImagen); // Pasar la imagen del género
});

//BUSCADOR ESCRIBIENDO
btnBuscar?.addEventListener("click", () => {
    const searchText = searchInput.value.trim().toLowerCase();

    if (!searchText) {
        Swal.fire({
            icon: "warning",
            title: "Campo vacío",
            text: "Por favor, ingrese un título o autor para buscar.",
        });
        return;
    }

    let librosEncontrados = [];
    let generoImagen = "";

    listaLibrosJSON.forEach(({ libros, imagen }) => {
        const librosFiltrados = libros.filter(
            ({ encabezado, autor }) =>
                encabezado.toLowerCase().includes(searchText) || autor.toLowerCase().includes(searchText)
        );
        if (librosFiltrados.length > 0) {
            librosEncontrados = librosFiltrados;
            generoImagen = imagen; // Usa la imagen del género relacionado
        }
    });

    if (librosEncontrados.length > 0) {
        renderizarLibros(librosEncontrados, generoImagen); // Mostrar libros con la imagen correcta
    } else {
        Swal.fire({
            icon: "error",
            title: "No encontrado",
            text: "El libro o autor no está disponible.",
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    cargarHeader();
    cargarFooter();
    cargarGeneros();
    // Asegúrate de que el elemento exista antes de agregar el eventListener
    const form = document.getElementById('recomendacionForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

            const nombre = document.getElementById('nombre').value;
            const recomendacion = document.getElementById('recomendacion').value;

            if (nombre.trim() === '' || recomendacion.trim() === '') {
                alert('Por favor, completa todos los campos.');
                return;
            }

            const recomendacionData = {
                nombre: nombre,
                recomendacion: recomendacion,
                fecha: new Date() // Guardar la fecha de envío
            };

            let recomendaciones = JSON.parse(localStorage.getItem('recomendaciones')) || [];


            const MAX_RECOMENDACIONES = 10;
            // Limitar las recomendaciones a las últimas MAX_RECOMENDACIONES
            if (recomendaciones.length >= MAX_RECOMENDACIONES) {
                recomendaciones.shift(); // Eliminar la recomendación más antigua
            }

            recomendaciones.push(recomendacionData);

            localStorage.setItem('recomendaciones', JSON.stringify(recomendaciones));

            document.getElementById('respuesta').innerHTML = `<p>¡Gracias, ${nombre}! Tu recomendación ha sido recibida.</p>`;
            document.getElementById('recomendacionForm').reset();

            // Cargar las recomendaciones actualizadas
            cargarRecomendaciones();
        });
    }

    // Verificar si el elemento para la imagen de la NASA existe antes de intentar modificarlo
    const nasaImage = document.getElementById('nasa-image');
    if (nasaImage) {
        const apiKey = 'fDPqf2atGwbre1rVDpd66yEMFETZfJLjScMwziDV'; 
        const nasaUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

        fetch(nasaUrl)
            .then(response => response.json())
            .then(data => {
                const imageUrl = data.url;
                const description = data.explanation;
                nasaImage.src = imageUrl;
                document.getElementById('nasa-description').textContent = description;
            })
            .catch(error => {
                console.error('Error al obtener la imagen de la NASA:', error);
            });
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    cargarRecomendaciones();
});

const cargarRecomendaciones = () => {
    const recomendaciones = JSON.parse(localStorage.getItem('recomendaciones')) || [];
    const listaRecomendaciones = document.getElementById('listaRecomendaciones');

    if (listaRecomendaciones) {
        // Limpiar lista
        listaRecomendaciones.innerHTML = '';

        // Mostrar todas las recomendaciones guardadas
        recomendaciones.forEach((recomendacion) => {
            const item = document.createElement('li');
            item.textContent = `${recomendacion.nombre}: ${recomendacion.recomendacion} (Fecha: ${recomendacion.fecha})`;

            listaRecomendaciones.appendChild(item);
        });
    } 
};


// Llama a la función cargarRecomendaciones cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', (event) => {
    cargarRecomendaciones();
});


