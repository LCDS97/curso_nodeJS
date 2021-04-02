// Criando a variavel de config do axios com o Token Bearer e token gerado no login armazenado no local storage
var axiosConfig = {
    headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
    }
}

// Função de login
function login(){
    // Pegando valores do login
    var emailField = document.getElementById("email");
    var passwordField = document.getElementById("password");

    var email = emailField.value;
    var password = passwordField.value;

    // Fazendo requisição post com a rota de autenticação
    axios.post("http://localhost:4000/auth",{
        email,
        password
    }).then(res => {
        var token = res.data.token;
        // Utilizando o localstorage que é o armazenamento interno do browser para armazenar o token
        // O único momento que é cancelado é quando limpa o histórico, cookie ou desinstala o navegador
        localStorage.setItem("token",token);
        // Recalculando a variavel de token
        axiosConfig.headers.Authorization = "Bearer " + localStorage.getItem("token");
    }).catch(err => {
        alert("DEU PRA LOGAR NÃO!")
    })

}




// Função de criar um jogo
function createGame(){
    // Coletando valores do input e atribuindo a uma variavel
    var titleInput = document.getElementById("title");
    var yearInput = document.getElementById("year");
    var priceInput = document.getElementById("price");

    // Armazenando as variaveis dos input em um array para mandar na API 
    var game = {
        title: titleInput.value,
        year: yearInput.value,
        price: priceInput.value,
    }
    // Fazendo requisição utilizando o post para criar game da API
    axios.post("http://localhost:4000/game",game,axiosConfig).then(response => {

        if(response.status == 200){
            alert("Game cadastrado!")
        }

    }).catch(err => {
        console.log(err);
    });
}

// Função para deletar um jogo
function deleteGame(listItem){
    var id = listItem.getAttribute("data-id");
    // Utilizando a rota de delete da API com Axios
    axios.delete("http://localhost:4000/game/"+id,axiosConfig).then(response => {
        alert("Game deletado!");
    }).catch(err => {
        console.log(err);
    })
}

// Função para carregar dados de um jogo no formulario
function loadForm(listItem){

    // Carregando items do array de um game e enviar ao formulario para edição
    var id = listItem.getAttribute("data-id");
    var title = listItem.getAttribute("data-title");
    var year = listItem.getAttribute("data-year");
    var price = listItem.getAttribute("data-price");
    var idField = document.getElementById("idEdit");
    document.getElementById("idEdit").value = id;
    document.getElementById("titleEdit").value = title;
    document.getElementById("yearEdit").value = year;
    document.getElementById("priceEdit").value = price;
}

// Função para atualizar jogo
function updateGame(){
        // Coletando valores do input e atribuindo a uma variavel
        var idInput = document.getElementById("idEdit")
        var titleInput = document.getElementById("titleEdit");
        var yearInput = document.getElementById("yearEdit");
        var priceInput = document.getElementById("priceEdit");
    
        // Armazenando as variaveis dos input em um array para mandar na API 
        var game = {
            title: titleInput.value,
            year: yearInput.value,
            price: priceInput.value,
        }

        var id = idInput.value;
        // Fazendo requisição utilizando o put para editar o game da API
        axios.put("http://localhost:4000/game/"+id,game,axiosConfig).then(response => {
    
            if(response.status == 200){
                alert("Game atualizado!")
            }
    
        }).catch(err => {
            console.log(err);
        });
}

// Retornando dados da API da seção 13 com Axios
axios.get("http://localhost:4000/games", axiosConfig).then(response => {
    // Armazenando dados do response em array numa variavel
    var games = response.data;

    // Acessando lista do body através do id
    var list = document.getElementById("games");

    // Percorrendo o array de games e separando cada
    games.forEach(game => {
        var item = document.createElement("li");

        // Adicionando atributos customizados para atribuir o que quiser
        item.setAttribute("data-id",game.id);
        item.setAttribute("data-title",game.title);
        item.setAttribute("data-year",game.year);
        item.setAttribute("data-price",game.price);

        item.innerHTML = game.id + " - " + game.title + " - $" + game.price;
        
        // Criando o botão de deletar um jogo em cada item do array
        var deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Deletar";
        deleteBtn.addEventListener("click",function(){
            deleteGame(item)
        });

        // Criando o botão dinamico para editar um jogo
        var editBtn = document.createElement("button");
        editBtn.innerHTML = "Editar";
        editBtn.addEventListener("click", function() {
            loadForm(item)
        });
        

        // Aplicando o botão de deletar e editar a cada game
        item.appendChild(deleteBtn)
        item.appendChild(editBtn)
        
        list.appendChild(item);
    });
}).catch(error => {
    console.log(error);
});

