let button = document.querySelector("#submit")
let p = document.querySelector("#p")

function validate() {
    let nomeUsuario = document.querySelector("#nomeUsuario");
    let senha = document.querySelector("#senha");
    
    if (nomeUsuario && nomeUsuario.value.trim().length > 0) {
        if (senha.value == "1234") {
            p.innerText += `Nome válido: ${nomeUsuario.value}\n`
            return
        }
        else {
            alert("Senha inválida.")
            nomeUsuario.value = ""
            senha.value = ""
            return
        }
    }
    else {
        alert("Nome inválido. Por favor, digite um nome de usuário válido.")
        nomeUsuario.value = ""
        senha.value = ""
        return
    }
}


button.addEventListener("click", validate)