const cardPuntuacion = document.querySelector(".card-puntuacion")
const submit = document.querySelector(".card-button")
const feedback = document.querySelector(".feedback")

let numeroSeleccionado = 0

cardPuntuacion.addEventListener("click", e => {
    if(e.target.classList.contains("circle")){
        circleActivo = cardPuntuacion.querySelector(".activo")
        circleActivo !== null ? circleActivo.classList.remove("activo") : ""
        e.target.classList.add("activo")
        numeroSeleccionado = e.target.textContent
    }
})

submit.addEventListener("click", e => {
    const mensaje = document.createElement("P")
    mensaje.classList.add("centrar", "card-info")

    
    circleActivo = cardPuntuacion.querySelector(".activo")
    body = cardPuntuacion.parentElement.parentElement.querySelector(".centrar")
    
    if(circleActivo !== null){
        body !== null ? body.remove() : ""
        const feedbackDisplay = feedback.querySelector(".card-title")

        feedback.classList.remove("hidden")
        cardPuntuacion.parentElement.classList.add("hidden")
        mensaje.textContent = `You selected ${numeroSeleccionado} out 5`
        feedback.insertBefore(mensaje, feedbackDisplay)
    }else{
        if(body === null){
            mensaje.textContent = "Seleccione por lo menos un número"
            cardPuntuacion.parentElement.parentElement.insertBefore(mensaje, feedback)
            setTimeout(() => {
                mensaje.remove()
            }, 3000);
        }
    }
})