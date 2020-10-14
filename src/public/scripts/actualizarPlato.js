
const form = document.querySelector('form');
const tarjeta = document.querySelector('.tarjeta');
const saludo = document.querySelector('#saludo');


form.addEventListener('submit', async(e)=>{
e.preventDefault();
const formData = new FormData(form);
const platoNombre = formData.get('nombre');
const respuesta = await fetch(`/platos/ver?nombre=${platoNombre}`);
const platillo = await respuesta.json();

if(!platillo.length){
    saludo.textContent = "NO HAY ESE PLATO";
}else{
    saludo.style.display = "none";
    tarjeta.style.display = 'block';
    mostrar(platillo[0]);
}
});

function mostrar(platillo){
    //encabezado
    tarjeta.innerHTML = '';
    let titulo = document.createElement('h2');
    titulo.textContent = `${platillo.nombre}`;

    //cuerpo de formulario
    let formulario = document.createElement('form');
    formulario.action =`/platos/edit/${platillo.id}`;
    formulario.method = "POST";
    let btnForm = document.createElement('button');
    btnForm.type = "submit";
    btnForm.textContent ="Guardar cambios";
    //nombre del plato
    let cajaNombre = document.createElement('div');
    cajaNombre.classList.add('camposPlato');
    let labelPlato = document.createElement('label');
    labelPlato.textContent = "Plato"
    let nombreDePlato = document.createElement('input');
    nombreDePlato.name="nombre"
    nombreDePlato.value = `${platillo.nombre}`;
    cajaNombre.appendChild(labelPlato);cajaNombre.appendChild(nombreDePlato);

    //ingredientes del plato
    let cajaIngredientes = document.createElement('div');
    cajaIngredientes.classList.add('camposPlato');
    let labelIngred = document.createElement('p');
    labelIngred.textContent = "INGREDIENTES";
    let ingredientes = document.createElement('textarea');
    ingredientes.setAttribute('rows',4);
    ingredientes.setAttribute('cols',30);
    ingredientes.name = "ingredientes";
    ingredientes.value = `${platillo.ingredientes}`;

    cajaIngredientes.appendChild(labelIngred);
    cajaIngredientes.appendChild(ingredientes);

    //descripcion del plato
let cajaDescripcion = document.createElement('div');
cajaDescripcion.classList.add('camposPlato');
    let labelDescripcion = document.createElement('p');
    labelDescripcion.textContent = "DESCRIPCIÓN";
    let descripcion = document.createElement('textarea');
    descripcion.setAttribute('rows',4);
    descripcion.setAttribute('cols',30);
    descripcion.name="descripcion";
    descripcion.value = `${platillo.descripcion}`;

    cajaDescripcion.appendChild(labelDescripcion);
    cajaDescripcion.appendChild(descripcion);

        //enlace 
    let enlaceBorrarPlato = document.createElement('a');
    enlaceBorrarPlato.href =  `/platos/delete/${platillo.id}`;
    enlaceBorrarPlato.text = "Borrar";

formulario.appendChild(cajaNombre);
formulario.appendChild(cajaIngredientes);
formulario.appendChild(cajaDescripcion);
formulario.appendChild(btnForm);
formulario.appendChild(enlaceBorrarPlato);

tarjeta.appendChild(titulo);
tarjeta.appendChild(formulario);

}




