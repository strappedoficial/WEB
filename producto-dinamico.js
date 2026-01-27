console.log("producto-dinamico.js OK");

document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));

  if (!id) {
    mostrarError("ID inválido");
    return;
  }

  // Verificar que PRODUCTOS existe
  if (typeof PRODUCTOS === 'undefined') {
    console.error('PRODUCTOS no está definido');
    mostrarError("Error: No se pudieron cargar los datos del producto");
    return;
  }

  // 🔥 USAMOS PRODUCTOS DEL DATA
  const producto = PRODUCTOS.find(p => p.id === id);

  if (!producto) {
    mostrarError("Producto no encontrado");
    return;
  }

  // TÍTULO
  document.title = producto.nombre;

  document.querySelector(".producto-info h1").textContent = producto.nombre;
  document.querySelector(".precio").textContent =
    `$${producto.precio.toLocaleString("es-CO")} COP`;

  // DESCRIPCIÓN
  const lista = document.querySelector(".detalles");
  lista.innerHTML = "";
  producto.descripcion.forEach(texto => {
    const li = document.createElement("li");
    li.textContent = texto;
    lista.appendChild(li);
  });

  // GALERÍA
  const pista = document.querySelector(".carrusel-pista");
  pista.innerHTML = "";
  producto.imagenes.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.className = "carrusel-img";
    pista.appendChild(img);
  });

  // 🎯 SISTEMA DE CARRUSEL CON FLECHAS
  let indiceActual = 0;
  const totalImagenes = producto.imagenes.length;
  const btnPrev = document.querySelector(".carrusel-btn.prev");
  const btnNext = document.querySelector(".carrusel-btn.next");

  function actualizarCarrusel() {
    const desplazamiento = -indiceActual * 100;
    pista.style.transform = `translateX(${desplazamiento}%)`;
  }

  btnPrev.addEventListener("click", () => {
    indiceActual = (indiceActual - 1 + totalImagenes) % totalImagenes;
    actualizarCarrusel();
  });

  btnNext.addEventListener("click", () => {
    indiceActual = (indiceActual + 1) % totalImagenes;
    actualizarCarrusel();
  });

  // CONTROL DE CANTIDAD
  const inputCantidad = document.getElementById("cantidad");
  const botonesCantidad = document.querySelectorAll(".btn-cantidad");

  botonesCantidad.forEach(btn => {
    btn.addEventListener("click", () => {
      const cantidadActual = parseInt(inputCantidad.value) || 1;
      if (btn.textContent === "+") {
        inputCantidad.value = cantidadActual + 1;
      } else if (btn.textContent === "-" && cantidadActual > 1) {
        inputCantidad.value = cantidadActual - 1;
      }
    });
  });

  // Prevenir valores inválidos en el input
  inputCantidad.addEventListener("change", () => {
    const valor = parseInt(inputCantidad.value) || 1;
    inputCantidad.value = Math.max(1, valor);
  });

  // BOTÓN AGREGAR AL CARRITO
  document
    .getElementById("btn-agregar-carrito")
    .addEventListener("click", () => {
      const cantidad = parseInt(inputCantidad.value) || 1;
      agregarAlCarrito(producto.id, cantidad);
    });

  // BOTÓN COMPRAR AHORA
  const btnComprarAhora = document.getElementById("btn-comprar-ahora");
  if (btnComprarAhora) {
    btnComprarAhora.addEventListener("click", (e) => {
      e.preventDefault();
      const cantidad = parseInt(inputCantidad.value) || 1;
      
      console.log('🛒 Compra directa - Producto:', producto.nombre, 'Cantidad:', cantidad);
      
      // Limpiar carrito primero (para compra directa sin productos anteriores)
      localStorage.removeItem('carrito');
      localStorage.removeItem('cartItems');
      
      // Agregar SOLO este producto
      const carritoDirecto = [{
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        imagen: producto.imgNormal,
        cantidad: cantidad
      }];
      
      // Guardar en localStorage
      localStorage.setItem('carrito', JSON.stringify(carritoDirecto));
      
      console.log('✅ Carrito guardado:', carritoDirecto);
      console.log('🔄 Redirigiendo a Pagos...');
      
      // Redirigir inmediatamente
      window.location.href = 'Pagos.html';
    });
    console.log('✅ Evento de Comprar ahora registrado');
  } else {
    console.error('❌ No se encontró el botón #btn-comprar-ahora');
  }
});

function mostrarError(msg) {
  document.body.innerHTML = `
    <div style="color:white;text-align:center;padding:50px">
      <h2>${msg}</h2>
      <a href="index.html" style="color:#0f0">Volver</a>
    </div>
  `;
}