// URL de Google Sheets (la misma del sistema)
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbyXdPA1QELZJkKCLsO9HtaE4A4teJnVJXe2WX4b9LfA4NIeM3PiiBQLW8DGf61a7zE7/exec';

// Obtener datos del pedido
const pedido = JSON.parse(localStorage.getItem("pedido_activo"));
const estampados = [];

// Si no hay pedido, redirigir
if (!pedido) {
  alert("No hay un pedido activo. Redirigiendo...");
  window.location.href = "index.html";
}

// Referencias a elementos
const inputName = document.getElementById("inputName");
const inputNumber = document.getElementById("inputNumber");
const inputTalla = document.getElementById("inputTalla");
const shirtName = document.getElementById("shirt-name");
const shirtNumber = document.getElementById("shirt-number");
const guardarBtn = document.getElementById("guardarBtn");
const finalizarBtn = document.getElementById("finalizarBtn");
const listaEstampados = document.getElementById("listaEstampados");
const cantidadGuardadas = document.getElementById("cantidadGuardadas");

// Cargar información del pedido
document.getElementById("pedidoNumero").textContent = pedido.numeroPedido;
document.getElementById("pedidoCliente").textContent = pedido.cliente;
document.getElementById("pedidoCantidad").textContent = pedido.cantidad;
document.getElementById("totalCamisetas").textContent = pedido.cantidad;

// Actualizar preview en tiempo real
inputName.addEventListener("input", () => {
  const nombre = inputName.value.toUpperCase();
  shirtName.textContent = nombre || "NOMBRE";
});

inputNumber.addEventListener("input", () => {
  const numero = inputNumber.value;
  shirtNumber.textContent = numero || "00";
});

// Función para actualizar la lista visual
function actualizarListaEstampados() {
  cantidadGuardadas.textContent = estampados.length;

  if (estampados.length === 0) {
    listaEstampados.innerHTML = '<div class="saved-empty">Aún no has guardado ninguna camiseta</div>';
    return;
  }

  listaEstampados.innerHTML = estampados.map((estampado, index) => `
    <div class="saved-item">
      <span class="saved-item-text">${estampado.nombre} #${estampado.numero}</span>
      <span class="saved-item-size">Talla: ${estampado.talla}</span>
      <button class="saved-item-delete" onclick="eliminarEstampado(${index})">×</button>
    </div>
  `).join('');

  // Habilitar botón finalizar si se completaron todas
  if (estampados.length === pedido.cantidad) {
    finalizarBtn.disabled = false;
  }
}

// Función para eliminar un estampado
window.eliminarEstampado = function(index) {
  estampados.splice(index, 1);
  actualizarListaEstampados();
};

// Guardar camiseta
guardarBtn.addEventListener("click", () => {
  if (estampados.length >= pedido.cantidad) {
    alert("Ya completaste todas las camisetas del pedido");
    return;
  }

  const nombre = inputName.value.trim().toUpperCase();
  const numero = inputNumber.value.trim();
  const talla = inputTalla.value;

  // Validaciones
  if (!nombre) {
    alert("Por favor ingresa un nombre");
    inputName.focus();
    return;
  }

  if (!numero) {
    alert("Por favor ingresa un número");
    inputNumber.focus();
    return;
  }

  if (numero < 0 || numero > 99) {
    alert("El número debe estar entre 0 y 99");
    inputNumber.focus();
    return;
  }

  if (!talla) {
    alert("Por favor selecciona una talla");
    inputTalla.focus();
    return;
  }

  // Guardar estampado con talla
  estampados.push({
    nombre: nombre,
    numero: numero,
    talla: talla
  });
  
  actualizarListaEstampados();

  // Limpiar campos
  inputName.value = "";
  inputNumber.value = "";
  inputTalla.value = "";
  shirtName.textContent = "NOMBRE";
  shirtNumber.textContent = "00";
  
  // Foco al nombre para siguiente
  inputName.focus();

  // Mostrar mensaje de éxito
  mostrarMensaje("✓ Camiseta guardada correctamente");
});

// Finalizar personalización
finalizarBtn.addEventListener("click", async () => {
  // Verificar que se hayan personalizado todas las camisetas
  if (estampados.length < pedido.cantidad) {
    const faltantes = pedido.cantidad - estampados.length;
    const confirmar = confirm(`Faltan ${faltantes} camiseta(s) por personalizar. ¿Deseas continuar de todas formas?`);
    if (!confirmar) return;
  }

  try {
    finalizarBtn.disabled = true;
    finalizarBtn.textContent = "ENVIANDO...";

    // Formatear estampados para enviar (cada uno en una línea)
    const estampadosTexto = estampados.map(e => 
      `${e.nombre} #${e.numero} - Talla ${e.talla}`
    ).join("\n");

    // Preparar datos para enviar
    const dataParaEnviar = {
      numeroPedido: pedido.numeroPedido,
      cliente: pedido.cliente,
      estampados: estampadosTexto,
      cantidadPersonalizada: estampados.length,
      cantidadTotal: pedido.cantidad
    };

    console.log("📤 Enviando a Google Sheets:", dataParaEnviar);

    // Método 1: Intentar con fetch normal
    try {
      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataParaEnviar),
        mode: 'no-cors'
      });

      console.log("✅ Solicitud enviada con éxito");
      
    } catch (fetchError) {
      console.warn("⚠️ Error con fetch, intentando método alternativo:", fetchError);
      
      // Método 2: Usar formulario como respaldo
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = GOOGLE_SHEETS_URL;
      form.target = 'hidden_iframe';
      form.style.display = 'none';
      
      // Crear iframe oculto
      let iframe = document.getElementById('hidden_iframe');
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'hidden_iframe';
        iframe.name = 'hidden_iframe';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
      }
      
      // Agregar campos
      Object.keys(dataParaEnviar).forEach(key => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = dataParaEnviar[key];
        form.appendChild(input);
      });
      
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);
      
      console.log("✅ Datos enviados por formulario");
    }

    // Esperar un momento para que se procese
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log("✅ Personalización completada");

    // Guardar datos para la página de confirmación existente
    const pedidoConfirmacion = {
      numeroPedido: pedido.numeroPedido,
      nombre: pedido.cliente,
      telefono: "", // Si tienes el teléfono, agrégalo aquí
      estampados: estampados.map(e => `${e.nombre} #${e.numero} - Talla ${e.talla}`).join(", "),
      cantidadPersonalizada: estampados.length,
      cantidadTotal: pedido.cantidad
    };
    
    localStorage.setItem("ultimo_pedido", JSON.stringify(pedidoConfirmacion));

    // Limpiar pedido activo
    localStorage.removeItem("pedido_activo");

    // Redirigir a página de confirmación
    window.location.href = "Confirmacion.html";

  } catch (error) {
    console.error("❌ Error al enviar estampados:", error);
    alert("Ocurrió un error al enviar la personalización. Por favor intenta nuevamente o contacta al administrador.");
    finalizarBtn.disabled = false;
    finalizarBtn.textContent = "FINALIZAR PERSONALIZACIÓN";
  }
});

// Función auxiliar para mostrar mensajes
function mostrarMensaje(texto) {
  const mensaje = document.createElement("div");
  mensaje.textContent = texto;
  mensaje.style.cssText = `
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: #040304;
    color: #fff;
    padding: 16px 32px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 14px;
    z-index: 10000;
    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
    animation: slideDown 0.3s ease;
  `;
  
  document.body.appendChild(mensaje);
  
  setTimeout(() => {
    mensaje.style.animation = "slideUp 0.3s ease";
    setTimeout(() => mensaje.remove(), 300);
  }, 2000);
}

// Añadir animaciones
const style = document.createElement('style');
style.textContent = `
  @keyframes slideDown {
    from {
      transform: translateX(-50%) translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
  }
  
  @keyframes slideUp {
    from {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
    to {
      transform: translateX(-50%) translateY(-20px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Inicializar lista vacía
actualizarListaEstampados();

// Deshabilitar botón finalizar al inicio
finalizarBtn.disabled = true;