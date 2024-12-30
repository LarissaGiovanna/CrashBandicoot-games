let logoImg = document.getElementById('#logo-img');
logoImg.addEventListener('click', () => {
    window.location.href = 'index.html'
})

function loadCrash1() {
    window.location.href = 'pages/crash1.html'
}
function loadCrash2() {
    window.location.href = 'pages/crash2.html'
}
function loadCrash3() {
    window.location.href = 'pages/crash3.html'
}
function loadCtr() {
    window.location.href = 'pages/ctr.html'
}
function loadCrashBash() {
    window.location.href = 'pages/crashBash.html'
}


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