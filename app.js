//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];
function exibirNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function adicionarAmigo(){
    let nome = document.getElementById('amigo').value;
    if (!isNaN(nome) || nome === ''){
        alert ('Por favor, insira um nome válido"');
        document.getElementById('amigo').value = '';
        return;
    }
    if (listaAmigos.includes(nome)){
        alert ('Nome repetido');
        document.getElementById('amigo').value = '';
        return;
    }
    else{
        listaAmigos.push(nome);
        document.getElementById('amigo').value = '';
        exibirListaAmigos();
    }
    console.log(listaAmigos);
}

function exibirListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    let listaHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        listaHTML += `<li>${listaAmigos[i]}</li>`;
    }
    exibirNaTela('#listaAmigos', listaHTML);
}

function numeroAleatorio(max){
    return Math.floor(Math.random()*max);
}

function sortearAmigo(){
    if (listaAmigos.length === 0){
        alert ('Lista vazia. Por Favor, inserir um nome válido');
        return;
    }
    let indiceAleatorio = numeroAleatorio(listaAmigos.length);
    document.getElementById('resultado').innerHTML = `<li>${listaAmigos[indiceAleatorio]}</li>`;
}
