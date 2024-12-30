let resumo = document.getElementById('resumo');
let curiosidades = document.getElementById('curiosidades');
let historia = document.getElementById('historia');
let personagens = document.getElementById('personagens');

function menuOpen(){
    let menu = document.getElementById('menu-options');
    console.log('ok')
    console.log(menu.style.display)
    if(menu.style.display == 'none' || menu.style.display == ''){
        menu.style.display = 'flex';
    }else{
        menu.style.display = 'none';
    }
}

function openResumo() {
    resumo.style.display = 'block';
    curiosidades.style.display = 'none';
    historia.style.display = 'none';
    personagens.style.display = 'none';
}

function openCuriosidades() {
    resumo.style.display = 'none';
    curiosidades.style.display = 'block';
    historia.style.display = 'none';
    personagens.style.display = 'none';
}

function openHistoria() {
    resumo.style.display = 'none';
    curiosidades.style.display = 'none';
    historia.style.display = 'block';
    personagens.style.display = 'none';
}

function openPersonagens() {
    resumo.style.display = 'none';
    curiosidades.style.display = 'none';
    historia.style.display = 'none';
    personagens.style.display = 'block';
}