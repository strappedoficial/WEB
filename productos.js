document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("catalog-products");
  if (!contenedor) return;

  if (typeof PRODUCTOS === 'undefined') {
    console.error('❌ PRODUCTOS no está definido');
    return;
  }

  // 🔥 DETECCIÓN AUTOMÁTICA DE PÁGINA
  const paginaActual = window.location.pathname.split('/').pop();
  let productosFiltrados = PRODUCTOS;

  // Filtrar según el archivo HTML actual
  if (paginaActual === 'Clubes.html') {
    productosFiltrados = PRODUCTOS.filter(p => p.categoria === 'clubes');
    console.log(`📂 Mostrando ${productosFiltrados.length} productos de CLUBES`);
  } 
  else if (paginaActual === 'Nacionalidades.html') {
    productosFiltrados = PRODUCTOS.filter(p => p.categoria === 'nacionalidades');
    console.log(`📂 Mostrando ${productosFiltrados.length} productos de NACIONALIDADES`);
  }
  else if (paginaActual === 'Catalogo.html') {
    // No filtrar, mostrar todos
    console.log(`📂 Mostrando TODOS los ${productosFiltrados.length} productos`);
  }

  // Renderizar productos
  if (productosFiltrados.length === 0) {
    contenedor.innerHTML = '<p style="color: white; text-align: center; padding: 50px;">No hay productos en esta categoría</p>';
    return;
  }

  contenedor.innerHTML = productosFiltrados.map(p => `
    <a href="producto.html?id=${p.id}" class="catalog-product">
      <div class="producto-img">
        <img src="${p.imgNormal}">
        <img src="${p.imgHover}">
      </div>
      <h3>${p.nombre}</h3>
      <p class="precio-oferta">
        $${p.precio.toLocaleString("es-CO")} COP
      </p>
    </a>
  `).join("");
});
