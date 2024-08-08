const filmes = [
    {
        nome: "Carros",
        diretor: "Miguel Falabela",
        ano: 2006
    },
    {
        nome: "Toy Story",
        diretor: "Caosda",
        ano: 1995
    }
]

console.log(filmes.filter( filme => filme.ano > 2000))