function escolhaComp() {
    const jokenpo = ["Pedra", "Papel", "Tesoura"]
    let randomNumber = Math.floor(Math.random() * jokenpo.length)
    return jokenpo[randomNumber]
}

function jokenpo(user_input) {

    let machineInput = escolhaComp()
    let result

    if (user_input === machineInput) {
        result = "Empatou!"
    }
    else if (
        (user_input === "Pedra" && machineInput === "Tesoura") ||
        (user_input === "Papel" && machineInput === "Pedra") ||
        (user_input === "Tesoura" && machineInput === "Papel")
    ) {
        result = "Você ganhou!"
    }
    else {
        result = "Máquina ganhou..."
    }
    

    document.querySelector("#result").innerText = `Você escolheu ${user_input} e a máquina escolheu ${machineInput}... ${result}`
}
