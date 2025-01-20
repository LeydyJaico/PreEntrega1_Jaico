/*
1- pedir nombre
2- dar bienvenida
3- mostrar el menu de opciones
4- home, categorias, trivia
5- en caso de que vuelva al home debe ya mostrar el nombre ingresado
6- en la seccion catergorias, mostrar opciones......>mostrar todo y otro opciones de busqueda por(genero, autor,y encabezado)
7-Trivia falta hacer-------
*/


// NOMBRE DEL PROGRAMA
const titulo = "BookGlimpse";
const significado = `Un espacio donde cada página es una ventana hacia nuevos mundos, ideas y emociones. 
Aquí, los libros cobran vida con un vistazo que despierta curiosidad, inspira reflexión y conecta 
almas lectoras con historias que trascienden el tiempo. `;
alert(titulo + "\n\n" + significado);

// 1) HOME
let nombreUsuario = ""; // Variable global
const solicitarNombre = () => {
    nombreUsuario = prompt("Ingresa tu nombre");
    if (nombreUsuario) {
        nombreUsuario = nombreUsuario.toUpperCase();
        alert("BIENVENIDO/A " + nombreUsuario);
    } else {
        alert("Nombre no válido, intenta nuevamente.");
        solicitarNombre();
    }
};
solicitarNombre();

// 2) CATEGORÍAS
const generosLiterarios=[
    {
        genero : "Ficción",
        libros : [
            {encabezado:"Cien años de soledad",autor: "Gabriel García Márquez"},
            {encabezado:"Ficciones",autor: "Jorge Luis Borges"},
            {encabezado:"La ciudad y los perros", autor: "Mario Vargas Llosa"},
            {encabezado:"Rayuela", autor: "Julio Cortázar"},
            {encabezado:"El entenado", autor: "Juan José Saer"},
            {encabezado:"La casa de los espíritus", autor: "Isabel Allende"},
        ]
    },

    {
        genero : "Romántico",
        libros : [
            {encabezado:"Como agua para chocolate", autor: "Laura Esquivel"},
            {encabezado:"Dime quién soy", autor: "Julia Navarro"},
            {encabezado:"El príncipe de la niebla", autor: "Carlos Ruiz Zafón "},
            {encabezado:" Paula", autor: "Isabel Allende"},
            {encabezado:"Yo antes de ti", autor: "Jojo Moyes  "},
            {encabezado:" El cuaderno de Noah ", autor: "Nicholas Sparks"},
        ]
    },
    
    {
        genero : "Terror",
        libros : [
            {encabezado:"El prisionero del cielo", autor: "Carlos Ruiz Zafón"},
            {encabezado:"El rostro del mal", autor: "Pedro Fernández "},
            {encabezado:"El viajero del siglo", autor: "Andrés Neuman "},
            {encabezado:"La última casa a la izquierda", autor: "Héctor Cárdenas"},
            {encabezado:"El bosque de los árboles muertos", autor: "Paco Gómez Escribano"},
            {encabezado:"Stephen King", autor: "It"},
        ]
    },
    
    {
        genero : "Literatura Clásica",
        libros : [
            {encabezado:"Don Quijote de la Mancha", autor: "Miguel de Cervantes "},
            {encabezado:"Bodas de sangre", autor: "Federico García Lorca"},
            {encabezado:"Ismaelillo", autor: "José Martí "},
            {encabezado:"Campos de Castilla", autor: "Antonio Machado"},
            {encabezado:"Visión de Anáhuac", autor: "Alfonso Reyes" },
            {encabezado:"Carta atenagórica", autor: "Sor Juana Ibarra de la Cruz "},
        ]
    },
    {
        genero : "Cuentos",
        libros : [
            {encabezado:"Cuentos de la selva", autor: "Horacio Quiroga"},
            {encabezado:"El Aleph", autor: "Jorge Luis Borges"},
            {encabezado:"Cuentos completos",autor: "Edgar Allan Poe"},
            {encabezado:"Las cosas que perdimos en el fuego",autor: "Mariana Enriquez"},
            {encabezado:" El pozo", autor: "Juan Carlos Onetti"},
            {encabezado:"La casa de Adela", autor: "Luisa Valenzuela"},
        ]
    },
    {
        genero : "Libros de ingeniería",
        libros : [
            {encabezado:"Mecánica de Materiales", autor: "Ferdinand P. Beer, E. Russell Johnston Jr."},
            {encabezado:"Introducción a la Ingeniería de Software",autor: "Ian Sommerville"},
            {encabezado:"Mecánica de Fluidos",autor: "Frank M. White"},
            {encabezado:"Fundamentos de Termodinámica",autor: "Circuitos Eléctricos"},
            {encabezado:"Circuitos Eléctricos", autor: "James W. Nilsson y Susan Riedel"},
            {encabezado:"Cálculo de Estructuras", autor: " E. O. Wilson"}
        ]
    }
];

//Función para mostrar todos los libros
// const a = (parametros)=>{"cuerpo de la función"};
//`Texto antes ${expresion} texto después` con comillas invertidas"
const mostrarLibros=()=>{
    let libros ="Libros disonibles:\n\n"
    generosLiterarios.forEach((g) =>{
        libros += `Género: ${g.genero}\n`;
        g.libros.forEach((i)=>{
            libros += `- ${i.encabezado} (Autor: ${i.autor})\n `;
        }); 
    });
    alert(libros)
};

//Función para buscar libros de acuerdo al género literario
//find(muestra el undefined)
//cadena.toLowerCase();
const filtrarLibroGenero =()=>{
    const generoBuscado=prompt("Ingresa el género literario que deseas buscar:").toLowerCase();
    const encontrado = generosLiterarios.find((g)=>g.genero.toLowerCase()===generoBuscado);
    if(encontrado=== undefined){
        alert("No se encontro ese género");
    }else{
        let libros = `LIBROS DEL GÉNERO ${generoBuscado.toUpperCase()}: \n\n`;
        encontrado.libros.forEach((i)=>{
            libros += `- ${i.encabezado} (Autor: ${i.autor})\n`;
        });
        alert(libros);
    }


};

// Función para buscar libros de acuerdo el titulo
//flatmap combinacion=mapea y aplana----array de objeto
const filtarLibrosTitulo=()=>{
    const tituloBuscado = prompt("Ingresa el título del libro que deseas buscar:").toLowerCase();
    const tituloEncontrado = generosLiterarios.flatMap((g) => g.libros).find((i) => i.encabezado.toLowerCase() === tituloBuscado);
    if (tituloEncontrado) {
        alert(`LIBRO ENCONTRADO:\n\n ${tituloEncontrado.encabezado} (Autor: ${tituloEncontrado.autor})`);
    } else {
        alert(`No se encontró ningún libro con el título ${tituloBuscado}.`);
    }
};

// Función para buscar libros por autor
const filtrarLibrosAutores = () => {
    const autorBuscado = prompt("Ingresa el nombre del autor que deseas buscar:").toLowerCase();
    const autorEncontrado = generosLiterarios.flatMap((g) => g.libros).filter((i) => i.autor.toLowerCase().includes(autorBuscado));
    if (autorEncontrado.length > 0) {
        let libros = `LIBROS DE ${autorBuscado.toUpperCase()}:\n\n`;
        autorEncontrado.forEach((i) => {
            libros += `- ${i.encabezado} (Autor: ${i.autor})\n`;
        });
        alert(libros);
    } else {
        alert(`No se encontraron libros del autor ${autorBuscado}.`);
    }
};

// Menú de categorías
const  mostrarMenuDeCategorias=() => {
    let alternativa;
    do {
        alternativa = parseInt(prompt(
            "ELIGE UNA DE LAS OPCIONES: \n\n1 - MOSTRAR LIBROS\n2 - BUSCAR POR GÉNEROS\n3 - BUSCAR POR TÍTULO DEL LIBRO\n4 - BUSCAR POR AUTORES\n5 - VOLVER AL MENÚ PRINCIPAL"
        ));
        switch (alternativa) {
            case 1:
                mostrarLibros();
                break;
            case 2:
                filtrarLibroGenero();
                break;
            case 3:
                filtarLibrosTitulo();
                break;
            case 4:
                filtrarLibrosAutores();
                break;
            case 5:
                return;
            default:
                alert("Opción incorrecta.");
                break;
        }
    } while (alternativa !== 5);
};

// 3) LUDO TRIVIA
const ludo = () => {
    let niveles;
    do {
        niveles = prompt(`Seleccione una opción:
        1. Nivel Fácil
        2. Nivel Intermedio
        3. Nivel Difícil
        4. Volver al menú principal`);

        switch (niveles) {
            case '1':
                nivelFacil();
                break;
            case '2':
                nivelIntermedio();
                break;
            case '3':
                nivelDificil();
                break;
            case '4':
                mostrarMenu();
                return;
            default:
                alert("Opción no válida. Intente de nuevo.");
        }
    } while (option !== '4');
};

const nivelFacil = () => {
    const preguntas = [
        { pregunta: "¿Quién escribió Cien años de soledad?", opciones: ["A) Gabriel García Márquez", "B) Mario Vargas Llosa", "C) Carlos Fuentes", "D) Julio Cortázar"], respuesta: "A" },
        { pregunta: "¿Quién escribió la novela Rayuela?", opciones: ["A) Mario Vargas Llosa", "B) Julio Cortázar", "C) Jorge Luis Borges", "D) Isabel Allende"], respuesta: "B" },
        { pregunta: "¿De qué autor es La casa de los espíritus?", opciones: ["A) Laura Esquivel", "B) Isabel Allende", "C) Carlos Ruiz Zafón", "D) José Martí"], respuesta: "B" },
        { pregunta: "¿Qué novela es famosa por la frase 'el coronel no tiene quien le escriba'?", opciones: ["A) Crónica de una muerte anunciada", "B) El coronel no tiene quien le escriba", "C) La ciudad y los perros", "D) Ficciones"], respuesta: "B" },
        { pregunta: "¿Quién escribió La sombra del viento?", opciones: ["A) Carlos Ruiz Zafón", "B) Laura Gallego", "C) Jorge Luis Borges", "D) Mario Mendoza"], respuesta: "A" },
    ];
    jugarNivel(preguntas);
};

const nivelIntermedio = () => {
    const preguntas = [
        { pregunta: "¿Qué obra escribió La muerte de Artemio Cruz?", opciones: ["A) Mario Vargas Llosa", "B) Carlos Fuentes", "C) Juan José Saer", "D) Ricardo Piglia"], respuesta: "B" },
        { pregunta: "¿En qué novela aparece el personaje Fermín Romero de Torres?", opciones: ["A) La sombra del viento", "B) El juego del ángel", "C) La ciudad de los prodigios", "D) Rayuela"], respuesta: "B" },
        { pregunta: "¿Quién escribió Artificial respiración?", opciones: ["A) Ricardo Piglia", "B) Mario Vargas Llosa", "C) Juan José Saer", "D) Carlos Fuentes"], respuesta: "A" },
        { pregunta: "¿Cuál de estos autores escribió El misterio de la cripta embrujada?", opciones: ["A) Mario Mendoza", "B) José Carlos Somoza", "C) Juan Gómez-Jurado", "D) Carlos Ruiz Zafón"], respuesta: "A" },
        { pregunta: "¿Qué novela de Laura Esquivel explora la cultura mexicana?", opciones: ["A) Como agua para chocolate", "B) Paula", "C) La madre de Frankenstein", "D) La estrella más brillante"], respuesta: "A" },
    ];
    jugarNivel(preguntas);
};

const nivelDificil = () => {
    const preguntas = [
        { pregunta: "¿Qué obra de Jorge Luis Borges contiene la famosa historia 'El jardín de los senderos que se bifurcan'?", opciones: ["A) Ficciones", "B) El Aleph", "C) Poeta en Nueva York", "D) Los Heraldos Negros"], respuesta: "A" },
        { pregunta: "¿Quién escribió Las cosas que perdimos en el fuego?", opciones: ["A) Mariana Enriquez", "B) Luisa Valenzuela", "C) Roberto Arlt", "D) César Vallejo"], respuesta: "A" },
        { pregunta: "¿Quién es el autor de El prisionero del cielo?", opciones: ["A) Mario Mendoza", "B) Carlos Ruiz Zafón", "C) Juan Carlos Onetti", "D) José M.ª Guelbenzu"], respuesta: "B" },
        { pregunta: "¿Quién escribió Cuentos completos que incluye relatos como 'El gato negro'?", opciones: ["A) Edgar Allan Poe", "B) Juan José Saer", "C) José Martí", "D) Mariana Enriquez"], respuesta: "A" },
        { pregunta: "¿En qué obra de Borges se abordan temas como el infinito y el tiempo?", opciones: ["A) Ficciones", "B) El Aleph", "C) La casa de los espíritus", "D) La sombra del viento"], respuesta: "A" },
    ];
    jugarNivel(preguntas);
};

const jugarNivel = (preguntas) => {
    let puntaje = 0;

    preguntas.forEach((pregunta, index) => {
        let respuestaUsuario;
        do {
            respuestaUsuario = prompt(`Pregunta ${index + 1}:
${pregunta.pregunta}
${pregunta.opciones.join('\n')}`);
            if (respuestaUsuario === null) {
                alert("Debes ingresar una respuesta para continuar.");
            }
        } while (respuestaUsuario === null || respuestaUsuario.trim() === "");

        if (respuestaUsuario?.toUpperCase() === pregunta.respuesta) {
            alert("¡Correcto!");
            puntaje += 4;
        } else {
            alert(`Incorrecto. La respuesta correcta era: ${pregunta.respuesta}`);
        }
    });

    alert(`Puntaje final: ${puntaje}/20`);

    let opcionFinal;
    do {
        opcionFinal = prompt(`Seleccione una opción:
        1. Volver a intentar
        2. Volver a seleccionar nivel`);

        switch (opcionFinal) {
            case '1':
                jugarNivel(preguntas);
                break;
            case '2':
                ludo();
                break;
            default:
                alert("Opción no válida. Intente de nuevo.");
        }
    } while (!['1', '2'].includes(opcionFinal));
};

//Menú principal
const mostrarMenu = () => {
    let opcion;
    do {
        opcion = parseInt(prompt(
            `Bienvenido/a ${nombreUsuario}\n\nIngrese una opción: \n\n1 - HOME\n2 - LIBROS\n3 - LUDO TRIVIA\n4 - FIN DE PROGRAMA`
        ));
        switch (opcion) {
            case 1:
                solicitarNombre();
                break;
            case 2:
                mostrarMenuDeCategorias();
                break;
            case 3:
                ludo();
                break;
            case 4:
                alert("Gracias por visitarnos :)");
                break;
            default:
                alert("Opción incorrecta.");
                break;
        }
    } while (opcion !== 4);

}
mostrarMenu();
