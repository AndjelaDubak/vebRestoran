$(document).ready(function() {

    var mojiRecepti = [{
        ime : "",
        grupa : "",
        trajanje : "",
        tezina : "",
        uputstvo : "",
        pocetnaSlika : "",
        prosecnaOcena : "0",
        ukupno : "0",
        broj : "0"
    }];

    var svi = [{
        ime : "",
        grupa : "",
        trajanje : "",
        tezina : "",
        uputstvo : "",
        pocetnaSlika :"",
        slika : "",
        yt : "", 
        prosecnaOcena : "",
        ukupno : "",
        broj : ""
    }];

    $("#dodaj").click(function() {
        dodajRecept();
    });    

    function dodajRecept() {
        var moji = JSON.parse(localStorage.getItem("mojiRecepti"));

        if(moji != null) {
            mojiRecepti = moji;
        }
        var ime = $("#ime").val();
        var grupa = $("#grupa").val();
        var trajanje = $("#trajanje").val();
        var tezina = $("#tezina").val();
        var uputstvo = $("#uputstvo").val();

        var slika = "";
        var yt = "";
        if(grupa == "glavno jelo" || grupa == "main dish") {
            slika = "img/categories/categories-list/glavno.jpg";
            yt = "https://www.youtube.com/embed/SCUduAZxAxA";
        }
        else if(grupa == "predjelo" || grupa == "appetizer") {
            slika = "img/categories/categories-list/predjelo.jpg";
            yt = "https://www.youtube.com/embed/VelPUVzuLuw";
        }
        else if(grupa == "desert" || grupa == "dessert") {
            slika = "img/categories/categories-list/desert.jpg";
            yt = "https://www.youtube.com/embed/dvNUNsbeXFE";
        }
        else if(grupa == "uzina" || grupa == "snack") {
            slika = "img/categories/categories-list/uzina.jpg";
            yt = "https://www.youtube.com/embed/cxeG0oDeLL4";
        }
        var all = JSON.parse(localStorage.getItem("svi"));
        svi = all;
        svi.push({
            ime : ime,
            grupa : grupa,
            trajanje : trajanje, 
            tezina : tezina,
            uputstvo : uputstvo,
            pocetnaSlika : slika,
            slika:slika,
            yt : yt,
            prosecnaOcena : "0",
            ukupno : "0",
            broj : "0"
        });
        mojiRecepti.push({
            ime : ime,
            grupa : grupa,
            trajanje : trajanje, 
            tezina : tezina,
            uputstvo : uputstvo,
            pocetnaSlika : slika,
            yt : yt,
            prosecnaOcena : "0",
            ukupno : "0",
            broj : "0"
        });
        /*var pocetna = JSON.parse(localStorage.getItem("pocetna"));
        pocetna.push({
            ime : ime,
            grupa : grupa,
            trajanje : trajanje, 
            tezina : tezina,
            uputstvo : uputstvo,
            pocetnaSlika : slika,
            yt : yt,
            prosecnaOcena : "0",
            ukupno : "0",
            broj : "0"
        });*/

        localStorage.setItem("mojiRecepti", JSON.stringify(mojiRecepti));
       // localStorage.setItem("pocetna", JSON.stringify(pocetna));
       localStorage.setItem("svi", JSON.stringify(svi));
        //alert(pocetna.length);
        if(grupa == 'glavno jelo') window.location.href = 'glavno_jelo.html';
        else if(grupa == 'predjelo') window.location.href = 'predjelo.html';
        else if(grupa == 'desert') window.location.href = 'desert.html';
        else if(grupa == 'uzina') window.location.href = 'uzina.html';
        else if(grupa == 'main dish') window.location.href = 'glavno_jelo_eng.html';
        else if(grupa == 'appetizer') window.location.href = 'predjelo_eng.html';
        else if(grupa == 'snack') window.location.href = 'uzina_eng.html';
        else if(grupa == 'dessert') window.location.href = 'desert_eng.html';
    }   
        
});