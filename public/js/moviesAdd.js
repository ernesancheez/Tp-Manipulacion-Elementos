console.log('moviesAdd succes');

let h1 = document.querySelector('h1');
//lo hice con querySelector(etiqueta), porque no hay mas de una si no aclaraba .etiqueta
let section = document.querySelector('section');
let article = document.querySelector('article');

h1.innerText = "AGREGAR PELÍCULAS";
h1.classList.add('titulo');
article.classList.add('fondoTransparente');
section.classList.add('fondoCRUD');