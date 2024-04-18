let textVel = document.querySelector("#textVel")

function radar()
{
    let input = parseInt(document.querySelector("#input").value)
    if (!input) {return}

    if (input <= 60)
    {
        textVel.innerText = "Parabéns! Você está no limite de velocidade!"
    }
    else
    {
        let multa = (input - 60) * 100
        textVel.innerText = `MULTADO! Você ultrapassou o limite de velocidade em ${input - 60}km/h e tem uma multa de R$${multa}`
    }
}


input.addEventListener("change", radar)