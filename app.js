//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
//  Aqui você deverá desenvolver a lógica para resolver o problema.

//Inicie declarando uma variável do tipo array, que armazenará os nomes dos amigos inseridos.

let amigos = [];

//Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.

//Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.

//Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."

//Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().

//Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia

function adicionarAmigo() {
    const inputNome = document.getElementById("amigo");
    
    const nome = inputNome.value.trim(); //.trim limpa espaços antes e depois

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
    } else if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
    }

    inputNome.value = ""; //Limpa entrada
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach(nome => {
        const item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 nomes para sortear.");
        return;
    }

    const embaralhado = [...amigos].sort(() => Math.random() - 0.5);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa resultados anteriores

    for (let i = 0; i < embaralhado.length; i++) {
        const amigo = i === embaralhado.length - 1 ? embaralhado[0] : embaralhado[i + 1];
        const item = document.createElement("li");
        item.textContent = `${embaralhado[i]} → ${amigo}`;
        resultado.appendChild(item);
    }
}
