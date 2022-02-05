let bil1 = document.querySelector("#bil1");
let bil2 = document.querySelector("#bil2");
let hasil = document.querySelector("#hasil");

kali.onclick = function () {
    // alert (bil1.value);
    let a = parseFloat(bil1.value);
    let b = parseFloat(bil2.value);
    let c = a*b;

    hasil.innerHTML = c;
}

bagi.onclick = function () {
    // alert (bil1.value);
    let a = parseFloat(bil1.value);
    let b = parseFloat(bil2.value);
    let c = a/b;

    hasil.innerHTML = c;
}

tambah.onclick = function () {
    // alert (bil1.value);
    let a = parseFloat(bil1.value);
    let b = parseFloat(bil2.value);
    let c = a+b;

    hasil.innerHTML = c;
}

kurang.onclick = function () {
    // alert (bil1.value);
    let a = parseFloat(bil1.value);
    let b = parseFloat(bil2.value);
    let c = a-b;

    hasil.innerHTML = c;
}

function Halo() {
    alert ("Belajar Function");
}