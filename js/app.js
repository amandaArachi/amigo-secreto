function adicionar() {
    let nome = document.getElementById('nome-amigo').value;
    let incluidos = document.getElementById('lista-amigos');
    if(incluidos.textContent == '') {
        incluidos.textContent = nome;
    } else {
        incluidos.textContent = incluidos.textContent + ', ' + nome;
    }
}