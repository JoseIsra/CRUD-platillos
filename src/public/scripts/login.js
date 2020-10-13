
const cajaModal = document.querySelector('.cajaModal');
const btnModal = document.querySelector('.btn-modal');



btnModal.addEventListener('click', (e)=>{
    if(e.target.id == "activa-modal"){
        cajaModal.style.left = '0';
    }
});

cajaModal.addEventListener('click', (e)=>{
if(e.target.className == "cajaModal"){
    cajaModal.style.left = '100%';    
} 

});