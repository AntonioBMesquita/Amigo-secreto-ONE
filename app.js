//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
  const novoAmigo = document.getElementById("amigo").value.trim();
  const nomeAmigos = document.getElementById("listaAmigos");
  if (novoAmigo === "") {
    alert("Insira um nome válido!");
    return;
  }
  let itemLista = document.createElement("li");
  itemLista.textContent = novoAmigo;
  nomeAmigos.appendChild(itemLista);
  amigos.push(novoAmigo);
  document.getElementById("amigo").value = "";
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista de amigos está vazia. Adicione nomes para sortear.");
    return;
  }
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];
  let resultadoElemento = document.getElementById("resultado");
  resultadoElemento.innerHTML = `O amigo sorteado é: ${amigoSorteado}!`;
}
