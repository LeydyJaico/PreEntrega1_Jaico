// HEADER Y FOOTER DINÁMICOS
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
    }
};

const cargarFooter = () => {
    if (footer) {
        footer.innerHTML = `<p>Leydy Jaico - 2025</p>`;
    }
};

// TRIVIA LÓGICA
const triviaContainer = document.getElementById('triviaContainer');

const preguntasFacil = [
    { pregunta: "¿Quién escribió Cien años de soledad?", opciones: ["Gabriel García Márquez", "Mario Vargas Llosa", "Carlos Fuentes", "Julio Cortázar"], respuesta: "Gabriel García Márquez" },
    { pregunta: "¿Quién escribió la novela Rayuela?", opciones: ["Mario Vargas Llosa", "Julio Cortázar", "Jorge Luis Borges", "Isabel Allende"], respuesta: "Julio Cortázar" },
    { pregunta: "¿De qué autor es La casa de los espíritus?", opciones: ["Laura Esquivel", "Isabel Allende", "Carlos Ruiz Zafón", "José Martí"], respuesta: "Isabel Allende" },
];

const preguntasIntermedio = [
    { pregunta: "¿Qué obra escribió La muerte de Artemio Cruz?", opciones: ["Mario Vargas Llosa", "Carlos Fuentes", "Juan José Saer", "Ricardo Piglia"], respuesta: "Carlos Fuentes" },
    { pregunta: "¿En qué novela aparece el personaje Fermín Romero de Torres?", opciones: ["La sombra del viento", "El juego del ángel", "La ciudad de los prodigios", "Rayuela"], respuesta: "La sombra del viento" },
    { pregunta: "¿Quién escribió Artificial respiración?", opciones: ["Ricardo Piglia", "Mario Vargas Llosa", "Juan José Saer", "Carlos Fuentes"], respuesta: "Ricardo Piglia" },
];

const preguntasDificil = [
    { pregunta: "¿Qué obra de Jorge Luis Borges contiene la famosa historia 'El jardín de los senderos que se bifurcan'?", opciones: ["Ficciones", "El Aleph", "Poeta en Nueva York", "Los Heraldos Negros"], respuesta: "Ficciones" },
    { pregunta: "¿Quién escribió Las cosas que perdimos en el fuego?", opciones: ["Mariana Enriquez", "Luisa Valenzuela", "Roberto Arlt", "César Vallejo"], respuesta: "Mariana Enriquez" },
    { pregunta: "¿Quién es el autor de El prisionero del cielo?", opciones: ["Mario Mendoza", "Carlos Ruiz Zafón", "Juan Carlos Onetti", "José M.ª Guelbenzu"], respuesta: "Carlos Ruiz Zafón" },
];

let currentQuestionIndex = 0;
let score = 0;
let currentLevel = [];

const startTrivia = () => {
    currentQuestionIndex = 0;
    score = 0;
    selectLevel();
};

const selectLevel = () => {
    triviaContainer.innerHTML = `
        <h2>Selecciona un nivel</h2>
        <button class="btn" onclick="startLevel(preguntasFacil)">Fácil</button>
        <button class="btn" onclick="startLevel(preguntasIntermedio)">Intermedio</button>
        <button class="btn" onclick="startLevel(preguntasDificil)">Difícil</button>
    `;
};

const startLevel = (preguntas) => {
    currentLevel = preguntas;
    loadQuestion();
};

const loadQuestion = () => {
    const preguntaActual = currentLevel[currentQuestionIndex];

    triviaContainer.innerHTML = `
        <div class="question">${preguntaActual.pregunta}</div>
        <div class="options">
            ${preguntaActual.opciones.map((opcion, index) => `
                <button class="btn" onclick="checkAnswer('${opcion}', '${preguntaActual.respuesta}')">${opcion}</button>
            `).join('')}
        </div>
    `;
};

const checkAnswer = (respuestaUsuario, respuestaCorrecta) => {
    if (respuestaUsuario === respuestaCorrecta) {
        score += 4;
        alert("¡Correcto!");
    } else {
        alert(`Incorrecto. La respuesta correcta era: ${respuestaCorrecta}`);
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < currentLevel.length) {
        loadQuestion();
    } else {
        endTrivia();
    }
};

const endTrivia = () => {
    triviaContainer.innerHTML = `
        <h2>¡Trivia finalizada!</h2>
        <p>Puntaje final: ${score}/${currentLevel.length * 4}</p>
        <button class="btn" onclick="startLevel(currentLevel)">Volver a jugar</button>
        <button class="btn" onclick="selectLevel()">Volver a seleccionar nivel</button>
    `;
};

// Cargar header y footer al iniciar
cargarHeader();
cargarFooter();

// Iniciar trivia
startTrivia();

