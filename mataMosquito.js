var criaMosquito = setInterval(function(){
    posicaoRandomica();
},
    2000
);

var altura = 0;
var largura = 0;
var vida = 1;
var tempo = 25;

var criaMosquitoTempo = 2000

var nivel = window.location.search;
nivel = nivel.replace('?', '');

if(nivel === 'normal') {
	criaMosquitoTempo = 1500;
} else if(nivel === 'dificil') {
	//1000
	criaMosquitoTempo = 1000;
} else if(nivel === 'chucknorris') {
	//750
	criaMosquitoTempo = 750;
}

function ajustaPalcoJogo(){
    altura = window.innerHeight;
    largura =  window.innerWidth;
}

var cronometro = setInterval(function(){

    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(criaMosquito);
        window.location.href = "vitoria.html";
    }else{
        document.getElementById('cronometro').innerHTML = tempo;
    }
    tempo -= 1;
    
}, 1000);

ajustaPalcoJogo();

function posicaoRandomica(){

    //Remover mosquito anterior caso exista
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();

        if(vida > 3){
            window.location.href="fimDeJogo.html";
        }else{
            document.getElementById('v' + vida).src = "imagens/coracao_vazio.png";
            vida++;
        }

    }

    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);

    //document.createElement(): cria elemento HTML

    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosquito.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function(){
        this.remove();
    }

    document.body.appendChild(mosquito);
}

function tamanhoAleatorio(){

    var classe = Math.floor(Math.random() * 3);

    switch(classe){
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }
}

function ladoAleatorio(){

    var classe = Math.floor(Math.random() * 2);

    switch(classe){
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}


