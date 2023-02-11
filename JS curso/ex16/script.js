function comecar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    for (var c = i; c <= f; c += p) {
        res.innerHTML += (`> ${c}</p>`)
    }
}