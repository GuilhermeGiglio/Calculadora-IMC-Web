function calc(e) {
    if (e.keyCode == 13) {

        var peso = document.getElementById('peso')
        var alt = document.getElementById('alt')
        var res = document.getElementById('res')
        var res18 = document.getElementById('res18')
        var peso = Number(peso.value)
        var alt = parseFloat(alt.value)
        var calc = peso / (alt * alt)
        if (alt % 1 === 0 || peso == 0 || alt == 0) {
            res.innerHTML = "Dados inválidos."
            res18.innerHTML = null
            return res18;
        }
        if (calc <= 18.4) {
            res.innerHTML = (`O seu IMC é de: ${calc.toFixed(2)}!`)
            res18.innerHTML = (`<strong>Você está abaixo do peso.</strong>`)
        }

        if (calc >= 18.5) {
            res.innerHTML = (`O seu IMC é de: ${calc.toFixed(2)}!`)
            res18.innerHTML = (`<strong>Você está no peso ideal.</strong>`)
        }

        if (calc >= 25) {
            res.innerHTML = (`O seu IMC é de: ${calc.toFixed(2)}!`)
            res18.innerHTML = (`<strong>Você está um pouco acima do peso.</strong>`)
        }

        if (calc >= 30) {
            res.innerHTML = (`O seu IMC é de: ${calc.toFixed(2)}!`)
            res18.innerHTML = (`<strong>Você está no nível 1 de obesidade.</strong>`)
        }

        if (calc >= 35) {
            res.innerHTML = (`O seu IMC é de: ${calc.toFixed(2)}!`)
            res18.innerHTML = (`<strong>Você está no nível 2 de obesidade.</strong>`)
        }

        if (calc >= 40) {
            res.innerHTML = (`O seu IMC é de: ${calc.toFixed(2)}!`)
            res18.innerHTML = (`<strong>Você está no nível 3 de obesidade.</strong>`)
        }
    }
}


function calcc() {

    var peso = document.getElementById('peso')
    var alt = document.getElementById('alt')
    var res = document.getElementById('res')
    var res18 = document.getElementById('res18')
    var peso = Number(peso.value)
    var alt = parseFloat(alt.value)
    var calc = peso / (alt * alt)
    if (alt % 1 === 0 || peso == 0 || alt == 0) {
        res.innerHTML = "Dados inválidos."
        res18.innerHTML = null
        return res18;
    }
    if (calc <= 18.4) {
        res.innerHTML = (`O seu IMC é de: ${calc.toFixed(2)}!`)
        res18.innerHTML = (`<strong>Você está abaixo do peso.</strong>`)
    }

    if (calc >= 18.5) {
        res.innerHTML = (`O seu IMC é de: ${calc.toFixed(2)}!`)
        res18.innerHTML = (`<strong>Você está no peso ideal.</strong>`)
    }

    if (calc >= 25) {
        res.innerHTML = (`O seu IMC é de: ${calc.toFixed(2)}!`)
        res18.innerHTML = (`<strong>Você está um pouco acima do peso.</strong>`)
    }

    if (calc >= 30) {
        res.innerHTML = (`O seu IMC é de: ${calc.toFixed(2)}!`)
        res18.innerHTML = (`<strong>Você está no nível 1 de obesidade.</strong>`)
    }

    if (calc >= 35) {
        res.innerHTML = (`O seu IMC é de: ${calc.toFixed(2)}!`)
        res18.innerHTML = (`<strong>Você está no nível 2 de obesidade.</strong>`)
    }

    if (calc >= 40) {
        res.innerHTML = (`O seu IMC é de: ${calc.toFixed(2)}!`)
        res18.innerHTML = (`<strong>Você está no nível 3 de obesidade.</strong>`)
    }
}
  