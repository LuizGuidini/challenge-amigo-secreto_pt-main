//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
//  Aqui você deverá desenvolver a lógica para resolver o problema.

const amigos = []; // Lista de nomes de amigos

function adicionarAmigo() {
    const inputNome = document.getElementById("amigo");
    const nome = inputNome.value.trim(); //.trim limpa espaços antes e depois

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
