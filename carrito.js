// carrito.js - Sistema de carrito mejorado con IDs

// Función para obtener el carrito del localStorage
function obtenerCarrito() {
  const carrito = localStorage.getItem('carrito');
  return carrito ? JSON.parse(carrito) : [];
}

// Función para guardar el carrito
function guardarCarrito(carrito) {
  localStorage.setItem('carrito', JSON.stringify(carrito));
  actualizarContador();
}

// Función para agregar producto al carrito
function agregarAlCarrito(productoId, cantidad = 1) {
  const producto = PRODUCTOS.find(p => p.id === parseInt(productoId));
  
  if (!producto) {
    console.error('Producto no encontrado:', productoId);
    mostrarMensaje('Error: Producto no encontrado', 'error');
    return;
  }

  let carrito = obtenerCarrito();
  const itemExistente = carrito.find(item => item.id === parseInt(productoId));

  if (itemExistente) {
    itemExistente.cantidad += cantidad;
  } else {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imgNormal,
      cantidad: cantidad
    });
  }

  guardarCarrito(carrito);
  actualizarVistaCarrito();
  mostrarMensaje('Producto agregado al carrito', 'success');
}

// Función para actualizar cantidad
function actualizarCantidad(productoId, nuevaCantidad) {
  if (nuevaCantidad < 1) {
    eliminarDelCarrito(productoId);
    return;
  }

  let carrito = obtenerCarrito();
  const item = carrito.find(i => i.id === parseInt(productoId));
  
  if (item) {
    item.cantidad = nuevaCantidad;
    guardarCarrito(carrito);
    actualizarVistaCarrito();
  }
}

// Función para eliminar del carrito
function eliminarDelCarrito(productoId) {
  let carrito = obtenerCarrito();
  carrito = carrito.filter(item => item.id !== parseInt(productoId));
  guardarCarrito(carrito);
  actualizarVistaCarrito();
  mostrarMensaje('Producto eliminado del carrito', 'info');
}

// Función para vaciar el carrito
function vaciarCarrito() {
  localStorage.removeItem('carrito');
  actualizarContador();
  actualizarVistaCarrito();
}

// Función para actualizar el contador
function actualizarContador() {
  const contador = document.getElementById('carrito-contador');
  if (!contador) return;

  const carrito = obtenerCarrito();
  const total = carrito.reduce((sum, item) => sum + item.cantidad, 0);
  
  contador.textContent = total;
  contador.style.display = total > 0 ? 'flex' : 'none';
}

// Función para calcular el total
function calcularTotal() {
  const carrito = obtenerCarrito();
  return carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
}

// Función para actualizar la vista del carrito
function actualizarVistaCarrito() {
  const container = document.getElementById('carrito-items-container');
  const totalElement = document.getElementById('carrito-total');
  
  if (!container) return;

  const carrito = obtenerCarrito();

  if (carrito.length === 0) {
    container.innerHTML = `
      <div style="padding: 40px 20px; text-align: center; color: #888;">
        <p>Tu carrito está vacío</p>
      </div>
    `;
    if (totalElement) totalElement.textContent = '$0 COP';
    return;
  }

  container.innerHTML = carrito.map(item => `
    <div class="carrito-item" data-id="${item.id}">
      <img src="${item.imagen}" alt="${item.nombre}" onerror="this.src='imagenes/placeholder.png'">
      <div class="carrito-item-info">
        <h4>${item.nombre}</h4>
        <p class="carrito-item-precio">$${item.precio.toLocaleString('es-CO')} COP</p>
        <div class="carrito-item-cantidad">
          <button class="btn-cantidad-carrito" onclick="actualizarCantidad(${item.id}, ${item.cantidad - 1})">-</button>
          <span>${item.cantidad}</span>
          <button class="btn-cantidad-carrito" onclick="actualizarCantidad(${item.id}, ${item.cantidad + 1})">+</button>
        </div>
      </div>
      <button class="btn-eliminar-item" onclick="eliminarDelCarrito(${item.id})">&times;</button>
    </div>
  `).join('');

  const total = calcularTotal();
  if (totalElement) {
    totalElement.textContent = `$${total.toLocaleString('es-CO')} COP`;
  }

  actualizarContador();
}

// Función para mostrar mensajes (usando SweetAlert si está disponible)
function mostrarMensaje(mensaje, tipo = 'success') {
  if (typeof Swal !== 'undefined') {
    const iconos = {
      success: 'success',
      error: 'error',
      info: 'info',
      warning: 'warning'
    };

    Swal.fire({
      icon: iconos[tipo] || 'info',
      title: mensaje,
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      background: '#000',
      color: '#fff',
      iconColor: '#fff',
      customClass: {
        popup: 'swal-strapped-toast',
        timerProgressBar: 'swal-strapped-progress'
      }
    });
  } else {
    alert(mensaje);
  }
}

// Función para ir a la página de pagos
function irAPagos() {
  const carrito = obtenerCarrito();
  
  if (carrito.length === 0) {
    mostrarMensaje('Tu carrito está vacío', 'warning');
    return;
  }

  // Guardar carrito en formato compatible con Pagos.html
  localStorage.setItem('cartItems', JSON.stringify(carrito));
  
  // Redirigir a la página de pagos
  window.location.href = 'Pagos.html';
}

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
  console.log('🛒 Inicializando carrito...');
  
  // Actualizar contador y vista inicial
  actualizarContador();
  actualizarVistaCarrito();

  // Botón abrir carrito
  const btnCarrito = document.getElementById('btn-carrito');
  const carritoPanel = document.getElementById('carrito-panel');
  const overlayCarrito = document.getElementById('overlay-carrito');
  const btnCerrarCarrito = document.getElementById('cerrar-carrito');

  console.log('Elementos encontrados:', {
    btnCarrito: !!btnCarrito,
    carritoPanel: !!carritoPanel,
    overlayCarrito: !!overlayCarrito,
    btnCerrarCarrito: !!btnCerrarCarrito
  });

  if (btnCarrito && carritoPanel) {
    btnCarrito.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('Click en botón carrito');
      console.log('Clases antes:', carritoPanel.className);
      
      carritoPanel.classList.add('active');
      if (overlayCarrito) overlayCarrito.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // FORZAR estilos inline para sobrescribir cualquier transform
      carritoPanel.style.transform = 'none';
      carritoPanel.style.right = '0';
      
      console.log('Clases después:', carritoPanel.className);
      console.log('Display:', window.getComputedStyle(carritoPanel).display);
      console.log('Transform:', window.getComputedStyle(carritoPanel).transform);
      console.log('Right:', window.getComputedStyle(carritoPanel).right);
    });
    console.log('✅ Event listener del carrito agregado');
  } else {
    console.error('❌ No se encontró btnCarrito o carritoPanel');
  }

  if (btnCerrarCarrito) {
    btnCerrarCarrito.addEventListener('click', cerrarCarrito);
  }

  if (overlayCarrito) {
    overlayCarrito.addEventListener('click', cerrarCarrito);
  }

  // Botón comprar/pagar - AMBOS BOTONES
  const btnComprar = document.getElementById('carrito-comprar');
  if (btnComprar) {
    btnComprar.addEventListener('click', irAPagos);
    console.log('✅ Botón comprar configurado');
  }
});

// Función para cerrar el carrito
function cerrarCarrito() {
  const carritoPanel = document.getElementById('carrito-panel');
  const overlayCarrito = document.getElementById('overlay-carrito');
  
  carritoPanel?.classList.remove('active');
  overlayCarrito?.classList.remove('active');
  document.body.style.overflow = '';
  
  // RESETEAR estilos inline
  if (carritoPanel) {
    carritoPanel.style.transform = '';
    carritoPanel.style.right = '';
  }
}

console.log('✅ carrito.js cargado correctamente');