// HEADER Y FOOTER GLOBALES
const header = document.getElementById("header");
const footer = document.getElementById("footer");

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
                        <li><a href="ludotrivia.html">Ludo Trivia</a></li>
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

// VARIABLES GLOBALES
let listaLibrosJSON = [];

// VARIABLES DEL DOM
const contenedorLibros = document.querySelector("#librosContainer");
const selectGenero = document.querySelector("#selectGenero");
const selectAutor = document.querySelector("#selectAutor");
const searchInput = document.querySelector("#searchInput");
const btnBuscar = document.querySelector("#btnBuscar");

// FUNCIONES DE CARGA DE DATOS
const cargarDatosJSON = () => {
    fetch("data/generos.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error al cargar el JSON: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            listaLibrosJSON = data;
            cargarGeneros();
        })
        .catch((error) => console.error(error));
};

// FUNCIONES DE RENDERIZADO
const cargarGeneros = () => {
    if (!selectGenero) {
        return;
    }

    selectGenero.innerHTML = "<option value=''>Selecciona un género</option>";
    listaLibrosJSON.forEach(({ genero }) => {
        const option = document.createElement("option");
        option.value = genero;
        option.textContent = genero;
        selectGenero.appendChild(option);
    });
};

const cargarAutores = (generoSeleccionado = null) => {
    if (!selectAutor) {
        console.error("Select de autores no encontrado.");
        return;
    }

    // Limpiar el select de autores
    selectAutor.innerHTML = "<option value=''>Selecciona un autor</option>";
    const autoresUnicos = new Set();

    // Filtrar autores según el género seleccionado
    listaLibrosJSON.forEach(({ genero, libros }) => {
        if (!generoSeleccionado || genero === generoSeleccionado) {
            libros.forEach(({ autor }) => autoresUnicos.add(autor));
        }
    });

    // Agregar los autores al select
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

// EVENTOS
selectGenero?.addEventListener("change", () => {
    const generoSeleccionado = selectGenero.value;
    const genero = listaLibrosJSON.find(({ genero }) => genero === generoSeleccionado);

    if (genero) {
        cargarAutores(generoSeleccionado); // Cargar autores según el género seleccionado
        renderizarLibros(genero.libros, genero.imagen); // Mostrar libros del género
    } else {
        cargarAutores(); // Mostrar todos los autores si no hay género seleccionado
        renderizarLibros([]); // Vaciar resultados
    }
});

selectAutor?.addEventListener("change", () => {
    const autorSeleccionado = selectAutor.value;

    const librosPorAutor = listaLibrosJSON.flatMap(({ libros, imagen }) => {
        return libros
            .filter(({ autor }) => autor === autorSeleccionado)
            .map((libro) => ({ ...libro, imagen })); // Incluye la imagen del género
    });

    if (librosPorAutor.length > 0) {
        renderizarLibros(librosPorAutor, librosPorAutor[0].imagen); // Usar la imagen del primer libro
    } else {
        renderizarLibros([]);
    }
});

btnBuscar?.addEventListener("click", () => {
    const searchText = searchInput.value.trim().toLowerCase();

    if (!searchText) {
        Swal.fire({
            icon: "warning",
            title: "Campo vacío",
            text: "Por favor, ingrese un título o autor para buscar.",
            confirmButtonColor: "#d33",
        });
        return;
    }

    const librosEncontrados = listaLibrosJSON.flatMap(({ libros, imagen }) =>
        libros
            .filter(
                ({ encabezado, autor }) =>
                    encabezado.toLowerCase().includes(searchText) ||
                    autor.toLowerCase().includes(searchText)
            )
            .map((libro) => ({ ...libro, imagen })) // Agrega la imagen del género al libro
    );

    if (librosEncontrados.length > 0) {
        renderizarLibros(librosEncontrados, librosEncontrados[0].imagen); // Usa la imagen del primer resultado
    } else {
        Swal.fire({
            icon: "error",
            title: "No encontrado",
            text: "El libro o autor no está disponible.",
            confirmButtonColor: "#d33",
        });
    }
});


// INICIALIZACIÓN
document.addEventListener("DOMContentLoaded", () => {
    cargarHeader();
    cargarFooter();
    cargarDatosJSON();
});
