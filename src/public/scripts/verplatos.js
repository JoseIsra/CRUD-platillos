const botonInicio = document.querySelector('#thebtn');

const contenedorDePlatos = document.querySelector('.contenedor_platos');
const botonesDeControl = document.querySelectorAll('.btn-accion');


let numeroDeCarta = 0;




botonInicio.addEventListener('click', async()=>{
    contenedorDePlatos.innerHTML = '';

        const respuesta = await fetch("/lista/platos");
        const platos = await respuesta.json();
        
        
        contenedorDePlatos.innerHTML = platos.reduce((html,plato,indice)=>{
            return html +
            `<div class="plato">
            <h2>PLATILLO</h2>
            <p>${plato.platillo}</p>  
            <div class="info">
            <label>INGREDIENTES</label>
            <textarea cols=22 rows=4>${plato.ingredientes}</textarea>               
            </div>           
            <div class="info">
            <label>DESCRIPCIÓN</label>
            <textarea cols=22 rows=4>${plato.descripcion}</textarea>               
            </div>           
            <div class="indice">
            <p>${indice+1}</p>
            </div>
            </div>`;
        },'');
        
        verCarta(1);

    
});

botonesDeControl.forEach(btn => btn.addEventListener('click', (e)=>{
    const conte = e.target;
    const valor = conte.dataset;
    valor.accion=="avanzar" ? empujarCarta(1) :empujarCarta(-1);
}));


function empujarCarta(unaCarta){
    verCarta(numeroDeCarta += unaCarta);

} 
function verCarta(estaCarta){
    const cartas = document.querySelectorAll('.plato');
    cartas.forEach(carta => carta.style.display = 'none');
    
    if(estaCarta == 1){numeroDeCarta = 1}
    if(estaCarta > cartas.length) {numeroDeCarta = 1}
    if(estaCarta < 1) {numeroDeCarta = cartas.length}
    cartas[numeroDeCarta-1].style.display ='block';
}

