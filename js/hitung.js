// Persegi
const hitungPersegi = document.getElementById('hitung-persegi');
const demoPersegi = document.getElementById('demo-persegi');

// rumus persegi
hitungPersegi.addEventListener('click', function () {
    // alert('Ok')

    const LKPersegi = document.getElementById('LK-persegi').value;
    console.log(LKPersegi);

    const sisi = document.getElementById('sisi').value;
    console.log(sisi);

    if (LKPersegi == 'luas') {

        if (sisi == '') {
            alert('Silahkan isi sisi');
        } else {
            let luas = sisi * sisi;
            demoPersegi.classList.add('white-screen')
            setTimeout(function () {
                demoPersegi.classList.remove('white-screen')
            }, 200)
            demoPersegi.innerHTML = `
        <p class="font-semibold">Luas Segiempat<p>
        <p>L = sisi x sisi<p>
        <p>L = ${sisi} x ${sisi}<p>
        <p>L = ${luas}</p>
    `
        }
    } else if (LKPersegi == 'keliling') {
        if (sisi == '') {
            alert('Silahkan isi sisi');
        } else {
            let keliling = sisi * 4;
            demoPersegi.classList.add('white-screen')
            setTimeout(function () {
                demoPersegi.classList.remove('white-screen')
            }, 200)
            demoPersegi.innerHTML = `
            <p class="font-semibold">Keliling Segiempat<p>
            <p>K = sisi x 4<p>
            <p>K = ${sisi} x 4<p>
            <p>K = ${keliling}</p>
            `
        }
    }

})



// Persegi Panjang
const hitungPersegiPanjang = document.getElementById('hitung-persegi-panjang');
const demoPersegiPanjang = document.getElementById('demo-persegi-panjang');
const LKPersegiPanjang = document.getElementById('LK-persegi-panjang');

// Rumus Persegi Panjang
hitungPersegiPanjang.addEventListener('click', function () {
    let panjang = parseFloat(document.getElementById('panjang-pp').value)
    let lebar = parseFloat(document.getElementById('lebar-pp').value);
    if (panjang == '' || lebar == '') {
        alert('Silahkan isi panjang dan lebar');
    } else {

        if (LKPersegiPanjang.value == 'luas') {
            let luas = panjang * lebar;
            demoPersegiPanjang.classList.add('white-screen')
            setTimeout(function () {
                demoPersegiPanjang.classList.remove('white-screen')
            }, 200)
            demoPersegiPanjang.innerHTML = `
            <p class="font-semibold">Luas Persegi Panjang<p>
            <p>L = panjang x lebar<p>
            <p>L = ${panjang} x ${lebar}<p>
            <p>L = ${luas}</p>
            `
        } else if (LKPersegiPanjang.value == 'keliling') {
            let keliling = (panjang + lebar) * 2;
            demoPersegiPanjang.classList.add('white-screen')
            setTimeout(function () {
                demoPersegiPanjang.classList.remove('white-screen')
            }, 200)
            demoPersegiPanjang.innerHTML = `
            <p class="font-semibold">Keliling Persegi Panjang<p>
            <p>K = (panjang + lebar) x 2<p>
            <p>K = (${panjang} + ${lebar}) x 2<p>
            <p>K = ${keliling}</p>
            `
        }
    }
})



// Segitiga
const hitungSegitiga = document.getElementById('hitung-segitiga');
const demoSegitiga = document.getElementById('demo-segitiga');
const LKSegitiga = document.getElementById('LK-segitiga');
const inputSegitiga = document.getElementById('input-segitiga');

LKSegitiga.addEventListener('change', function () {

    if (LKSegitiga.value == 'luas') {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            inputSegitiga.innerHTML = this.responseText;
        }
        xhttp.open("GET", "./doc/l-segitiga.txt", true);
        xhttp.send();
    } else if (LKSegitiga.value == 'keliling') {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            inputSegitiga.innerHTML = this.responseText;
        }
        xhttp.open("GET", "./doc/k-segitiga.txt", true);
        xhttp.send();
    }

})

hitungSegitiga.addEventListener('click', function () {

    if (LKSegitiga.value == 'luas') {
        const alas = document.querySelector('#alas').value;
        const tinggi = document.querySelector('#tinggi').value;
        console.log(alas)
        console.log(tinggi)
        if (alas == '' || tinggi == '') {
            alert('Silahkan isi alas dan tinggi');
        } else {
            let luas = alas * tinggi / 2;
            demoSegitiga.classList.add('white-screen')
            setTimeout(function () {
                demoSegitiga.classList.remove('white-screen')
            }, 200)
            demoSegitiga.innerHTML = `
        <p class="font-semibold">Luas Segitiga<p>
        <p>L = 1/2 x alas x tinggi<p>
        <p>L = 1/2 x ${alas} x ${tinggi}<p>
        <p>L = ${luas}</p>
    `
        }

    } else if (LKSegitiga.value == 'keliling') {
        const sisi1 = document.querySelector('#sisi-1').value;
        const sisi2 = document.querySelector('#sisi-2').value;
        const sisi3 = document.querySelector('#sisi-3').value;

        let a = parseFloat(sisi1);
        let b = parseFloat(sisi2);
        let c = parseFloat(sisi3);

        if (sisi1 == '' || sisi2 == '' || sisi3 == '') {
            alert('Silahkan isi sisi');
        } else {
            let keliling = a + b + c;
            demoSegitiga.classList.add('white-screen')
            setTimeout(function () {
                demoSegitiga.classList.remove('white-screen')
            }, 200)
            demoSegitiga.innerHTML = `
            <p class="font-semibold">Keliling Segitiga<p>
            <p>K = sisi 1 + sisi 2 + sisi 3<p>
            <p>K = ${sisi1} + ${sisi2} + ${sisi3}<p>
            <p>K = ${keliling}</p>
            `
        }
    }
})



// lingkaran
const hitungLingkaran = document.getElementById('hitung-lingkaran');
const demoLingkaran = document.getElementById('demo-lingkaran');
const diaJari = document.getElementById('diaJari');

// cek diameter atau jari-jari
diaJari.addEventListener('change', function () {
    const labelJari = document.getElementById('label-jari');
    if (diaJari.value == 'jari-jari') {
        labelJari.innerHTML = 'Jari-jari:';
    } else {
        labelJari.innerHTML = 'Diameter:';
    }
})

// rumus lingkaran
hitungLingkaran.addEventListener('click', function () {

    // alert('Ok')
    let jari2
    let pi
    let pi2
    const jari = document.querySelector('#jari').value;
    const LKLingkaran = document.querySelector('#LK-lingkaran').value;

    if (diaJari.value === 'jari-jari') {

        jari2 = jari;
    } else {

        jari2 = jari / 2;
    }

    console.log(jari2 % 7)

    if (jari2 % 7 == 0) {
        pi = 22 / 7
        pi2 = '22/7'
    } else {
        pi = 3.14
        pi2 = '3.14'
    }

    console.log("pi: " + pi)

    if (LKLingkaran == 'luas') {
        let luas = pi * jari2 * jari2;
        demoLingkaran.classList.add('white-screen')
        setTimeout(function () {
            demoLingkaran.classList.remove('white-screen')
        }, 200)

        demoLingkaran.innerHTML = `
                    <p class="font-semibold">Luas Lingkaran<p>
                    <p>L = π x r x r<p>
                    <p>L = ${pi2} x ${jari2} x ${jari2}<p>
                    <p>L = ${luas}</p>
                `
    } else if (LKLingkaran == 'keliling') {
        let keliling = 2 * pi * jari2;
        demoLingkaran.classList.add('white-screen')
        setTimeout(function () {
            demoLingkaran.classList.remove('white-screen')
        }, 200)
        demoLingkaran.innerHTML = `
            <p class="font-semibold">Keliling Lingkaran<p>
            <p>K = 2 x π x r<p>
            <p>K = 2 x ${pi2} x ${jari2}<p>
            <p>K = ${keliling}</p>
        `
    }
})



/* jajargenjang */
const hitungJajargenjang = document.getElementById('hitung-jajargenjang');
const demoJajargenjang = document.getElementById('demo-jajargenjang');
const LKJajargenjang = document.getElementById('LK-jajargenjang');

// cek luas atau keliling jajargenjang
LKJajargenjang.addEventListener('change', function () {
    const LAJajar = document.getElementById('LA-jajar');
    const LTJajar = document.getElementById('LT-jajar');
    if (LKJajargenjang.value == 'luas') {
        LAJajar.innerHTML = 'Alas:';
        LTJajar.innerHTML = 'Tinggi:';
    } else {
        LAJajar.innerHTML = 'Sisi 1:';
        LTJajar.innerHTML = 'Sisi 2:';
    }
})

// rumus jajargenjang
hitungJajargenjang.addEventListener('click', function () {

    const alasJajar = document.querySelector('#alas-jajar').value;
    const tinggiJajar = document.querySelector('#tinggi-jajar').value;

    // console.log(alasJajar)
    // console.log(tinggiJajar)

    if (LKJajargenjang.value == 'luas') {
        if (alasJajar == '' || tinggiJajar == '') {
            alert('Silahkan isi alas dan tinggi');
        } else {
            let luas = alasJajar * tinggiJajar;
            demoJajargenjang.classList.add('white-screen')
            setTimeout(function () {
                demoJajargenjang.classList.remove('white-screen')
            }, 200)
            demoJajargenjang.innerHTML = `
        <p class="font-semibold">Luas Jajar Genjang<p>
        <p>L = alas x tinggi<p>
        <p>L = ${alasJajar} x ${tinggiJajar}<p>
        <p>L = ${luas}</p>
        `
        }
    } else if (LKJajargenjang.value == 'keliling') {
        if (alasJajar == '' || tinggiJajar == '') {
            alert('Silahkan isi alas dan tinggi');
        } else {
            let keliling = 2 * (parseInt(alasJajar) + parseInt(tinggiJajar));
            demoJajargenjang.classList.add('white-screen')
            setTimeout(function () {
                demoJajargenjang.classList.remove('white-screen')
            }, 200)
            demoJajargenjang.innerHTML = `
        <p class="font-semibold">Keliling Jajar Genjang<p>
        <p>K = 2 x (sisi 1 + sisi 2)<p>
        <p>K = 2 x (${alasJajar} + ${tinggiJajar})<p>
        <p>K = ${keliling}</p>
        `
        }
    }

})


/* Trapesium */
const hitungTrapesium = document.getElementById('hitung-trapesium')
const demoTrapesium = document.getElementById('demo-trapesium')
const LKTrapesium = document.getElementById('LK-trapesium')
const inputTrapesium = document.getElementById('input-trapesium')

LKTrapesium.addEventListener('change', function () {

    if (LKTrapesium.value == 'luas') {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            inputTrapesium.innerHTML = this.responseText;
        }
        xhttp.open("GET", "./doc/l-trapesium.txt", true);
        xhttp.send();
    } else {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            inputTrapesium.innerHTML = this.responseText;
        }
        xhttp.open("GET", "./doc/k-trapesium.txt", true);
        xhttp.send();
    }

})

hitungTrapesium.addEventListener('click', function () {

    if (LKTrapesium.value == 'luas') {
        const sisi1 = document.getElementById('sejajar-1').value
        const sisi2 = document.getElementById('sejajar-2').value
        const tinggi = document.getElementById('tinggi-trape').value

        let sisiA = parseFloat(sisi1)
        let sisiB = parseFloat(sisi2)
        let tinggiC = parseFloat(tinggi)

        if (sisi1 == '' || sisi2 == '' || tinggi == '') {
            alert("Isi Sisi 1, Sisi 2, dan tinggi")
        } else {
            let luas = (sisiA + sisiB) * tinggiC / 2
            demoTrapesium.classList.add('white-screen')
            setTimeout(function () {
                demoTrapesium.classList.remove('white-screen')
            }, 200)
            demoTrapesium.innerHTML = `
        <p class="font-semibold">Luas Trapesium<p>
        <p>L = (sisi 1 + sisi 2) x tinggi / 2<p>
        <p>L = (${sisi1} + ${sisi2}) x ${tinggi} / 2<p>
        <p>L = ${luas}</p>
        `

        }
    } else {
        const sisi1 = document.getElementById('sisi-1-trape').value
        const sisi2 = document.getElementById('sisi-2-trape').value
        const sisi3 = document.getElementById('sisi-3-trape').value
        const sisi4 = document.getElementById('sisi-4-trape').value

        let sisiA = parseFloat(sisi1)
        let sisiB = parseFloat(sisi2)
        let sisiC = parseFloat(sisi3)
        let sisiD = parseFloat(sisi4)

        if (sisi1 == '' || sisi2 == '' || sisi3 == '' || sisi4 == '') {
            alert("Isi Sisi 1, Sisi 2, sisi 3, dan sisi 4")
        } else {
            let keliling = sisiA + sisiB + sisiC + sisiD
            demoTrapesium.classList.add('white-screen')
            setTimeout(function () {
                demoTrapesium.classList.remove('white-screen')
            }, 200)
            demoTrapesium.innerHTML = `
        <p class="font-semibold">Keliling Trapesium<p>
        <p>K = sisi 1 + sisi 2 + sisi 3 + sisi 4<p>
        <p>K = ${sisi1} + ${sisi2} + ${sisi3} + ${sisi4}<p>
        <p>K = ${keliling}</p>
        `

        }
    }

})


// Belah Ketupat
const hitungBelahketupat = document.getElementById('hitung-belah-ketupat')
const demoBelahketupat = document.getElementById('demo-belah-ketupat')
const LKBelahketupat = document.getElementById('LK-belah-ketupat')
const inputBelahketupat = document.getElementById('input-belah-ketupat')

LKBelahketupat.addEventListener('change', function () {
    if (LKBelahketupat.value == 'luas') {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            inputBelahketupat.innerHTML = this.responseText;
        }
        xhttp.open("GET", "./doc/l-belahketupat.txt", true);
        xhttp.send();
    } else {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            inputBelahketupat.innerHTML = this.responseText;
        }
        xhttp.open("GET", "./doc/k-belahketupat.txt", true);
        xhttp.send();
    }
})

hitungBelahketupat.addEventListener('click', function () {

    if (LKBelahketupat.value == 'luas') {
        const d1 = document.getElementById('d1').value
        const d2 = document.getElementById('d2').value
        if (d1 == '' || d2 == '') {
            alert('Isi diagonal 1 dan diagonal 2')
        } else {
            let luas = (d1 * d2) / 2
            demoBelahketupat.classList.add('white-screen')
            setTimeout(function () {
                demoBelahketupat.classList.remove('white-screen')
            }, 200)
            demoBelahketupat.innerHTML = `
    <p class="font-semibold">Luas Belah Ketupat<p>
    <p>L = (d1 x d2) / 2<p>
    <p>L = (${d1} x ${d2}) / 2<p>
    <p>L = ${luas}</p>
    `
        }
    } else {
        const s = document.getElementById('sisi-bk').value
        if (s == '') {
            alert('Isi sisi')
        } else {
            let keliling = 4*s
            demoBelahketupat.classList.add('white-screen')
            setTimeout(function () {
                demoBelahketupat.classList.remove('white-screen')
            }, 200)
            demoBelahketupat.innerHTML = `
    <p class="font-semibold">Keliling Belah Ketupat<p>
    <p>K = 4 x s<p>
    <p>K = 4 x ${s}<p>
    <p>K = ${keliling}</p>
    `
        }
    }

})


// Angka Romawi
const hitungRomawi = document.getElementById('hitung-romawi')
const Angkaromawi = document.getElementById('angka')
const demoRomawi = document.getElementById('demo-romawi')

hitungRomawi.addEventListener('click', function () {
    const angka = Angkaromawi.value
    if (angka == '') {
        alert('Silahkan isi angka')
    } else {
        // alert(roman(angka))
        demoRomawi.classList.add('white-screen')
        setTimeout(function () {
            demoRomawi.classList.remove('white-screen')
        }, 200)
        demoRomawi.innerHTML = `

        <p class="font-semibold">${angka} : ${roman(angka)}<p>
        `
    }
})



// Layang-Layang
const hitungLayang = document.getElementById('hitung-layang2')
const demoLayang = document.getElementById('demo-layang2')
const inputLayang = document.getElementById('input-layang2')
const LKLayang = document.getElementById('LK-layang2')

LKLayang.addEventListener('change', function () {
    if (LKLayang.value == 'luas') {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            inputLayang.innerHTML = this.responseText;
        }
        xhttp.open("GET", "./doc/l-layang2.txt", true);
        xhttp.send();
    } else {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            inputLayang.innerHTML = this.responseText;
        }
        xhttp.open("GET", "./doc/k-layang2.txt", true);
        xhttp.send();
    }
})

hitungLayang.addEventListener('click', function () {
    if (LKLayang.value == 'luas') {
        const d1 = document.getElementById('d1-ly').value
        const d2 = document.getElementById('d2-ly').value
        if (d1 == '' || d2 == '') {
            alert('Isi diagonal 1 dan diagonal 2')
        } else {
            let luas = (d1 * d2) / 2
            demoLayang.classList.add('white-screen')
            setTimeout(function () {
                demoLayang.classList.remove('white-screen')
            }, 200)
            demoLayang.innerHTML = `
    <p class="font-semibold">Luas Layang-Layang<p>
    <p>L = (d1 x d2) / 2<p>
    <p>L = (${d1} x ${d2}) / 2<p>
    <p>L = ${luas}</p>
    `
            
        }
    } else {
        const s1 = parseFloat(document.getElementById('s1-ly').value)
        const s2 = parseFloat(document.getElementById('s2-ly').value)
        if (s1 == '' || s2 == '') {
            alert('Isi sisi 1 dan sisi 2')
        } else {
            let keliling = 2 * (s1 + s2)
            demoLayang.classList.add('white-screen')
            setTimeout(function () {
                demoLayang.classList.remove('white-screen')
            }, 200)
            demoLayang.innerHTML = `
    <p class="font-semibold">Keliling Layang-Layang<p>
    <p>K = 2 x (s1 + s2)<p>
    <p>K = 2 x (${s1} + ${s2})<p>
    <p>K = ${keliling}</p>
    `
            
        }
    }
})



// Convert To Roman
function roman(num) {
    var result = '';
    var lookup = {
        ↈ: 100000,
        ↂↈ:90000,
        ↇ: 50000,
        ↂↇ: 40000,
        ↂ: 10000,
        Mↂ: 9000,
        ↁ: 5000,
        Mↁ: 4000,
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    for (var i in lookup) {
        while (num >= lookup[i]) {
            result += i;
            num -= lookup[i];
        }
    }
    return result;
}