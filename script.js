activeClock = () => {
    const data = new Date()
    
    const dia = data.getDay()
    let hora = data.getHours()
    let minuto = data.getMinutes() 
    const segundo = data.getSeconds()

    const semana = ['DOM','SEG','TER','QUA','QUI','SEX','SAB']
    let diaString = semana[dia]

    hora = hora < 10 ? '0' + hora : hora
    minuto = minuto < 10 ? '0' + minuto : minuto

  
    const ampmIndex = document.querySelector('#ampm')
    let ampm = hora > 12 ? 'PM' : 'AM'
    
    const diaIndex = document.querySelector('#dia')
    const horaIndex = document.querySelector('#hora')
    diaIndex.innerHTML = diaString
    horaIndex.innerHTML = `${hora}:${minuto}:${segundo}`
    ampmIndex.innerHTML = ampm

    let body = document.body
    let container = document.querySelector('.container')
    if(hora > 12){
        body.style.backgroundImage = 'url(img/tarde.jpg)'
        container.style.backgroundColor = 'rgba(163, 90, 6, 0.342)'
    }
    if(hora > 18){
        body.style.backgroundImage = 'url(img/noite.jpg)'
        container.style.backgroundColor = 'rgba(7, 7, 7, 0.866)'
    }
    
    setTimeout(activeClock,1000)
}
window.onload = activeClock()

