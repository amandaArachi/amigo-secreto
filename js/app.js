function adicionar() {
    let nome = document.getElementById('nome-amigo').value;
    let incluidos = document.getElementById('lista-amigos');
    if(incluidos.textContent == '') {
        incluidos.textContent = amigo;
    } else {
        incluidos.textContent = textContent + ', ' + nome;
    }
}