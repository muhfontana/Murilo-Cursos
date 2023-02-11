function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    //var hora = data.getHours()
    var min = data.getMinutes()
    var hora = 14
    msg.innerHTML = `Agora sao ${hora}:${min}`

    if (hora >= 0 && hora < 12) {
        img.src='manha.png'
        document.body.style.background = '#F5DEB3'
    }
    else if (hora >= 12 && hora <= 18) {
        img.src='tarde.png'
        document.body.style.background = '#FFA07A'
    } else {
        img.src='noite.png'  
        document.body.style.background = '#000033'
    }
}