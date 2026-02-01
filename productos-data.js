// productos-data.js - Base de datos de productos

const PRODUCTOS = [
  {
    id: 1,
    nombre: "CORINTHIANS",
    precio: 45000,
    imgNormal: "imagenes/Corinthians.png",
    imgHover: "imagenes/Corinthians2.png",
    imagenes: [
      "imagenes/Corinthians.png",
      "imagenes/Corinthians2.png"
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
    imgNormal: "imagenes/Liverpool.png",
    imgHover: "imagenes/Liverpool2.png",
    imagenes: [
      "imagenes/Liverpool.png",
      "imagenes/Liverpool2.png"
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
    imgNormal: "imagenes/Alemania.png",
    imgHover: "imagenes/Alemania2.png",
    imagenes: [
      "imagenes/Alemania.png",
      "imagenes/Alemania2.png"
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
    imgNormal: "imagenes/Manchestercity.png",
    imgHover: "imagenes/Manchestercity2.png",
    imagenes: [
      "imagenes/Manchestercity.png",
      "imagenes/Manchestercity2.png"
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
    imgNormal: "imagenes/Manchesterunited.png",
    imgHover: "imagenes/Manchesterunited2.png",
    imagenes: [
      "imagenes/Manchesterunited.png",
      "imagenes/Manchesterunited2.png"
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
    imgNormal: "imagenes/Ajax.png",
    imgHover: "imagenes/Ajax2.png",
    imagenes: [
      "imagenes/Ajax.png",
      "imagenes/Ajax2.png"
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
    imgNormal: "imagenes/Barcelona.png",
    imgHover: "imagenes/Barcelona2.png",
    imagenes: [
      "imagenes/Barcelona.png",
      "imagenes/Barcelona2.png"
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
    imgNormal: "imagenes/Bayern.png",
    imgHover: "imagenes/Bayern2.png",
    imagenes: [
      "imagenes/Bayern.png",
      "imagenes/Bayern2.png"
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
    imgNormal: "imagenes/Boca.png",
    imgHover: "imagenes/Boca2.png",
    imagenes: [
      "imagenes/Boca.png",
      "imagenes/Boca2.png"
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
    imgNormal: "imagenes/Manchestercityvisitante.png",
    imgHover: "imagenes/Manchestercityvisitante2.png",
    imagenes: [
      "imagenes/Manchestercityvisitante.png",
      "imagenes/Manchestercityvisitante2.png"
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
    imgNormal: "imagenes/Juventus.png",
    imgHover: "imagenes/Juventus2.png",
    imagenes: [
      "imagenes/Juventus.png",
      "imagenes/Juventus2.png"
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
    imgNormal: "imagenes/Borusia.png",
    imgHover: "imagenes/Borusia2.png",
    imagenes: [
      "imagenes/Borusia.png",
      "imagenes/Borusia2.png"
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
    imgNormal: "imagenes/Mineiro.png",
    imgHover: "imagenes/Mineiro2.png",
    imagenes: [
      "imagenes/Mineiro.png",
      "imagenes/Mineiro2.png"
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
    imgNormal: "imagenes/Inter.png",
    imgHover: "imagenes/Inter2.png",
    imagenes: [
      "imagenes/Inter.png",
      "imagenes/Inter2.png"
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
    imgNormal: "imagenes/Juventusantes.png",
    imgHover: "imagenes/Juventusantes2.png",
    imagenes: [
      "imagenes/Juventusantes.png",
      "imagenes/Juventusantes2.png"
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
    imgNormal: "imagenes/Liverpoolotra.png",
    imgHover: "imagenes/Liverpoolotra2.png",
    imagenes: [
      "imagenes/Liverpoolotra.png",
      "imagenes/Liverpoolotra2.png"
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
    imgNormal: "imagenes/Bayernotra.png",
    imgHover: "imagenes/Bayernotra2.png",
    imagenes: [
      "imagenes/Bayernotra.png",
      "imagenes/Bayernotra2.png"
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
    imgNormal: "imagenes/Bocaotra.png",
    imgHover: "imagenes/Bocaotra2.png",
    imagenes: [
      "imagenes/Bocaotra.png",
      "imagenes/Bocaotra2.png"
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
    imgNormal: "imagenes/River.png",
    imgHover: "imagenes/River2.png",
    imagenes: [
      "imagenes/River.png",
      "imagenes/River2.png"
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
    imgNormal: "imagenes/Manchesterunitedotra.png",
    imgHover: "imagenes/Manchesterunitedotra2.png",
    imagenes: [
      "imagenes/Manchesterunitedotra.png",
      "imagenes/Manchesterunitedotra2.png"
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
    imgNormal: "imagenes/Psg.png",
    imgHover: "imagenes/Psg2.png",
    imagenes: [
      "imagenes/Psg.png",
      "imagenes/Psg2.png"
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
    imgNormal: "imagenes/Napoli.png",
    imgHover: "imagenes/Napoli2.png",
    imagenes: [
      "imagenes/Napoli.png",
      "imagenes/Napoli2.png"
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
    imgNormal: "imagenes/Liverpoolvisitante.png",
    imgHover: "imagenes/Liverpoolvisitante2.png",
    imagenes: [
      "imagenes/Liverpoolvisitante.png",
      "imagenes/Liverpoolvisitante2.png"
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
    imgNormal: "imagenes/Portugal.png",
    imgHover: "imagenes/Portugal2.png",
    imagenes: [
      "imagenes/Portugal.png",
      "imagenes/Portugal2.png"
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
    imgNormal: "imagenes/Manchestercityotra.png",
    imgHover: "imagenes/Manchestercityotra2.png",
    imagenes: [
      "imagenes/Manchestercityotra.png",
      "imagenes/Manchestercityotra2.png"
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
    imgNormal: "imagenes/Bocajr.png",
    imgHover: "imagenes/Bocajr2.png",
    imagenes: [
      "imagenes/Bocajr.png",
      "imagenes/Bocajr2.png"
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
    imgNormal: "imagenes/Real.png",
    imgHover: "imagenes/Real2.png",
    imagenes: [
      "imagenes/Real.png",
      "imagenes/Real2.png"
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
    imgNormal: "imagenes/Juve.png",
    imgHover: "imagenes/Juve2.png",
    imagenes: [
      "imagenes/Juve.png",
      "imagenes/Juve2.png"
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
    imgNormal: "imagenes/Napoliotra.png",
    imgHover: "imagenes/Napoliotra2.png",
    imagenes: [
      "imagenes/Napoliotra.png",
      "imagenes/Napoliotra2.png"
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
    imgNormal: "imagenes/Arsenal.png",
    imgHover: "imagenes/Arsenal2.png",
    imagenes: [
      "imagenes/Arsenal.png",
      "imagenes/Arsenal2.png"
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
    imgNormal: "imagenes/Juventusotra.png",
    imgHover: "imagenes/Juventusotra2.png",
    imagenes: [
      "imagenes/Juventusotra.png",
      "imagenes/Juventusotra2.png"
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
    nombre: "FLUMINENSE",
    precio: 45000,
    imgNormal: "imagenes/Flamengo.png",
    imgHover: "imagenes/Flamengo2.png",
    imagenes: [
      "imagenes/Flamengo.png",
      "imagenes/Flamengo2.png"
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
    imgNormal: "imagenes/Liver.png",
    imgHover: "imagenes/Liver2.png",
    imagenes: [
      "imagenes/Liver.png",
      "imagenes/Liver2.png"
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
    imgNormal: "imagenes/Chelsea.png",
    imgHover: "imagenes/Chelsea2.png",
    imagenes: [
      "imagenes/Chelsea.png",
      "imagenes/Chelsea2.png"
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
    id: 35,
    nombre: "ARGENTINA",
    precio: 50000,
    imgNormal: "imagenes/Argentina.png",
    imgHover: "imagenes/Argentina2.png",
    imagenes: [
      "imagenes/Argentina.png",
      "imagenes/Argentina2.png"
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
    id: 36,
    nombre: "FRANCIA",
    precio: 50000,
    imgNormal: "imagenes/Francia.png",
    imgHover: "imagenes/Francia2.png",
    imagenes: [
      "imagenes/Francia.png",
      "imagenes/Francia2.png"
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
    id: 37,
    nombre: "MANCHESTER CITY RETRO",
    precio: 50000,
    imgNormal: "imagenes/City.png",
    imgHover: "imagenes/City2.png",
    imagenes: [
      "imagenes/City.png",
      "imagenes/City2.png"
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
    id: 38,
    nombre: "PSG RETRO",
    precio: 50000,
    imgNormal: "imagenes/Psgantes.png",
    imgHover: "imagenes/Psgantes2.png",
    imagenes: [
      "imagenes/Psgantes.png",
      "imagenes/Psgantes2.png"
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
    id: 39,
    nombre: "ALEMANIA",
    precio: 45000,
    imgNormal: "imagenes/Alemaniaantes.png",
    imgHover: "imagenes/Alemaniaantes2.png",
    imagenes: [
      "imagenes/Alemaniaantes.png",
      "imagenes/Alemaniaantes2.png"
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
    id: 40,
    nombre: "JUVENTUS",
    precio: 45000,
    imgNormal: "imagenes/Juven.png",
    imgHover: "imagenes/Juven2.png",
    imagenes: [
      "imagenes/Juven.png",
      "imagenes/Juven2.png"
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
    id: 41,
    nombre: "FLAMENGO",
    precio: 45000,
    imgNormal: "imagenes/Flamengoantes.png",
    imgHover: "imagenes/Flamengoantes2.png",
    imagenes: [
      "imagenes/Flamengoantes.png",
      "imagenes/Flamengoantes2.png"
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
    id: 42,
    nombre: "AC MILAN",
    precio: 45000,
    imgNormal: "imagenes/Milan.png",
    imgHover: "imagenes/Milan2.png",
    imagenes: [
      "imagenes/Milan.png",
      "imagenes/Milan2.png"
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


