//HEADER Y FOOTER APTO PARA TODAS LAS SECCIONES HOME/CATEGORIAS/LUDOTRIVIA-------------------------------------
// USO DEL DOM para acceder a los elementos del encabezado y pie de página.
const header = document.getElementById("header");
const footer = document.getElementById("footer");
// HEADER (Encabezado): Función que inserta dinámicamente el contenido del encabezado.
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
    }
};
// FOOTER (Pie de página): Función que inserta dinámicamente el contenido del pie de página
const cargarFooter = () => {
    if (footer) {
        footer.innerHTML = `<p> Leydy Jaico - 2025 </p>`;
    }
};
cargarHeader();
cargarFooter();



//2) SOLAMENTE PARA LA SECCION DE CATEGORIAS---------------------------------
//USO DEL DOM, EVENTOS, LOCAL STORAGE Y JSON
// Almacenamos la información de los géneros literarios y sus libros en un array de objetos con estructura JSON
const generosLiterarios=[
    {
        genero : "Ficción",
        imagen:"img/categorias/ficcion.jpg",
        libros : [
            {encabezado:"Cien años de soledad",autor: "Gabriel García Márquez", pdf: "pdf/ficcion/cien_años_de_soledad.pdf"},
            {encabezado:"Ficciones",autor: "Jorge Luis Borges", pdf: "pdf/ficcion/.ficciones.pdf"},
            {encabezado:"La ciudad y los perros", autor: "Mario Vargas Llosa", pdf: "pdf/ficcion/la_ciudad_y_los_perros.pdf"},
            {encabezado:"Rayuela", autor: "Julio Cortázar", pdf: "pdf/ficcion/rayuela.pdf"},
            {encabezado:"El entenado", autor: "Juan José Saer", pdf: "pdf/ficcion/el_entenado.pdf"},
            {encabezado:"La casa de los espíritus", autor: "Isabel Allende", pdf: "pdf/ficcion/la_casa_de_los_espiritus.pdf"},
        ]
    },

    {
        genero : "Romántico",
        imagen:"img/categorias/romantico.jpg",
        libros : [
            {encabezado:"Como agua para chocolate", autor: "Laura Esquivel", pdf: "pdf/romantico/como_agua_para_chocolate.pdf"},
            {encabezado:"Dime quién soy", autor: "Julia Navarro", pdf: "pdf/romantico/dime_quien_soy.pdf"},
            {encabezado:"El príncipe de la niebla", autor: "Carlos Ruiz Zafón" , pdf: "pdf/romantico/el_principe_de_la_niebla.pdf"},
            {encabezado:" Paula", autor: "Isabel Allende", pdf: "pdf/romantico/paula.pdf"},
            {encabezado:"Yo antes de ti", autor: "Jojo Moyes ", pdf: "pdf/romantico/yo_antes_de_ti.pdf"},
            {encabezado:" El cuaderno de Noah ", autor: "Nicholas Sparks", pdf: "pdf/romantico/el_cuaderno_de_noah.pdf"},
        ]
    },
    
    {
        genero : "Terror",
        imagen:"img/categorias/terror.jpg",
        libros : [
            {encabezado:"El prisionero del cielo", autor: "Carlos Ruiz Zafón", pdf: "pdf/terror/el_prisionero_del_cielo.pdf"},
            {encabezado:"El rostro del mal", autor: "Pedro Fernández", pdf: "pdf/terror/terror.pdf"},
            {encabezado:"El viajero del siglo", autor: "Andrés Neuman", pdf: "pdf/terror/terror.pdf"},
            {encabezado:"La última casa a la izquierda", autor: "Héctor Cárdenas", pdf: "pdf/terror/terror.pdf"},
            {encabezado:"El bosque de los árboles muertos", autor: "Paco Gómez Escribano", pdf: "pdf/terror/terror.pdf"},
            {encabezado:"It", autor: "Stephen King", pdf: "pdf/terror/.pdf"},
        ]
    },
    
    {
        genero : "Literatura Clásica",
        imagen:"img/categorias/literatura clasica.jpg",
        libros : [
            {encabezado:"Don Quijote de la Mancha", autor: "Miguel de Cervantes", pdf: "pdf/literatura_clasica/don_quijote_de_la_mancha.pdf"},
            {encabezado:"Bodas de sangre", autor: "Federico García Lorca", pdf: "pdf/literatura_clasica/.pdf"},
            {encabezado:"Ismaelillo", autor: "José Martí", pdf: "pdf/literatura_clasica/bodas_de_sangre.pdf"},
            {encabezado:"Campos de Castilla", autor: "Antonio Machado", pdf: "pdf/literatura_clasica/campos_de_castilla.pdf"},
            {encabezado:"Visión de Anáhuac", autor: "Alfonso Reyes", pdf: "pdf/literatura_clasica/vision_de_anahuac.pdf" },
            {encabezado:"Carta atenagórica", autor: "Sor Juana Ibarra de la Cruz", pdf: "pdf/literatura_clasica/carta_atenagorica.pdf"},
        ]
    },
    {
        genero : "Cuentos",
        imagen:"img/categorias/cuentos.jpg",
        libros : [
            {encabezado:"Cuentos de la selva", autor: "Horacio Quiroga", pdf: "pdf/cuentos/cuentos_de_la_selva.pdf"},
            {encabezado:"El Aleph", autor: "Jorge Luis Borges", pdf: "pdf/cuentos/el_aleph.pdf"},
            {encabezado:"Cuentos completos",autor: "Edgar Allan Poe", pdf: "pdf/cuentos/cuentos_completos.pdf"},
            {encabezado:"Las cosas que perdimos en el fuego",autor: "Mariana Enriquez", pdf: "pdf/cuentos/las_cosas_que_perdimos_en_el_fuego.pdf"},
            {encabezado:" El pozo", autor: "Juan Carlos Onetti", pdf: "pdf/cuentos/el_pozo.pdf"},
            {encabezado:"La casa de Adela", autor: "Luisa Valenzuela", pdf: "pdf/cuentos/la_casa_de_adela.pdf"},
        ]
    },
];
// Accedemos a elementos del DOM como el selector de género, autor, barra de búsqueda y botón de búsqueda.
const selectGenero = document.getElementById("selectGenero");
const selectAutor = document.getElementById("selectAutor");
const searchInput = document.getElementById("searchInput");
const btnBuscar = document.getElementById("btnBuscar");
const librosContainer = document.getElementById("librosContainer");
// Función para elegir los géneros literarios en un select
const cargarGeneros = () => {
    generosLiterarios.forEach(({ genero }) => {
        const option = document.createElement("option");
        option.value = genero;
        option.textContent = genero;
        selectGenero.appendChild(option);
    });
};
// Función para cargar los autores según el género seleccionado
const cargarAutores = (generoSeleccionado = null) => {
    selectAutor.innerHTML = "<option value=''>Seleccione un autor</option>"; 
    const autoresUnicos = new Set(); 

    const generosFiltrados = generoSeleccionado
        ? generosLiterarios.filter(({ genero }) => genero === generoSeleccionado)
        : generosLiterarios;

    generosFiltrados.forEach(({ libros }) => {
        libros.forEach(({ autor }) => autoresUnicos.add(autor));
    });

    autoresUnicos.forEach(autor => {
        const option = document.createElement("option");
        option.value = autor;
        option.textContent = autor;
        selectAutor.appendChild(option);
    });
};

// Función para mostrar los libros disponibles según la selección
const mostrarLibros = (libros, imagen) => {
    librosContainer.innerHTML = "";

    if (libros.length === 0) {
        librosContainer.innerHTML = `<p class="no-libros">No hay libros disponibles.</p>`;
        return;
    }

    libros.forEach(({ encabezado, autor, pdf }) => {
        const card = document.createElement("div");
        card.classList.add("libro-card");

        card.innerHTML = `
            <img src="${imagen}" alt="${encabezado}" class="libro-img">
            <h3>${encabezado}</h3>
            <p>${autor}</p>
        `;
        //Usando Evento
        //Al hacer clic en una tarjeta, se abre el PDF en una nueva pestaña.
        card.addEventListener("click", () => window.open(pdf, "_blank"));
        librosContainer.appendChild(card);
    });
};


//funcion flechaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
// Filtrar libros por género seleccionado y guardar la selección en localStorage.
selectGenero.addEventListener("change", () => {
    const generoSeleccionado = selectGenero.value; // Se utiliza directamente `selectGenero.value` dentro de la función flecha
    const genero = generosLiterarios.find(({ genero }) => genero === generoSeleccionado);

    if (genero) {
        mostrarLibros(genero.libros, genero.imagen);
        localStorage.setItem("ultimoGenero", JSON.stringify(generoSeleccionado));
        cargarAutores(generoSeleccionado); // Cargar solo los autores de este género.
    }
});

// Filtrar libros por autor seleccionado
selectAutor.addEventListener("change", () => {
    const autorSeleccionado = selectAutor.value; // Igual que arriba, usamos directamente `selectAutor.value`
    const librosPorAutor = generosLiterarios.flatMap(({ libros }) => libros)
        .filter(({ autor }) => autor === autorSeleccionado);

    if (librosPorAutor.length > 0) {
        const generoEncontrado = generosLiterarios.find(({ libros }) =>
            libros.some(({ autor }) => autor === autorSeleccionado)
        );
        mostrarLibros(librosPorAutor, generoEncontrado.imagen);
    } else {
        librosContainer.innerHTML = `<p class="no-libros">No hay libros disponibles.</p>`;
    }
});

// Boton de busqueda
// Buscar libros por texto en el encabezado o autor utilizando JSON
btnBuscar.addEventListener("click", () => {
    const searchText = searchInput.value.trim().toLowerCase();

    if (searchText === "") {
        // 🔹 Muestra una alerta si el usuario da click sin escribir nada
        Swal.fire({
            icon: "warning",
            title: "Campo vacío",
            text: "Por favor, ingrese un título o autor para buscar.",
            confirmButtonColor: "#d33"
        });
        return;
    }

    const librosEncontrados = generosLiterarios.flatMap(({ libros }) => libros)
        .filter(({ encabezado, autor }) => 
            encabezado.toLowerCase().includes(searchText) || 
            autor.toLowerCase().includes(searchText)
        );

    if (librosEncontrados.length > 0) {
        const generoEncontrado = generosLiterarios.find(({ libros }) =>
            libros.some(({ encabezado, autor }) => 
                encabezado.toLowerCase().includes(searchText) || 
                autor.toLowerCase().includes(searchText)
            )
        );
        mostrarLibros(librosEncontrados, generoEncontrado.imagen);
    } else {
        Swal.fire({
            icon: "error",
            title: "No encontrado",
            text: "El libro o autor no está disponible.",
            confirmButtonColor: "#d33"
        });
    }
});

// Al cargar la página de Categorías, reiniciamos los selectores y limpiamos la pantalla.
window.addEventListener("pageshow", () => {
    selectGenero.value = "";
    selectAutor.innerHTML = "<option value=''>Seleccione un autor</option>";
    searchInput.value = "";
    librosContainer.innerHTML = "";
    localStorage.removeItem("ultimoGenero"); // Elimina la última búsqueda guardada
});
cargarGeneros();
cargarAutores();

//SECCIÓN 3) LUDO TRIVIA-------FALTA REALIZAR
