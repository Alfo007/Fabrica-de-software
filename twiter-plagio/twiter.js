const url = "https://jsonplaceholder.typicode.com/users"

//fetch(url)
//.then(resposta => resposta.json() )
//.then( dados => {
    //const username = document.querySelector("#username")
    //const nomeUsuario = document.querySelector("#nome-usuario")
    //const userEmail = document.querySelector("#user-email")

    //username.textContent = dados[1].username 
    //nomeUsuario.textContent = dados[1].name
    //userEmail.textContent = dados[1].email

    //console.log(dados[1])

//})


async function pegaDados() {

    const username = document.querySelector("#username")
    const nomeUsuario = document.querySelector("#nome-usuario")
    const userEmail = document.querySelector("#user-email")

    // joga tela de carregamento para o usuario
    const response = await fetch(url,
    {
        method: "GET"
    })
    const dados = await response.json()

    username.textContent = dados[1].username 
    nomeUsuario.textContent = dados[1].name
    userEmail.textContent = dados[1].email

    console.log(dados)

}

pegaDados()