// persegi
const menuPersegi = document.getElementById('menu-persegi');
const persegi = document.getElementById('persegi');
// persegi panjang
const menuPersegiPanjang = document.getElementById('menu-persegi-panjang');
const persegiPanjang = document.getElementById('persegi-panjang');
// segitiga
const menuSegitiga = document.getElementById('menu-segitiga');
const segitiga = document.getElementById('segitiga');
// segitiga
const menuLingkaran = document.getElementById('menu-lingkaran');
const lingkaran = document.getElementById('lingkaran');
// jajargenjang
const menuJajargenjang = document.getElementById('menu-jajargenjang')
const jajargenjang = document.getElementById('jajargenjang')
// trapesium
const menuTrapesium = document.getElementById('menu-trapesium')
const trapesium = document.getElementById('trapesium')
// romawi
const menuRomawi = document.getElementById('menu-romawi');
const romawi = document.getElementById('romawi');
// belah ketupat
const menuBelahKetupat = document.getElementById('menu-belah-ketupat');
const belahKetupat = document.getElementById('belah-ketupat');
// Layang-Layang
const menuLayang = document.getElementById('menu-layang2');
const layang = document.getElementById('layang2');

// Persegi
menuPersegi.addEventListener('click', function () {
    muncul({geometry: persegi})
    hilang({geometry: [segitiga, lingkaran, jajargenjang, trapesium, romawi, persegiPanjang, belahKetupat, layang]})
})

// Segitiga
menuSegitiga.addEventListener('click', function () {
    muncul({geometry: segitiga})
    hilang({geometry: [persegi, lingkaran, jajargenjang, trapesium, romawi, persegiPanjang, belahKetupat, layang]})
})

menuLingkaran.addEventListener('click', function () {
    muncul({geometry: lingkaran})
    hilang({geometry: [persegi, segitiga, jajargenjang, trapesium, romawi, persegiPanjang, belahKetupat, layang]})
})

menuJajargenjang.addEventListener('click', function() {
    muncul({geometry: jajargenjang})
    hilang({geometry:[persegi, segitiga, lingkaran, trapesium, romawi, persegiPanjang, belahKetupat, layang]})
})

menuTrapesium.addEventListener('click', function() {
    muncul({geometry: trapesium})
    hilang({geometry:[persegi, segitiga, lingkaran, jajargenjang, romawi, persegiPanjang, belahKetupat, layang]})
})

menuRomawi.addEventListener('click', function() {
    muncul({geometry: romawi})
    hilang({geometry:[persegi, segitiga, lingkaran, jajargenjang, trapesium, persegiPanjang, belahKetupat, layang]})
})

menuPersegiPanjang.addEventListener('click', function() {
    muncul({geometry: persegiPanjang})
    hilang({geometry:[persegi, segitiga, lingkaran, jajargenjang, trapesium, romawi, belahKetupat]})
})

menuBelahKetupat.addEventListener('click', function() {
    muncul({geometry: belahKetupat})
    hilang({geometry:[persegi, segitiga, lingkaran, jajargenjang, trapesium, romawi, persegiPanjang, layang]})
})

menuLayang.addEventListener('click', function() {
    muncul({geometry: layang})
    hilang({geometry:[persegi, segitiga, lingkaran, jajargenjang, trapesium, romawi, persegiPanjang, belahKetupat]})
})

function muncul({geometry}) {
    geometry.classList.remove('hidden');
}

function hilang({geometry}) {
    
    geometry.forEach(element => {

        element.classList.add('hidden');

    });
}
