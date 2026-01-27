// productos-data.js - Base de datos de productos

const PRODUCTOS = [
  {
    id: 1,
    nombre: "CORINTHIANS",
    precio: 45000,
    imgNormal: "Imagenes/Corinthians.png",
    imgHover: "Imagenes/Corinthians2.png",
    imagenes: [
      "Imagenes/Corinthians.png",
      "Imagenes/Corinthians2.png"
    ],
    descripcion: [
      "Diseño brasileño auténtico",
      "Material de alta calidad",
      "Ajuste deportivo",
      "Colores oficiales"
    ],
    categoria: "nacionalidades",
    stock: 40
  },
  {
    id: 2,
    nombre: "LIVERPOOL",
    precio: 45000,
    imgNormal: "Imagenes/Liverpool.png",
    imgHover: "Imagenes/Liverpool2.png",
    imagenes: [
      "Imagenes/Liverpool.png",
      "Imagenes/Liverpool2.png"
    ],
    descripcion: [
      "Estilo clásico inglés",
      "Tela de alta tecnología",
      "Ventilación optimizada",
      "Resistente al desgaste"
    ],
    categoria: "clubes",
    stock: 35
  },
  {
    id: 3,
    nombre: "ALEMANIA",
    precio: 45000,
    imgNormal: "Imagenes/Alemania.png",
    imgHover: "Imagenes/Alemania2.png",
    imagenes: [
      "Imagenes/Alemania.png",
      "Imagenes/Alemania2.png"
    ],
    descripcion: [
      "Corte moderno",
      "Colores originales",
      "Tela transpirable",
      "Diseño auténtico"
    ],
    categoria: "clubes",
    stock: 30
  },
  {
    id: 4,
    nombre: "MANCHESTER CITY",
    precio: 45000,
    imgNormal: "Imagenes/Manchestercity.png",
    imgHover: "Imagenes/Manchestercity2.png",
    imagenes: [
      "Imagenes/Manchestercity.png",
      "Imagenes/Manchestercity2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "clubes",
    stock: 25
  },
  {
    id: 5,
    nombre: "MANCHESTER UNITED",
    precio: 45000,
    imgNormal: "Imagenes/Manchesterunited.png",
    imgHover: "Imagenes/Manchesterunited2.png",
    imagenes: [
      "Imagenes/Manchesterunited.png",
      "Imagenes/Manchesterunited2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "clubes",
    stock: 25
  },
  {
    id: 6,
    nombre: "AJAX",
    precio: 45000,
    imgNormal: "Imagenes/Ajax.png",
    imgHover: "Imagenes/Ajax2.png",
    imagenes: [
      "Imagenes/Ajax.png",
      "Imagenes/Ajax2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "clubes",
    stock: 25
  },
  {
    id: 7,
    nombre: "BARCELONA",
    precio: 45000,
    imgNormal: "Imagenes/Barcelona.png",
    imgHover: "Imagenes/Barcelona2.png",
    imagenes: [
      "Imagenes/Barcelona.png",
      "Imagenes/Barcelona2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "clubes",
    stock: 25
  },
  {
    id: 8,
    nombre: "BAYERN MUNICH",
    precio: 45000,
    imgNormal: "Imagenes/Bayern.png",
    imgHover: "Imagenes/Bayern2.png",
    imagenes: [
      "Imagenes/Bayern.png",
      "Imagenes/Bayern2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "clubes",
    stock: 25
  },
  {
    id: 9,
    nombre: "BOCA JUNIORS",
    precio: 45000,
    imgNormal: "Imagenes/Boca.png",
    imgHover: "Imagenes/Boca2.png",
    imagenes: [
      "Imagenes/Boca.png",
      "Imagenes/Boca2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "nacionalidades",
    stock: 25
  },
  {
    id: 10,
    nombre: "MANCHESTER CITY",
    precio: 45000,
    imgNormal: "Imagenes/Manchestercityvisitante.png",
    imgHover: "Imagenes/Manchestercityvisitante2.png",
    imagenes: [
      "Imagenes/Manchestercityvisitante.png",
      "Imagenes/Manchestercityvisitante2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "clubes",
    stock: 25
  },
  {
    id: 11,
    nombre: "JUVENTUS",
    precio: 45000,
    imgNormal: "Imagenes/Juventus.png",
    imgHover: "Imagenes/Juventus2.png",
    imagenes: [
      "Imagenes/Juventus.png",
      "Imagenes/Juventus2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "clubes",
    stock: 25
  },
  {
    id: 12,
    nombre: "BORUSIA DORMUNT",
    precio: 45000,
    imgNormal: "Imagenes/Borusia.png",
    imgHover: "Imagenes/Borusia2.png",
    imagenes: [
      "Imagenes/Borusia.png",
      "Imagenes/Borusia2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "clubes",
    stock: 25
  },
  {
    id: 13,
    nombre: "ATLETICO MINEIRO",
    precio: 45000,
    imgNormal: "Imagenes/Mineiro.png",
    imgHover: "Imagenes/Mineiro2.png",
    imagenes: [
      "Imagenes/Mineiro.png",
      "Imagenes/Mineiro2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "nacionalidades",
    stock: 25
  },
  {
    id: 14,
    nombre: "INTER DE MILAN",
    precio: 45000,
    imgNormal: "Imagenes/Inter.png",
    imgHover: "Imagenes/Inter2.png",
    imagenes: [
      "Imagenes/Inter.png",
      "Imagenes/Inter2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "clubes",
    stock: 25
  },
  {
    id: 15,
    nombre: "JUVENTUS",
    precio: 45000,
    imgNormal: "Imagenes/Juventusantes.png",
    imgHover: "Imagenes/Juventusantes2.png",
    imagenes: [
      "Imagenes/Juventusantes.png",
      "Imagenes/Juventusantes2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "clubes",
    stock: 25
  },
  {
    id: 16,
    nombre: "LIVERPOOL",
    precio: 45000,
    imgNormal: "Imagenes/Liverpoolotra.png",
    imgHover: "Imagenes/Liverpoolotra2.png",
    imagenes: [
      "Imagenes/Liverpoolotra.png",
      "Imagenes/Liverpoolotra2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "clubes",
    stock: 25
  },
  {
    id: 17,
    nombre: "BAYERN MUNICH",
    precio: 45000,
    imgNormal: "Imagenes/Bayernotra.png",
    imgHover: "Imagenes/Bayernotra2.png",
    imagenes: [
      "Imagenes/Bayernotra.png",
      "Imagenes/Bayernotra2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "clubes",
    stock: 25
  },
  {
    id: 18,
    nombre: "BOCA JUNIORS",
    precio: 45000,
    imgNormal: "Imagenes/Bocaotra.png",
    imgHover: "Imagenes/Bocaotra2.png",
    imagenes: [
      "Imagenes/Bocaotra.png",
      "Imagenes/Bocaotra2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "nacionalidades",
    stock: 25
  },
  {
    id: 19,
    nombre: "RIVER PLATE",
    precio: 45000,
    imgNormal: "Imagenes/River.png",
    imgHover: "Imagenes/River2.png",
    imagenes: [
      "Imagenes/River.png",
      "Imagenes/River2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "nacionalidades",
    stock: 25
  },
  {
    id: 20,
    nombre: "MANCHESTER UNITED",
    precio: 45000,
    imgNormal: "Imagenes/Manchesterunitedotra.png",
    imgHover: "Imagenes/Manchesterunitedotra2.png",
    imagenes: [
      "Imagenes/Manchesterunitedotra.png",
      "Imagenes/Manchesterunitedotra2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "clubes",
    stock: 25
  },
  {
    id: 21,
    nombre: "PSG",
    precio: 45000,
    imgNormal: "Imagenes/Psg.png",
    imgHover: "Imagenes/Psg2.png",
    imagenes: [
      "Imagenes/Psg.png",
      "Imagenes/Psg2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "clubes",
    stock: 25
  },
  {
    id: 22,
    nombre: "NAPOLI",
    precio: 45000,
    imgNormal: "Imagenes/Napoli.png",
    imgHover: "Imagenes/Napoli2.png",
    imagenes: [
      "Imagenes/Napoli.png",
      "Imagenes/Napoli2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "clubes",
    stock: 25
  },
  {
    id: 23,
    nombre: "LIVERPOOL",
    precio: 45000,
    imgNormal: "Imagenes/Liverpoolvisitante.png",
    imgHover: "Imagenes/Liverpoolvisitante2.png",
    imagenes: [
      "Imagenes/Liverpoolvisitante.png",
      "Imagenes/Liverpoolvisitante2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "clubes",
    stock: 25
  },
  {
    id: 24,
    nombre: "PORTUGAL",
    precio: 45000,
    imgNormal: "Imagenes/Portugal.png",
    imgHover: "Imagenes/Portugal2.png",
    imagenes: [
      "Imagenes/Portugal.png",
      "Imagenes/Portugal2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "clubes",
    stock: 25
  },
  {
    id: 25,
    nombre: "MANCHESTER CITY",
    precio: 45000,
    imgNormal: "Imagenes/Manchestercityotra.png",
    imgHover: "Imagenes/Manchestercityotra2.png",
    imagenes: [
      "Imagenes/Manchestercityotra.png",
      "Imagenes/Manchestercityotra2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "clubes",
    stock: 25
  },
  {
    id: 26,
    nombre: "BOCA JUNIORS",
    precio: 45000,
    imgNormal: "Imagenes/Bocajr.png",
    imgHover: "Imagenes/Bocajr2.png",
    imagenes: [
      "Imagenes/Bocajr.png",
      "Imagenes/Bocajr2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "nacionalidades",
    stock: 25
  },
  {
    id: 27,
    nombre: "REAL MADRID",
    precio: 45000,
    imgNormal: "Imagenes/Real.png",
    imgHover: "Imagenes/Real2.png",
    imagenes: [
      "Imagenes/Real.png",
      "Imagenes/Real2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "clubes",
    stock: 25
  },
  {
    id: 28,
    nombre: "JUVENTUS",
    precio: 45000,
    imgNormal: "Imagenes/Juve.png",
    imgHover: "Imagenes/Juve2.png",
    imagenes: [
      "Imagenes/Juve.png",
      "Imagenes/Juve2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "clubes",
    stock: 25
  },
  {
    id: 29,
    nombre: "NAPOLI",
    precio: 45000,
    imgNormal: "Imagenes/Napoliotra.png",
    imgHover: "Imagenes/Napoliotra2.png",
    imagenes: [
      "Imagenes/Napoliotra.png",
      "Imagenes/Napoliotra2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "clubes",
    stock: 25
  },
  {
    id: 30,
    nombre: "ARSENAL",
    precio: 45000,
    imgNormal: "Imagenes/Arsenal.png",
    imgHover: "Imagenes/Arsenal2.png",
    imagenes: [
      "Imagenes/Arsenal.png",
      "Imagenes/Arsenal2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "clubes",
    stock: 25
  },
  {
    id: 31,
    nombre: "JUVENTUS",
    precio: 45000,
    imgNormal: "Imagenes/Juventusotra.png",
    imgHover: "Imagenes/Juventusotra2.png",
    imagenes: [
      "Imagenes/Juventusotra.png",
      "Imagenes/Juventusotra2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "clubes",
    stock: 25
  },
  {
    id: 32,
    nombre: "FLAMENGO",
    precio: 45000,
    imgNormal: "Imagenes/Flamengo.png",
    imgHover: "Imagenes/Flamengo2.png",
    imagenes: [
      "Imagenes/Flamengo.png",
      "Imagenes/Flamengo2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "nacionalidades",
    stock: 25
  },
  {
    id: 33,
    nombre: "LIVERPOOL",
    precio: 45000,
    imgNormal: "Imagenes/Liver.png",
    imgHover: "Imagenes/Liver2.png",
    imagenes: [
      "Imagenes/Liver.png",
      "Imagenes/Liver2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "clubes",
    stock: 25
  },
  {
    id: 34,
    nombre: "CHELSEA",
    precio: 45000,
    imgNormal: "Imagenes/Chelsea.png",
    imgHover: "Imagenes/Chelsea2.png",
    imagenes: [
      "Imagenes/Chelsea.png",
      "Imagenes/Chelsea2.png"
    ],
    descripcion: [
      "Diseño contemporáneo",
      "Material premium",
      "Tecnología Dri-FIT",
      "Comodidad superior"
    ],
    categoria: "clubes",
    stock: 25
  }
];

// Función auxiliar para buscar productos
function buscarProducto(id) {
  return PRODUCTOS.find(p => p.id === parseInt(id));
}

// Función auxiliar para filtrar por categoría
function filtrarPorCategoria(categoria) {
  return PRODUCTOS.filter(p => p.categoria === categoria);
}

console.log(`✅ productos-data.js cargado: ${PRODUCTOS.length} productos disponibles`);