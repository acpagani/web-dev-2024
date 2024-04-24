let resultado = document.querySelector("#resultado")
let numberIn = document.querySelector("#numberInput")

function gerarTabuada() {
    resultado.innerText = ""
    numberIn = document.querySelector("#numberInput")
    
    if (!numberIn || isNaN(parseInt(numberIn.value))) {return}
    
    let number = parseInt(numberIn.value)
    for (i = 0; i <= 10; i++) {
        resultado.innerText += `${number} X ${i} = ${number * i}\n`
    }
    
}

numberIn.addEventListener("change", gerarTabuada)