let resumo = document.getElementById('resumo');
let curiosidades = document.getElementById('curiosidades');
let historia = document.getElementById('historia');
let personagens = document.getElementById('personagens');

function openResumo(){
    resumo.style.display = 'block';
    curiosidades.style.display = 'none';
    historia.style.display = 'none';
    personagens.style.display = 'none';
}

function openCuriosidades(){
    resumo.style.display = 'none';
    curiosidades.style.display = 'block';
    historia.style.display = 'none';
    personagens.style.display = 'none';
}

function openHistoria(){
    resumo.style.display = 'none';
    curiosidades.style.display = 'none';
    historia.style.display = 'block';
    personagens.style.display = 'none';
}

function openPersonagens(){
    resumo.style.display = 'none';
    curiosidades.style.display = 'none';
    historia.style.display = 'none';
    personagens.style.display = 'block';
}
    