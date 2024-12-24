/*
const vehiculos = [
  {
    marca: "Volkswagen",
    modelo: "Vento",
    anio: "2017",
    version: "2.0 T GLI DSG",
    tipoCombustible: "Nafta",
    precio: 17000000,
  },
  {
    marca: "Fiat",
    modelo: "Cronos",
    anio: "2019",
    version: "1.3 Attractive",
    tipoCombustible: "Nafta",
    precio: 15500000,
  },
  {
    marca: "Mercedes Benz",
    modelo: "Clase E",
    anio: "2013",
    version: "350 Sport Coupe",
    tipoCombustible: "Nafta",
    precio: 39000000,
  },
  {
    marca: "Volkswagen",
    modelo: "Suran",
    anio: "2010",
    version: "1.9 TDI Confortline",
    tipoCombustible: "Diesel",
    precio: 9750000,
  },
  {
    marca: "Mercedes Benz",
    modelo: "Clase ML",
    anio: "2006",
    version: "320 CDI",
    tipoCombustible: "Diesel",
    precio: 16000000,
  },
];

function mostrarVehiculos(vehiculos) {
  vehiculos.forEach((v) => {
    alert(`${v.marca} ${v.modelo} ${v.version} \n${v.tipoCombustible} ${v.anio} \n$${v.precio}`);
  });
  alert("-----------------------------");
}

function filtrarPorMarca(marcaUsuario) {
  const vehiculosFiltrados = vehiculos.filter((v) => v.marca.toLowerCase() === marcaUsuario.toLowerCase());
  if (vehiculosFiltrados.length === 0) {
    alert(`No disponemos de ningún vehículo de la marca ${marcaUsuario}`);
  } else {
    mostrarVehiculos(vehiculosFiltrados);
  }
}

function filtrarPorPrecio(precioMax) {
  const vehiculosFiltrados = vehiculos.filter((v) => v.precio <= precioMax);
  if (vehiculosFiltrados.length === 0) {
    alert(`No disponemos de ningún vehículo por debajo de $${precioMax}`);
  } else {
    mostrarVehiculos(vehiculosFiltrados);
  }
}

function mostrarMenu() {
  let opcion;

  do {
    opcion = prompt(
      "Bienvenido a CarHouse. Ingrese una opción: \n\n1 - Mostrar vehículos disponibles\n2 - Buscar por marca\n3 - Filtrar por precio\n4 - Salir\n\n(Abra la consola para ver los resultados)"
    );
    switch (opcion) {
      case "1":
        mostrarVehiculos(vehiculos);
        break;
      case "2":
        const marcaUsuario = prompt("¿Qué marca desea buscar?");
        filtrarPorMarca(marcaUsuario);
        break;
      case "3":
        const precioMax = parseInt(prompt("Ingrese el precio máximo"));
        filtrarPorPrecio(precioMax);
        break;
      case "4":
        alert("Gracias por visitarnos :)");
        break;
      default:
        alert("Opción incorrecta");
        break;
    }
  } while (opcion !== "4");
}

mostrarMenu();
*/


