function tabu() {
    var num = document.getElementById('num')
    var num2 = document.getElementById('num2')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0 || num2.value.length == 0) {
        window.alert('ERRO, tente novamente')
    }
    else {
        var c = 1
        var n = Number(num.value)
        var n2 = Number(num2.value)
        tab.innerHTML = ''
        for (var c; c <= n2; c++) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item) 

        }
    }
}