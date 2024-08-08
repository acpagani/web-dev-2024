const clicar = (element) => {
    
    let numero1 = parseFloat(document.querySelector("#numero1").value)
    let numero2 = parseFloat(document.querySelector("#numero2").value)
    let resultado = document.querySelector("#resultado")

    let operacao

    if (element.id == "soma"){
        operacao = numero1 + numero2
    }
    else if (element.id == "subtracao"){
        operacao = numero1 - numero2
    }
    else if (element.id == "multiplicacao"){
        operacao = numero1 * numero2
    }
    else if (element.id == "divisao"){
        if (numero2 === 0){
            alert("Não se pode dividir por zero!")
            return 1
        }
        operacao = numero1 / numero2
    }
    else {
        console.warn("Operation Error")
        return 1
    }

    resultado.innerText = `O resultado é ${operacao}`
}