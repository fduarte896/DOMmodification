//Se deben crear variables que representen los selectores que se van a modificar del DOM!

/*querySelector permite seleccionar elementos de HTML por medio de selectores de CSS. 
Se pueden usar IDs o Clases, aunque también el tipo de etiqueta como en este caso que es h1*/

/*innerHTML nos permite modificar el html que haya dentro de la etiqueta en cuestión, agregando no solo texto
sino también html como tal, es decir que podemos agregar etiquetas!

h1.innerHTML = "Algún texto <br> raro";

//En este caso solo agregamos texto, lo cual protege contra ataques de gente que quiera meter HTML malicioso
h1.innerText = "Esto es solo texto"; 

//setAttribute nos permite definir cuál va a ser el nuevo atributo, que en este caso es la clase y se va a llamar rojo
h1.setAttribute("class", "rojo");

//classList.add permite no editar sino AGREGAR nuevas clases a la etiqueta.
h1.classList.add("amarillo");
//Remueve la clase que queramos.
h1.classList.remove("verde");

//Con esto podemos determinar el valor por defecto del input por medio de JS.
input.value = "4466";

/*Si queremos crear contenido dentro del HTML, primero debemos crear la variable. 
Luego podemos insertarle un atributo si queremos, en este caso sería el link de donde puede tomar la imagen. 
const imagen = document.createElement("img");
imagen.setAttribute("src", "./Old_English_Sheepdog_jpg.jpg");
//Después escogemos en qué parte del HTML vamos a insertar este nuevo elemento, en este caso en el párrafo con id o pid:
pid.appendChild(imagen);
*/

//Vamos a iniciar creando los selectores por medio de variables:
const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector(".resultado");
const resultadoPreciso = document.querySelector(".resultadoPreciso");
const form = document.querySelector("#form");


function sumarInputValues(event){
    event.preventDefault();
    const sumaInputs = (parseInt(input1.value) + parseInt(input2.value) );
    resultadoPreciso.innerText = sumaInputs
}

//Acá vamos a escuchar los eventos:

form.addEventListener("submit", sumarInputValues)/*Los paréntesis se omiten porque 
addEventListener ya los pone por defecto.*/

