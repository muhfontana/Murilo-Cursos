var numeros = []
function adicionar() {
    var num = document.getElementById('num')
    var numlist = document.getElementById('numlist')
    var n = Number(num.value)
    res.innerHTML = ''
    if (num.value.length == 0) {
        window.alert('Digite um numero!')
    } else if (num.value < 1) {
        window.alert('ERRO, por favor escolha um numero mais alto!')
    } else if (num.value > 100) {
        window.alert('ERRO, por favor escolha um numero mais baixo!')
    } else if (numeros.includes(n)) {
        window.alert('Este numero ja foi adiconado!')
    } else {
        let newoption = document.createElement('option');
        newoption.text = `${n} foi adicionado`
        numlist.appendChild(newoption)
        numeros.push(n)
    }
    num.value = ''
    num.focus()
}
function finalizar() {
    if (numeros == 0){
        window.alert('Por favor, adicione um numero antes de finalizar!')
    }else{
        const compareNumbers = (a, b) => a - b
        numeros.sort(compareNumbers)
    var soma = 0
    for (var i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    var media = soma/numeros.length
    res.innerHTML = (`Ao todo, temos ${numeros.length} numeros cadastrados &#10004</p>`)
    res.innerHTML += (`O menor valor adicionado foi ${numeros[0]} &#10004</p>`)
    res.innerHTML += (`O maior valor adicionado foi ${numeros[numeros.length-1]} &#10004</p>`)
    res.innerHTML += (`Somando todos os valores, temos: ${soma} &#10004</p>`)
    res.innerHTML += (`Media dos valores adicionados: ${media} &#10004`)
}
}