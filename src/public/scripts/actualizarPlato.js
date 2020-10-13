
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
    titulo.textContent = `${platillo.nombre}`;

    //cuerpo de formulario
    let formulario = document.createElement('form');
    formulario.action =`/platos/edit/${platillo.id}`;
    formulario.method = "POST";
    let btnForm = document.createElement('button');
    btnForm.type = "submit";
    btnForm.textContent ="EDITAR";
    //nombre del plato
    let cajaNombre = document.createElement('div');
    cajaNombre.classList.add('camposPlato');
    let labelPlato = document.createElement('label');
    labelPlato.textContent = "El plato es"
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
    ingredientes.setAttribute('cols',20);
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
    descripcion.setAttribute('cols',20);
    descripcion.name="descripcion";
    descripcion.value = `${platillo.descripcion}`;

    cajaDescripcion.appendChild(labelDescripcion);
    cajaDescripcion.appendChild(descripcion);

        //enlace 
    let enlaceBorrarPlato = document.createElement('a');
    enlaceBorrarPlato.href =  `/platos/delete/${platillo.id}`;
    enlaceBorrarPlato.text = "BORRAR";

formulario.appendChild(cajaNombre);
formulario.appendChild(cajaIngredientes);
formulario.appendChild(cajaDescripcion);
formulario.appendChild(btnForm);

tarjeta.appendChild(titulo);
tarjeta.appendChild(formulario);
tarjeta.appendChild(enlaceBorrarPlato);

}




