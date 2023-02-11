var h = new Date()
var hora = h.getHours()
console.log(`Agora sao ${hora} horas`)
if (hora > 0 && hora < 12) {
    console.log('Bom dia!')
}
else if (hora < 19) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}



