
const botonInicio = document.querySelector('#btn-platos');

const contenedorDePlatos = document.querySelector('.contenedor_platos');
const botonesDeControl = document.querySelectorAll('.botones-accion');
const cajaPlatos = document.querySelector('.caja_platos');

let numeroDeCarta = 0;

function esconderElementos(){
    cajaPlatos.style.display = 'none';
}



botonInicio.addEventListener('click', async()=>{

        const respuesta = await fetch("/tarjeta/platos");
        const platos = await respuesta.json();
        
        platos.forEach((plato) => {
             //div para las tarjetas de cada plato
            let platoContenido = document.createElement('div');
            platoContenido.classList.add('carta');

            //titulo del platillo
            let nombreDePlato = document.createElement('h2');
            nombreDePlato.textContent = `${plato.nombre}`;   
            
            //ingredientes del platillo
            let contenedorIngredientes = document.createElement('div');
            let etiquetaIngredientes = document.createElement('label');
            let ingredientes = document.createElement('textarea');
            contenedorIngredientes.classList.add("platoInfo");
            etiquetaIngredientes.textContent = 'INGREDIENTES';
            ingredientes.textContent = `${plato.ingredientes}`;
            contenedorIngredientes.appendChild(etiquetaIngredientes);
            contenedorIngredientes.appendChild(ingredientes);

            //descripcion de platillo
            let contenedorDescripcion = document.createElement('div');
            let etiquetaDescripcion = document.createElement('label');
            let descripcion = document.createElement('textarea');
            contenedorDescripcion.classList.add("platoInfo");
            descripcion.setAttribute('cols','20');
            descripcion.setAttribute('rows','4');
            etiquetaDescripcion.textContent = 'DESCRIPCIÓN';
            descripcion.textContent = `${plato.descripcion}`;
            contenedorDescripcion.appendChild(etiquetaDescripcion);
            contenedorDescripcion.appendChild(descripcion);

            //juntando los elementos
            platoContenido.appendChild(nombreDePlato);
            platoContenido.appendChild(contenedorIngredientes);
            platoContenido.appendChild(contenedorDescripcion);
            contenedorDePlatos.appendChild(platoContenido); 
            });
            cajaPlatos.style.display = '';
        verCarta(1);

    
});

botonesDeControl.forEach(boton => boton.addEventListener('click', (e)=>{
    const elemento = e.target;
    const significadoDe = elemento.dataset;
    significadoDe.accion == "avanzar" ? empujarCartas(1) :empujarCartas(-1);
}));


function empujarCartas(unaCarta){
    verCarta(numeroDeCarta += unaCarta);

} 
function verCarta(estaCarta){
    const cartas = document.querySelectorAll('.carta');
    cartas.forEach(carta => carta.style.display = 'none');
    if(!cartas.length){
        contenedorDePlatos.innerHTML = `
        <h1> NO HAY PLATILLOS </h1>
        `;
    }else{
        if(estaCarta == 1){numeroDeCarta = 1}
        if(estaCarta > cartas.length) {numeroDeCarta = 1}
        if(estaCarta < 1) {numeroDeCarta = cartas.length}
        cartas[numeroDeCarta-1].style.display ='block'; 
    }
}

