// HEADER Y FOOTER 
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
cargarHeader();
cargarFooter();