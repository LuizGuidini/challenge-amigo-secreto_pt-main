//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
//  Aqui você deverá desenvolver a lógica para resolver o problema.

//Inicie declarando uma variável do tipo array, que armazenará os nomes dos amigos inseridos.

let amigos = [];
let indicesSorteados = [];
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

//Crie uma função que percorra o array amigos e adicione cada nome como um elemento <li> dentro de uma lista HTML. 
// Use innerHTML para limpar a lista antes de adicionar novos elementos.

//Tarefas específicas:
//Obter o elemento da lista: Utilize document.getElementById() ou document.querySelector() 
// para selecionar a lista onde os amigos serão exibidos.

//Limpar a lista existente: Defina lista.innerHTML = "" para garantir que não haja duplicados ao atualizar.

//Percorrer o array: Use um loop for para percorrer o array amigos e criar elementos de lista (<li>) para cada nome.

//Adicionar elementos à lista: Para cada amigo, crie um novo elemento de lista.

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach(nome => {
        const item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

//Escreva uma função que selecione aleatoriamente um dos nomes armazenados no array amigos.

//Use Math.random() e Math.floor() para obter um índice aleatório.

//Tarefas específicas:
//Validar que há amigos disponíveis: Antes de sortear, verificar se o array amigos não está vazio.

//Gerar um índice aleatório: Usar Math.random() e Math.floor() para selecionar um índice aleatório do array.

//Obter o nome sorteado: Utilizar o índice aleatório para acessar o nome correspondente no array.

//Mostrar o resultado: Atualizar o conteúdo do elemento de resultado usando document.getElementById() 
// e innerHTML para exibir o amigo sorteado.

function sortearUmAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione pelo menos um nome.");
        return;
    }

    if (indicesSorteados.length === amigos.length) {
        alert("Todos os amigos já foram sorteados! Reiniciando a lista...");
        indicesSorteados = [];
    }

    let indiceSorteado;
    do {
        indiceSorteado = Math.floor(Math.random() * amigos.length);
    } while (indicesSorteados.includes(indiceSorteado));

    indicesSorteados.push(indiceSorteado);

    alert(`🎉 O amigo sorteado é: ${amigos[indiceSorteado]}!`);
}

// Sorteando a lista inteira de amigos

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

//limpar lista
function limparLista() {
    if (amigos.length === 0) {
        alert("A lista já está vazia!");
        return;
    }

    if (confirm("Tem certeza que deseja limpar a lista?")) {
        amigos = [];
        atualizarLista();
        document.getElementById("resultado").innerHTML = "";
    }
}