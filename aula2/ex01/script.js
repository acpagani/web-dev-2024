let price = document.querySelector(".price")

function Comprar()
{
    console.log("Ativou")
    let number = document.querySelector("#input").value
    let mountant
    
    if (!number) {return}

    if (number < 7)
    {
        mountant = number * 22
        price.innerText = `O preço total é ${mountant}`
    }
    else
    {
        mountant = number * 15
        price.innerText = `O preço total é ${mountant}`
    }
}