# 🧑‍🤝‍🧑 **Amigo Secreto - O Jogo Perfeito para Suas Festas!** 🎉

**O Amigo Secreto** é uma aplicação divertida e interativa para organizar o jogo de Amigo Secreto de maneira simples e sem confusão! Com esse aplicativo, você pode facilmente adicionar os nomes dos participantes, sortear um único amigo secreto ou até mesmo embaralhar a lista inteira para revelar os sorteios de forma divertida.

---

## 🚀 **Funcionalidades:**

### 1. **Adicionar Amigos**
- **O que faz?**  
   O botão **Adicionar Amigo** permite que você adicione amigos à lista. Após digitar o nome e clicar em "Adicionar", o nome aparece na lista abaixo.
  
- **Como funciona?**  
   O sistema verifica se o nome não está vazio e não foi adicionado anteriormente, evitando duplicação. Caso o nome já tenha sido adicionado, você receberá um alerta informando sobre isso.

### 2. **Sortear 1 Amigo Secreto**
- **O que faz?**  
   Clica no botão **Sortear 1 Amigo** e o sistema escolhe aleatoriamente um amigo da lista para ser o sorteado.

- **Como funciona?**  
   O sistema utiliza a função `Math.random()` para gerar um número aleatório e sorteia um nome. Esse nome é mostrado em um alerta para que todos saibam quem foi o sorteado.

### 3. **Sortear Todos os Amigos Secretos**
- **O que faz?**  
   O botão **Sortear Todos** realiza o sorteio de todos os amigos de uma vez, embaralhando a lista e exibindo quem vai dar presente para quem.

- **Como funciona?**  
   A lista de amigos é embaralhada e um sorteio é feito para cada amigo, mostrando quem vai dar o presente para quem, em sequência. Você verá isso diretamente na tela!

### 4. **Limpar Lista**
- **O que faz?**  
   O botão **Limpar Lista** apaga todos os nomes da lista e reseta a aplicação.

- **Como funciona?**  
   Ao clicar no botão, o sistema vai pedir uma confirmação para ter certeza de que você deseja limpar todos os nomes. Após confirmação, a lista é apagada e o jogo começa de novo!

---

## 🛠️ **Como Funciona o Código**

### 1. **Adicionando Amigos à Lista**
A função **adicionarAmigo()** coleta o valor do campo de entrada, verifica se o nome está vazio ou se já foi adicionado anteriormente, e então adiciona o nome ao array `amigos`.

```js
function adicionarAmigo() {
    const inputNome = document.getElementById("amigo");
    const nome = inputNome.value.trim(); // Limpa espaços extras no nome

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (nome && !amigos.includes(nome)) {
        amigos.push(nome); // Adiciona o nome ao array
        atualizarLista(); // Atualiza a lista visual
    } else if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!"); // Impede nomes duplicados
    }

    inputNome.value = ""; // Limpa o campo de entrada após adicionar
}
```

### 2. **Atualizando a Lista de Amigos**
A função **atualizarLista()** atualiza a lista visual de amigos na página HTML. Ela percorre o array `amigos` e adiciona cada nome como um item `<li>` dentro de uma lista HTML.

```js
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de adicionar os novos amigos

    amigos.forEach(nome => {
        const item = document.createElement("li");
        item.textContent = nome; // Adiciona o nome como texto do item
        lista.appendChild(item); // Adiciona o item à lista
    });
}
```

### 3. **Sortear 1 Amigo Secreto**
A função sortearUmAmigo() escolhe aleatoriamente um amigo da lista e mostra o resultado em um alerta.

```js
function sortearUmAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione pelo menos um nome.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length); // Gera índice aleatório
    const amigoSorteado = amigos[indiceSorteado]; // Pega o nome sorteado

    alert(`🎉 O amigo sorteado é: ${amigoSorteado}`); // Exibe o resultado em um alerta
}
```

### 4. **Sortear Todos os Amigos Secretos**
A função sortearAmigo() embaralha a lista de amigos e realiza o sorteio de todos ao mesmo tempo, exibindo quem vai dar presente para quem.

```js
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear.");
        return;
    }

    const embaralhado = [...amigos].sort(() => Math.random() - 0.5); // Embaralha a lista
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa resultados anteriores

    for (let i = 0; i < embaralhado.length; i++) {
        const amigo = i === embaralhado.length - 1 ? embaralhado[0] : embaralhado[i + 1];
        const item = document.createElement("li");
        item.textContent = `${embaralhado[i]} → ${amigo}`; // Mostra quem vai dar presente para quem
        resultado.appendChild(item); // Adiciona ao resultado na página
    }
}
```

### 5. **Limpar Lista**
A função limparLista() limpa todos os nomes da lista e reseta a aplicação.

```js
function limparLista() {
    if (amigos.length === 0) {
        alert("A lista já está vazia!");
        return;
    }

    if (confirm("Tem certeza que deseja limpar a lista?")) {
        amigos = []; // Limpa o array
        atualizarLista(); // Atualiza a interface
        document.getElementById("resultado").innerHTML = ""; // Limpa os resultados
    }
}
```

## 📌 **Tecnologias Usadas**
- **HTML**: Estrutura básica da página.
- **CSS**: Estilização visual da página e botões.
- **JavaScript**: Lógica para adicionar amigos, realizar sorteios e atualizar a interface.

---

## 🤝 **Contribua!**
Se você tiver ideias ou sugestões para melhorar o jogo, fique à vontade para contribuir! Faça um **fork** do repositório e envie um **pull request** com suas alterações. Vamos juntos deixar o Amigo Secreto ainda mais divertido! 😄

