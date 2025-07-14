function adicionar() {
    let nome = document.getElementById('nome-amigo').value;
    let incluidos = document.getElementById('lista-amigos');
    incluidos.textContent = incluidos.textContent + nome + ' ';
    listaNomes.push(nome);
}