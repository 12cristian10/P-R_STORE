const productos = [
    {
        id: 1,
        imagen: "images/pan.jpg", 
        nombre: "Pan Bimbo",
        categoria: "Producto perecedero",
        stock: 20,
        precio: "$4.200" 
    },
    { 
        id: 2,
        imagen: "images/leche.jpeg",
        nombre: "Leche colanta",
        categoria: "Bebida lactea",
        stock: 15,
        precio: "$3.400" 
    },
    { 
        id: 3, 
        imagen: "images/arroz.jpg", 
        nombre: "Arroz Diana", categoria: "Producto perecedero", 
        stock: 48, 
        precio: "$2.200" 
    },
    {    id: 4,
        imagen: "images/aceite.jpg",
        nombre: "Aceite vegetal",
        categoria: "Producto no perecedero",
        stock: 12,
        precio: "$2.700"
      },
      {
        id: 5,
        imagen: "images/sal.jpeg",
        nombre: "Sal Refisal",
        categoria: "Producto no perecedero",
        stock: 23,
        precio: "$1200"
      },
      {
        id: 6,
        imagen: "images/azucar.jpg",
        nombre: "Azucar Manuelita",
        categoria: "Producto no perecedero",
        stock: 50,
        precio: "$2.000"
      },
      {
        id: 7,
        imagen: "images/manzana.jpg",
        nombre: "Manzana",
        categoria: "Fruta",
        stock: 9,
        precio: "$1.900"
      },
      {
        id: 8,
        imagen: "images/piña.jpeg",
        nombre: "Piña",
        categoria: "Fruta",
        stock: 5,
        precio: "$3.300"
      },
      {
        id: 9,
        imagen: "images/papa.png",
        nombre: "Papa",
        categoria: "Tuberculo",
        stock: 56,
        precio: "$4.000"
      },
      {
        id: 10,
        imagen: "images/zanahoria.jpg",
        nombre: "Zanahoria",
        categoria: "Verdura",
        stock: 14,
        precio: "$1300"
      },
      {
        id: 11,
        imagen: "images/cebolla.jpg",
        nombre: "Cebolla",
        categoria: "Verdura",
        stock: 16,
        precio: "$700"
      },
      {
        id: 12,
        imagen: "images/tomate.jpg",
        nombre: "Tomate",
        categoria: "Verdura",
        stock: 10,
        precio: "$700"
      },
      {
        id: 13,
        imagen: "images/salchichon.jpg",
        nombre: "Salchichon zenu",
        categoria: "Embutido",
        stock: 17,
        precio: "$4800"
      },
      {
        id: 14,
        imagen: "images/harina.jpeg",
        nombre: "Harina de trigo",
        categoria: "Producto no perecedero",
        stock: 8,
        precio: "$2.400"
      },
      {
        id: 15,
        imagen: "images/platano.jpg",
        nombre: "Platanito",
        categoria: "Fruta",
        stock: 30,
        precio: "$500"
      },
      {
        id: 16,
        imagen: "images/ajo.jpg",
        nombre: "Cabeza de ajo",
        categoria: "Producto no perecedero",
        stock: 30,
        precio: "$2.500"
      },
      {
        id: 17,
        imagen: "images/frijol.jpg",
        nombre: "Frijoles",
        categoria: "Legumbre",
        stock: 20,
        precio: "$1.800"
      },
      {
        id: 18,
        imagen: "images/cafe.jpg",
        nombre: "Café Sello rojo",
        categoria: "Bebida",
        stock: 15,
        precio: "$4.000"
      },
      {
        id: 19,
        imagen: "images/panela.jpg",
        nombre: "Panela",
        categoria: "Producto no perecedero",
        stock: 10,
        precio: "$2.200"
      },
      {
        id: 20,
        imagen: "images/galleta.jpg",
        nombre: "Galletas Festival",
        categoria: "Producto no perecedero",
        stock: 25,
        precio: "$1.500"
      },
      {
        id: 21,
        imagen: "images/chocolate.jpg",
        nombre: "Chocolate Jumbo",
        categoria: "Dulce",
        stock: 18,
        precio: "$2.800"
      },
      {
        id: 22,
        imagen: "images/arepa.jpg",
        nombre: "Arepas",
        categoria: "Hariana",
        stock: 14,
        precio: "$1.200"
      },
      {
        id: 23,
        imagen: "images/leche-polvo.jpg",
        nombre: "Leche en polvo",
        categoria: "Producto lacteo",
        stock: 8,
        precio: "$3.600"
      },
      {
        id: 24,
        imagen: "images/salsa-tomate.jpg",
        nombre: "Salsa de tomate",
        categoria: "Salsa",
        stock: 22,
        precio: "$1.700"
      },
      {
        id: 25,
        imagen: "images/detergente.jpg",
        nombre: "Detergente",
        categoria: "Aseo",
        stock: 12,
        precio: "$2.900"
      }
  ];
  
  
  const tabla = document.getElementById("tabla-productos");
  
  
  productos.forEach((producto) => {
    const row = document.createElement("tr");
    row.setAttribute('id',producto.id);
    row.innerHTML = `
      <td id="product_data">${producto.id}</td>
      <td id="product_data"><img src="${producto.imagen}" alt="Imagen"></td>
      <td id="product_data">${producto.nombre}</td>
      <td id="product_data">${producto.categoria}</td>
      <td id="product_data">${producto.stock}</td>
      <td id="product_data">${producto.precio}</td>
    `;
    tabla.querySelector("tbody").appendChild(row);
  });
  

