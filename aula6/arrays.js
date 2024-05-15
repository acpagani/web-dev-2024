const pessoas = ["Fulano", "Beltrano", "Ciclano"]

const numeros = [1, 2, 3]

// Adicionar
pessoas.push("Caio")




/* pessoas.forEach(
    function rodarArray(pessoa) {
        console.log(pessoa)
    }
) */

// Itera por todos os itens da lista, as alterações realizadas serão diretamente direcionadas à lista em questão
//pessoas.forEach( pessoa => console.log(pessoa.toLowerCase()))

// Também itera pela lista inteira, mas retorna um array novo com as alterações solicitadas
//pessoas.map( pessoa => console.log(pessoa.toLowerCase()))

function dobrarNums(array) {
    return array.map(numero => numero * 2)
}

function gritar(array) {
    return array.map(pessoa => pessoa.toUpperCase())
}

console.log(dobrarNums(numeros))
console.log(gritar(pessoas))