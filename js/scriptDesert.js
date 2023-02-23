$(document).ready(function() {

    var mojiRecepti = [{
        ime : "",
        grupa : "",
        trajanje : "",
        tezina : "",
        uputstvo : ""
    }];

    var Recepti = [{
        ime : "",
        grupa : "",
        trajanje : "",
        tezina : "",
        uputstvo : "",
        yt : "", 
        prosecnaOcena : "",
        ukupno : "",
        broj : ""
    }];

    var receptiPocetna = [{
        ime : "",
        grupa : "",
        trajanje : "",
        tezina : "",
        uputstvo : "",
        yt : "", 
        prosecnaOcena : "",
        ukupno : "",
        broj : ""
    }];

    var komentari = [{
        ime : "",
        imeRec:"",
        tekst:""
    }];

    inicijalizuj();

    function inicijalizuj() {
        var recepti = JSON.parse(localStorage.getItem("recepti"));
        var mojiRecepti = JSON.parse(localStorage.getItem("mojiRecepti"));
        if(recepti == null || recepti[1].grupa!="desert") {
            komentari.push({
                ime : "Mina",
                imeRec: "Banane sa karamel prelivom",
                tekst : "Slatko i ukusno."
            });
            komentari.push({
                ime : "Misa",
                imeRec: "Banane sa karamel prelivom",
                tekst : "Super!"
            });
            Recepti.push({
                ime : "Banane sa karamel prelivom",
                grupa : "desert",
                trajanje : "2h", 
                tezina : "4",
                uputstvo : 'U serpi otopite puter. Dodajte secer i kuvajte dok ne postane braon. Polako dodajte pavlaku i ostavite da vri 1 minut. Stavite banane u tiganj da se zagreju. Sklonite sa vatre, stavite u tanjir i prelijte filom. Po zelji dodajte cimet i/ili sladoled.',
                pocetnaSlika : 'img/categories/categories-list/banane1.jpg',
                yt : "https://www.youtube.com/embed/Z2qqHfoaOw4",
                prosecnaOcena : "3",
                ukupno : "9",
                broj : "3"
            });
    
            komentari.push({
                ime : "Masa",
                imeRec: "Cokoladni sufle",
                tekst : "Obozavam!"
            });
            Recepti.push({
                ime : "Cokoladni sufle",
                grupa : "desert",
                trajanje : "2h", 
                tezina : "3",
                uputstvo : 'Umutiti jaja, secer, i brasno. Posebno na sporetu lagano istopiti cokoladu sa maslacem; zatim to, sjediniti u prethodno umucenu masu od (jaja, brasna i secera). Priprema jeste do 20-ak minuta ali imajte u vidu da se napravljena smesa, mora, najpre ohladiti jedno 2-3 sata pre pecenja. Smesom puniti do 2/3 modle. Peci u zagrejanoj rerni na 250 stepeni tacno 7 minuta.',
                pocetnaSlika : 'img/categories/categories-list/sufle1.jpg',
                yt : "https://www.youtube.com/embed/xmQrucN0kmA",
                prosecnaOcena : "4",
                ukupno : "16",
                broj : "4"
            });
    
            komentari.push({
                ime : "Iva",
                imeRec: "Cheese Cake",
                tekst : "Osvezavajuce."
            });
           
            Recepti.push({
                ime : "Cheese Cake",
                grupa : "desert",
                trajanje : "3h", 
                tezina : "5",
                uputstvo : 'Margarin pomesate sa keksom i napravite koru. Umutite slag, u koji dodate secer. Kada je to umuceno dodate kiselu pavlaku, i sir. U sve to stavite zelatin koji ste pripremili na sledeci nacin: U malu serpicu, stavite 4 kasike hladne vode i zelatin (10 g) i to mesate, i odmah neposredno pre kljucanja skinete sa vatre i odmah stavite u fil i mutite mikserom jos minut. Oblikujete koru i stavite u frizider da se ohladi i pocnete da pravite fil od voca. U posebnu posudu 15-ak min. kuvate maline pomesane sa 4 kasike secera i kada je pri kraju kuvano, sastavite preostalih 10 grama zelatina sa tim i promesate a zatim sada njih ostavite u frizider da se malo ohlade. Spremni smo za filovanje kao i najlepsi deo pravljenja ovog recepta. Najpre preko kore stavite beli fil, a preko belog zatim i vocni crveni. Uzivajte ! (za dekoraciju je pozeljno staviti na tacnu maline 2,3 ukoliko su vam ostale).',
                pocetnaSlika : 'img/categories/categories-list/cheese1.jpg',
                yt : "https://www.youtube.com/embed/FZCd6_WaIUE",
                prosecnaOcena : "1",
                ukupno : "3",
                broj : "3"
            });
            localStorage.setItem("komentari",JSON.stringify(komentari));
            localStorage.setItem("recepti",JSON.stringify(Recepti));
        }
        else {
            Recepti = recepti;
        }

        var r = JSON.parse(localStorage.getItem("pocetna"));
        if(r == null || r[1].grupa!="desert") {
            receptiPocetna.push({
                ime : "Banane sa karamel prelivom",
                grupa : "desert",
                trajanje : "2h", 
                tezina : "4",
                uputstvo : 'U serpi otopite puter. Dodajte secer i kuvajte dok ne postane braon. Polako dodajte pavlaku i ostavite da vri 1 minut. Stavite banane u tiganj da se zagreju. Sklonite sa vatre, stavite u tanjir i prelijte filom. Po zelji dodajte cimet i/ili sladoled.',
                pocetnaSlika : 'img/categories/categories-list/banana.jpg',
                yt : "https://www.youtube.com/embed/Z2qqHfoaOw4",
                prosecnaOcena : "3",
                ukupno : "9",
                broj : "3"
            });
    
            receptiPocetna.push({
                ime : "Cokoladni sufle",
                grupa : "desert",
                trajanje : "2h", 
                tezina : "3",
                uputstvo : 'Umutiti jaja, secer, i brasno. Posebno na sporetu lagano istopiti cokoladu sa maslacem; zatim to, sjediniti u prethodno umucenu masu od (jaja, brasna i secera). Priprema jeste do 20-ak minuta ali imajte u vidu da se napravljena smesa, mora, najpre ohladiti jedno 2-3 sata pre pecenja. Smesom puniti do 2/3 modle. Peci u zagrejanoj rerni na 250 stepeni tacno 7 minuta.',
                pocetnaSlika : 'img/categories/categories-list/sufle.jpg',
                yt : "https://www.youtube.com/embed/xmQrucN0kmA",
                prosecnaOcena : "4",
                ukupno : "16",
                broj : "4"
            });
           
            receptiPocetna.push({
                ime : "Cheese Cake",
                grupa : "desert",
                trajanje : "3h", 
                tezina : "5",
                uputstvo : 'Margarin pomesate sa keksom i napravite koru. Umutite slag, u koji dodate secer. Kada je to umuceno dodate kiselu pavlaku, i sir. U sve to stavite zelatin koji ste pripremili na sledeci nacin: U malu serpicu, stavite 4 kasike hladne vode i zelatin (10 g) i to mesate...',
                pocetnaSlika : 'img/categories/categories-list/cheese.jpg',
                yt : "https://www.youtube.com/embed/FZCd6_WaIUE",
                prosecnaOcena : "1",
                ukupno : "3",
                broj : "3"
            });
            localStorage.setItem("pocetna", JSON.stringify(receptiPocetna));
        }
        else {
            receptiPocetna = r;
        }

        for(let i=1; i<receptiPocetna.length; i++) {
            if(receptiPocetna[i].grupa == 'desert') {
                var cat = $("<div/>").attr("class", 'categories__list__post__item');
                var row = $("<div/>").attr("class", 'row');
                
                var slika = $("<div/>").attr("class", 'col-lg-6 col-md-6').append($("<div/>").attr("class", 'categories__post__item__pic set-bg').attr('data-setbg',"/img/categories/categories-list/skusa.jpg").css('background-image', "url(" + receptiPocetna[i].pocetnaSlika + ")"));

                var tekst = $("<div/>").attr("class", 'col-lg-6 col-md-6').append($("<div/>").attr("class", 'categories__post__item__text').append($("<ul/>").attr("class", 'post__label--large').append($("<li/>").append("" + receptiPocetna[i].grupa))).append($("<h3/>").append($("<a/>").attr("href","single-post.html").append("" + receptiPocetna[i].ime).css('font-size', '22px'))).append($("<ul/>").attr("class", "post__widget").append($("<li/>").append("trajanje ").css({'list-style' : 'none', 'font-size' : '12px', 'color' : '#888888'}).append($("<span/>").append(receptiPocetna[i].trajanje).css('color', 'black'))).append($("<li/>").append("nivo ").css({'list-style' : 'none', 'font-size' : '12px', 'color' : '#888888'}).append($("<span/>").append(receptiPocetna[i].tezina).css('color', 'black')))).append($("<p/>").append("" + receptiPocetna[i].uputstvo)));

                row.append(slika);
                row.append(tekst);
                cat.append(row);
                $("#recepti").append(cat);
            }
        }

        if(mojiRecepti != null) {
            for(let i=1; i<mojiRecepti.length; i++) {
                if(mojiRecepti[i].grupa == 'desert') {
                    var cat = $("<div/>").attr("class", 'categories__list__post__item');
                    var row = $("<div/>").attr("class", 'row');
                    
                    var slika = $("<div/>").attr("class", 'col-lg-6 col-md-6').append($("<div/>").attr("class", 'categories__post__item__pic set-bg').attr('data-setbg',"/img/categories/categories-list/skusa.jpg").css('background-image', "url(" +mojiRecepti[i].pocetnaSlika + ")"));
    
                    var tekst = $("<div/>").attr("class", 'col-lg-6 col-md-6').append($("<div/>").attr("class", 'categories__post__item__text').append($("<ul/>").attr("class", 'post__label--large').append($("<li/>").append("" + mojiRecepti[i].grupa))).append($("<h3/>").append($("<a/>").attr("href","single-post.html").append("" + mojiRecepti[i].ime).css('font-size', '22px'))).append($("<ul/>").attr("class", "post__widget").append($("<li/>").append("trajanje ").css({'list-style' : 'none', 'font-size' : '12px', 'color' : '#888888'}).append($("<span/>").append(mojiRecepti[i].trajanje).css('color', 'black'))).append($("<li/>").append("nivo ").css({'list-style' : 'none', 'font-size' : '12px', 'color' : '#888888'}).append($("<span/>").append(mojiRecepti[i].tezina).css('color', 'black')))).append($("<p/>").append("" + mojiRecepti[i].uputstvo)));
    
                    row.append(slika);
                    row.append(tekst);
                    cat.append(row);
                    $("#recepti").append(cat);
                }
            }
        }

        var rec = JSON.parse(localStorage.getItem("mojiRecepti"));
        if(rec == null) {
            return;
        }
        else {
           mojiRecepti = rec; 
        }

    }
        
    $("h3").click(function(){
        let mojiRecepti = JSON.parse(localStorage.getItem("mojiRecepti"));
        //var ime = $(this).text();
        var ime = $(this).find('a').text();
        var t=null;
        if(mojiRecepti!=null) {
            for(let i=0; i<mojiRecepti.length; i++){
                if(mojiRecepti[i].ime==ime){
                    t=mojiRecepti[i];
                }
            }
        }
        if(t==null){
            for(let i=0; i<Recepti.length; i++){
                if(Recepti[i].ime==ime){
                    t=Recepti[i];
                }
            }
        }

        localStorage.setItem("kliknutRecept",JSON.stringify(t));
    });

    $("#sortNivo").click(function() {
        
        receptiPocetna.sort((a, b) => ((a.tezina > b.tezina) ? 1 : -1));
        localStorage.setItem("pocetna", JSON.stringify(receptiPocetna));
        window.location.href = "desert.html";
    });

    $("#sortOcena").click(function() {
        receptiPocetna.sort((a, b) => ((a.prosecnaOcena > b.prosecnaOcena) ? 1 : -1));
        localStorage.setItem("pocetna", JSON.stringify(receptiPocetna));
        window.location.href = "desert.html";
    });

    var prikaz=[];
    $("#ok").click(function() {
        var tekst = $("#search-input").val();
        for(let i=1; i<receptiPocetna.length; i++) {
            if(receptiPocetna[i].ime.search(tekst) == -1) continue; 
           // alert(receptiPocetna[i].ime.search(tekst));
            prikaz.push(receptiPocetna[i]);   
        }
        //alert(receptiPocetna[1].ime);
        localStorage.setItem("pretrazeni", JSON.stringify(prikaz));
        window.location.href = "searched.html"
    });
}); 