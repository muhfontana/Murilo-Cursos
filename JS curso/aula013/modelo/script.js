function load(){
    var nascimento = window.document.querySelector('input#nascimento')
    var ano = Number(nascimento.value)
    var dataatual = new Date()
    var anoatual = dataatual.getFullYear()
    var idade = anoatual - ano
    msg.innerHTML = (`<p>Voce tem em media ${idade} anos`)
}