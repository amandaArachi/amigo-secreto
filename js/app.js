let listaNomes = [];

function adicionar() {
    let nome = document.getElementById('nome-amigo');

    if(nome.value === '') {
        alert('O nome não pode estar vazio!');
        return;
    } 

    if(listaNomes.includes(nome.value)) {
        alert('Nome já existente.');
        return;
    }

    let incluidos = document.getElementById('lista-amigos');
    listaNomes.push(nome.value);

    if(incluidos.textContent == '') {
        incluidos.textContent = nome.value;
    } else {
        incluidos.textContent = incluidos.textContent + ', ' + nome.value;
    }
    nome.value = '';
}

function sortear() {

    if(listaNomes.length < 4) {
        alert('Deve haver no mínimo 4 participantes.');
        return;
    }

    embaralhar(listaNomes);
    let sorteio = document.getElementById('lista-sorteio');
     

    for(let i = 0; i < listaNomes.length; i++) {
        if(i == listaNomes.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + listaNomes[i] + ' --> ' + listaNomes[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaNomes[i] + ' --> ' + listaNomes[i + 1] + '<br>';
        }
    }

}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    listaNomes = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}