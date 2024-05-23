const btnClicar = document.querySelector("#btnClicar")
const listaFilmes = document.querySelector("#listaFilmes")
const inputUsuario = document.querySelector("#inputUsuario")

const filmes = [
    {
        nome: "Poderoso Chefão",
        diretor: "Copolla",
        ano: "1972",
        sinopse: "Lorem ipsum dolor sit amet"
    }, {
        nome: "Meninas Malvadas",
        diretor: "Lindsay Lohan",
        ano: 2004,
        sinopse: "blablabla"
    }, {
        nome: "Os trapalhões na calda do cometa",
        diretor: "Didi Mocó",
        ano: 1962,
        sinopse: "Didi"
    }
]

/* btnClicar.addEventListener("click", (infosDoEvento) => {
    infosDoEvento.preventDefault();

    // Referencia a estrutura
    console.log(infosDoEvento.target)

    // referencia o pai da estrutura
    console.log(infosDoEvento.target.parentNode) 

    let novoFilme = document.createElement('li')
    novoFilme.innerText = inputUsuario.value

    let btnEditar = document.createElement('button')
    btnEditar.innerText = 'Editar'

    btnEditar.addEventListener('click', () => {
        novoFilme.style.color = "red"
        novoFilme.classList.toggle("fundo-preto")
    })

    novoFilme.innerHTML = `
    <h1> Titulo do filme </h1>
    `

    let imagemFilme = document.createElement('img')
    imagemFilme.src = ""
    imagemFilme.alt = ""

    novoFilme.append(btnEditar)

    listaFilmes.append(novoFilme)
    inputUsuario.value = ''
}) */

btnClicar.addEventListener('click', criarFilme())

// CREATE
function criarFilme(infosDoEvento) {
    infosDoEvento.preventDefault()

    let novoFilme = {
        nome: inputUsuario.value,
        diretor: inputDiretor.value,
        ano: inputAno.value,
        sinopse: inputSinopse.value
    }

    filmes.unshift(novoFilme)
    renderizarNaTela()
} 

window.onload = renderizarNaTela()
// READ
function renderizarNaTela() {

    listaFilmes.innerHTML = ""

    filmes.forEach(
        filme => {
            let novoFilme = document.createElement('li')
            novoFilme.innerText = filme.nome

            listaFilmes.append(novoFilme)
        }
    )
}

// UPDATE
function atualizarFilme(idFilme) {

}

// DELETE
function removerFilme(idFilme) {
    filmes.splice(idFilme, 1)
}