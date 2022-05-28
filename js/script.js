
const bangunDatar = document.getElementById('bangunDatar');
const menuBangunDatar = document.getElementById('menuBangunDatar');

bangunDatar.addEventListener('click', function () {
    menuBangunDatar.classList.toggle('hidden');
    menuBangunDatar.classList.toggle('-translate-y-24');
})

const hambuger = document.getElementById('hambuger');
const nav = document.getElementById('nav');

hambuger.addEventListener('click', function () {
    hambuger.classList.toggle('hambuger-active');
    nav.classList.toggle('-translate-x-full');
})

// welcome section

const mulai = document.getElementById('mulai');

mulai.addEventListener('click', function () {
    hambuger.classList.toggle('hambuger-active');
    nav.classList.toggle('-translate-x-full');

})

