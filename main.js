//NOMBRE DEL PROGRAMA
const titulo = "BookGlimpse"
const significado = `Un espacio donde cada página es una ventana hacia nuevos mundos, ideas y emociones. 
Aquí, los libros cobran vida con un vistazo que despierta curiosidad, inspira reflexión y conecta 
almas lectoras con historias que trascienden el tiempo. `;

alert(titulo + "\n\n" + significado)

// 1) HOME
//nombre del usuario
//mejoras posteriores usar función para validar que solo sea letras
function solicitarNombre(){
    let nombre = prompt("Ingresa tu nombre");
    nombre= nombre.toUpperCase();
    alert("BIENVENIDO/A " + nombre);
    return menu();
}

// 2) CATEGORIAS
// Arrays
function Categorias(){
    let generosLiterarios=["Ficción", "Drama y Teatro", "Literatura Clásica"]
    let autor = ["Gabriel García", "Jorge Luis Borges" ,"Mario Vargas Llosa"];
    alert(generosLiterarios + "\n" + autor)
    return menu();
}


// 3) LUDOTRIVIA
function LudoTrivia() {
    let nivel1 = "1. Fácil";
    let nivel2 = "2. Intermedio";
    let nivel3 ="3. Difícil";
    alert(nivel1 + "\n" + nivel2 + "\n" +nivel3);
    let opcionesTrivia = parseInt(prompt("Selecciona una de las opciones:"));
    return opcionesTrivia;
}

function opcionesLudoTrivia() {
    while (true) {
        let opcionesTrivia = LudoTrivia();

        if (opcionesTrivia == 1) {
            facil();
        
        } else if (opcionesTrivia == 2) {
            intermedio();
        
        } else if (opcionesTrivia== 3) {
            dificil();
        
        } else {
            let cierre = "Opción no válida, vuelve a intentarlo.";
            alert(cierre);
            opcionesLudoTrivia();
        }
    }
}

//niveles de la LudoTrivia FACIL/INTERMEDIO/DIFICIL
function facil(){
    alert("Pon a prueba tu conocimiento literario en el nivel 1");
    return menu();
}

function intermedio(){
    alert("Pon a prueba tu conocimiento literario en el nivel 2");
    return menu();
    
}

function dificil(){
    alert("Pon a prueba tu conocimiento literario en el nivel 1");
    return menu();
    
}


// MENU PRINCIPAL
//.......................................................................
function opcionesMenu(){
    let opcion1 = "1. Home";
    let opcion2 = "2. Categorias";
    let opcion3 = "3. LudoTrivia";
    alert(opcion1 + "\n" + opcion2 + "\n" + opcion3);
    let seleccionar = parseInt(prompt("Selecciona una de las opciones:"));
    return seleccionar;
}

function menu() {
    while (true) {
        let seleccionar = opcionesMenu();

        if (seleccionar == 1) {
            solicitarNombre();
            break; 
        } else if (seleccionar == 2) {
            Categorias();
            break; 
        } else if (seleccionar == 3) {
            opcionesLudoTrivia();
            break; 
        } else {
            let salida = "Opción no válida, vuelve a intentarlo.";
            alert(salida);
        }
    }
}
menu();
//........................................................................
