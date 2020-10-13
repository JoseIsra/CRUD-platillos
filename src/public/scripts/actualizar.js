
const form = document.querySelector('form');
const tarjeta = document.querySelector('.tarjeta');



form.addEventListener('submit', async(e)=>{
e.preventDefault();
const formData = new FormData(form);
const platoNombre = formData.get('nombre');
const respuesta = await fetch(`/platos/ver?nombre=${platoNombre}`);
const platillo = await respuesta.json();
mostrar(platillo[0]);
});

function mostrar(platillo){
    //encabezado
    tarjeta.innerHTML = '';
    let titulo = document.createElement('h2');
    titulo.textContent = `${platillo.nombre};`

    //cuerpo de formulario
    let formulario = document.createElement('form');

    let labelPlato = document.createElement('label');
    labelPlato.textContent = "Cambiar nombre "
    let nombreDePlato = document.createElement('input');
    nombreDePlato.name="nombre"
    nombreDePlato.value = `${platillo.nombre}`;
    //info del plato
    let ingredientes = document.createElement('textarea');
    ingredientes.setAttribute('rows',4);
    ingredientes.setAttribute('cols',20);
    ingredientes.name = "ingredientes";
    ingredientes.value = `${platillo.ingredientes}`;

    let descripcion = document.createElement('textarea');
    descripcion.setAttribute('rows',4);
    descripcion.setAttribute('cols',20);
    descripcion.name="descripcion";
    descripcion.value = `${platillo.descripcion}`

formulario.appendChild(labelPlato);
formulario.appendChild(nombreDePlato);
formulario.appendChild(ingredientes);
formulario.appendChild(descripcion);

tarjeta.appendChild(titulo);
tarjeta.appendChild(formulario);

}




