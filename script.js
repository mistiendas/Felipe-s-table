function contacto() {
  document.getElementById("contacto").scrollIntoView({ behavior: "smooth" });
}

var verPro = false;

function verproductos() {
  const productos = document.getElementById("productos");

  if (!verPro) {
    productos.classList.remove("noMostrar");
    verPro = true;
  } else {
    productos.classList.add("noMostrar");
    verPro = false;
  }
}

var verCata;

function verCatalogo() {
  const catalogo = document.getElementById("catalogo");

  if (!verCata) {
    catalogo.classList.remove("noMostrar");
    verCata = true;
  } else {
    catalogo.classList.add("noMostrar");
    verCata = false;
  }
}
