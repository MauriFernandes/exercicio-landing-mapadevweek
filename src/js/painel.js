// quando clicar na seta avançar temos que esconder 
// todas as imagens e mostrar a proxima imagem

// a imagem atual começa em 0
// assim que for clicado no avançar
// preciso adicionar mais 1 ao contador de imagens
// para poder saber que agora eu vou mostrar a segunda imagem

// esconder todas as imagens
// pegar todas as imagens usando o DOM e remover a classe "mostrar"

//mostrar a proxima imagem
// pegar todas as imagens, descobrir qual é a proxima e colocar a classe "mostrar" nela

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar');
    });
}

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}
// criando função da seta avançar 

setaAvancar.addEventListener('click', function(){
    const totalDeImagens = imagensPainel.length - 1;
    if(imagemAtual === totalDeImagens){
        return;

    }
    if (imagemAtual === totalDeImagens - 1){
        setaAvancar.classList.remove('mostrar');
    }
    

    setaVoltar.classList.add('mostrar')
    //adicionar o numero pra mostrar a imagem
    imagemAtual++;
    //esconder as outras imagens usando o DOM e remover a classe mostrar
    esconderImagens();
    //mostrar a proxima imagem
    mostrarImagem();

    

});

// criando função da seta avançar 

setaVoltar.addEventListener('click', function(){

    if(imagemAtual === 0){
        return;
    }
    if(imagemAtual === 1){
        setaVoltar.classList.remove('mostrar');
    }
    setaAvancar.classList.add('mostrar')
    //reduzir o numero pra mostrar a imagem
    imagemAtual--;
    //esconder as outras imagens usando o DOM e remover a classe mostrar
    esconderImagens();
    //mostrar a imagem anterior
    mostrarImagem();

});
