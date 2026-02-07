// index-productos.js - Carga automática de productos más vendidos en el INDEX

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("productos-ofertas");
  
  if (!contenedor) {
    console.error('❌ No se encontró el contenedor #productos-ofertas');
    return;
  }

  if (typeof PRODUCTOS === 'undefined') {
    console.error('❌ PRODUCTOS no está definido');
    return;
  }

  // 🔥 FILTRAR PRODUCTOS MÁS VENDIDOS
  const masVendidos = PRODUCTOS.filter(p => p.masVendido === true);

  if (masVendidos.length === 0) {
    console.warn('⚠️ No hay productos marcados como más vendidos');
    contenedor.innerHTML = '<p style="color: white; text-align: center; padding: 50px;">No hay productos destacados en este momento</p>';
    return;
  }

  console.log(`✅ Mostrando ${masVendidos.length} productos más vendidos`);

  // 🎯 RENDERIZAR PRODUCTOS (SOLO UNA IMAGEN)
  contenedor.innerHTML = masVendidos.map(p => `
    <div>
      <a href="producto.html?id=${p.id}" class="producto-oferta">
        <div class="producto-img">
          <img src="${p.imgNormal}" alt="${p.nombre}">
          ${p.stock === 0 ? '<div class="agotado-franja">AGOTADO</div>' : ''}
        </div>
        <h3>${p.nombre}</h3>
        <p class="precio-oferta">$${p.precio.toLocaleString("es-CO")} COP</p>
      </a>
    </div>
  `).join("");
});