
zodiak.onclick = function () {
    let bulan = document.querySelector("#bulan").value;
    let tanggal = document.querySelector("#Tanggal").value;
    let zodiak = "";
    
    if (bulan == 3 && tanggal >= 21 || bulan == 4 && tanggal <= 19) {
        zodiak = "Aries";
        document.querySelector("#hasil").innerHTML = zodiak;
    } 

    if (bulan == 4 && tanggal >= 20 || bulan == 5 && tanggal <= 20) {
        zodiak = "Taurus";
        document.querySelector("#hasil").innerHTML = zodiak;
    }

    if (bulan == 5 && tanggal >= 21 || bulan == 6 && tanggal <= 20) {
        zodiak = "Gemini";
        document.querySelector("#hasil").innerHTML = zodiak;
    }   

    if (bulan == 6 && tanggal >= 21 || bulan == 7 && tanggal <= 22) {
        zodiak = "Cancer";
        document.querySelector("#hasil").innerHTML = zodiak;
    }   

    if (bulan == 7 && tanggal >= 23 || bulan == 8 && tanggal <= 22) {
        zodiak = "Leo";
        document.querySelector("#hasil").innerHTML = zodiak;
    }   

    if (bulan == 8 && tanggal >= 23 || bulan == 9 && tanggal <= 22) {
        zodiak = "Virgo";
        document.querySelector("#hasil").innerHTML = zodiak;
    }   

    if (bulan == 9 && tanggal >= 23 || bulan == 10 && tanggal <= 22) {
        zodiak = "Libra";
        document.querySelector("#hasil").innerHTML = zodiak;
    }   

    if (bulan == 10 && tanggal >= 23 || bulan == 11 && tanggal <= 21) {
        zodiak = "Scorpio";
        document.querySelector("#hasil").innerHTML = zodiak;
    }   

    if (bulan == 11 && tanggal >= 22 || bulan == 12 && tanggal <= 21) {
        zodiak = "Sagitarius";
        document.querySelector("#hasil").innerHTML = zodiak;
    }   

    if (bulan == 12 && tanggal >= 22 || bulan == 1 && tanggal <= 19) {
        zodiak = "Capricorn";
        document.querySelector("#hasil").innerHTML = zodiak;
    }   

    if (bulan == 1 && tanggal >= 20 || bulan == 2 && tanggal <= 18) {
        zodiak = "Aquarius";
        document.querySelector("#hasil").innerHTML = zodiak;
    }   

    if (bulan == 2 && tanggal >= 19 || bulan == 3 && tanggal <= 20) {
        zodiak = "pisces";
        document.querySelector("#hasil").innerHTML = zodiak;
    }   
}