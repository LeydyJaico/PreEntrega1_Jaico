
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
            alert(Incorrecto. La respuesta correcta era: ${pregunta.respuesta});
        }
    });

    alert(Puntaje final: ${puntaje}/20);

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