const circulos = document.querySelectorAll(".circle");
const ventana  = document.querySelector('body'); 
const boton = document.querySelector('.card-button').getAttribute('class')
const card = document.querySelector('.card')
const cardTitleMargin = document.querySelector('.card-title-margin')
const info = document.querySelector('.feedback')
let puntuacion = 0;
ventana.addEventListener('click', e => {
    if(e.target.getAttribute('class') === 'circle'){
        itemActivo(e);
    } 
    if(e.target.getAttribute('class') === boton){
        feedback();
    }
});

function itemActivo(e){
    circulos.forEach(identificador => {
        if(identificador.getAttribute('id') === e.target.getAttribute('id')){
            identificador.classList.add('activo');
            puntuacion = identificador.textContent;
        }else{
            identificador.classList.remove('activo');
        }
    })
}

function feedback(){
    card.classList.add('hidden');
    info.classList.remove('hidden');
    let p = document.createElement("p");
    p.classList = 'card-info'
    p.innerText = `You selected ${puntuacion} out of 5`;
    info.insertBefore(p, cardTitleMargin)
}