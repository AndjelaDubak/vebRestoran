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
        if(recepti == null || recepti[1].grupa!="glavno jelo") {
            komentari.push({
                ime : "Katarina",
                imeRec: "Grilovana skusa",
                tekst : "Mmm! Ukusno!"
            });
            komentari.push({
                ime : "Milan",
                imeRec: "Grilovana skusa",
                tekst : "Koliko posoliti?"
            });
            Recepti.push({
                ime : "Grilovana skusa",
                grupa : "glavno jelo",
                trajanje : "1h", 
                tezina : "5",
                uputstvo : 'Operite i ocistite ribu, pa je prosusite papirnim ubrusom. Napravite po tri reza na ribi. Posolite i pobiberite, potom prelijte limunovim sokom. Pomesajte tri cena belog luka, bosiljak i ruzmarin, maslinovo ulje. Lepo izmesajte i utrljajte ribu, posebno u rezove i unutrasnjost. Stavite ribu na rostilj koji ste pre toga premazali uljem. Povremeno ih okrecite i kada budu gotove, servirajte i ukrasite kriskama limuna, baby spanacem i ceri paradajzom.',
                pocetnaSlika : 'img/categories/categories-list/skusa1.jpg',
                yt : "https://www.youtube.com/embed/jdj2EzF7OHI",
                prosecnaOcena : "3",
                ukupno : "9",
                broj : "3"
            });
    
            komentari.push({
                ime : "Marko",
                imeRec: "Sarma",
                tekst : "Odlican recept!"
            });
            Recepti.push({
                ime : "Sarma",
                grupa : "glavno jelo",
                trajanje : "2h", 
                tezina : "4",
                uputstvo : 'Sa manjih glavica kiselog kupusa skidati jedan po jedan list, nozem odseci deblja rebra sa njih i dobro ih oprati u hladnoj vodi. Meso ocistiti od zilica i samleti.U serpu staviti 100g masti, mleveno meso i iseckan luk, pa malo proprziti. Dodati pirinac, malo mlevenog bibera, jedno jaje i soli po ukusu, pa sve dobro izmesati. U vecu serpu poređati na dno nekoliko listova kupusa. Uzimati, jedan po jedan, list kupusa, na svaki stavljati po jednu kasiku nadeva od mesa i zavijati listove U male cvrste valjke. Krajeve kupusa dobro uvuci, da ne bi nadev ispadao za vreme kuvanja. Sarme ređati u serpu, jednu pored druge, u nekoliko redova. Suvo meso i slaninu oprati u vreloj vodi, iseci na parcad, pa staviti između redova sarmi. Dodati 5-6 zrna bibera i 2 lista lorbera. Preliti sarmu hladnom vodom i kuvati na tihoj vatri oko 3-4 casa. U tiganju napraviti zaprsku od 50g masti, kasike brasna i jedne kasicice aleve paprike, preliti njome sarmu, poklopiti serpu i ostaviti da vri jos oko pola casa.Umesto hleba sa sarmom se sluzi proja.',
                pocetnaSlika : 'img/categories/categories-list/sarma1.jpg',
                yt : "https://www.youtube.com/embed/ewXhHgESReQ",
                prosecnaOcena : "4",
                ukupno : "16",
                broj : "4"
            });
    
            komentari.push({
                ime : "Ivana",
                imeRec: "Snicla u sosu od pecuraka i krompir",
                tekst : "Pravila sam juce, super je."
            });
           
            Recepti.push({
                ime : "Snicla u sosu od pecuraka i krompir",
                grupa : "glavno jelo",
                trajanje : "40min", 
                tezina : "3",
                uputstvo : 'snicle izlupati, blago usoliti i prziti na plitkoj masnoci. Sos od pecuraka: Izdinstati praziluk, dodati pecurke, persun i senf. Kada se dinstanje zavrsi dodati kiselu pavlaku i blago prokuvati zajedno. Poređjane snicle u vatrostalnoj ciniji preliti sosom i tako servirati. Restovani krompir: Skuvati krompir, zatim ga iseci na kolutove, ubaciti u dinstani luk (oko 200 grama). Posoliti i biberiti, po ukusu sjediniti.',
                pocetnaSlika : 'img/categories/categories-list/snicla1.jpg',
                yt : "https://www.youtube.com/embed/RAhNPZ2E-UE",
                prosecnaOcena : "5",
                ukupno : "15",
                broj : "3"
            });
            localStorage.setItem("komentari",JSON.stringify(komentari));
            localStorage.setItem("recepti",JSON.stringify(Recepti));
        }
        else {
            Recepti = recepti;
        }

        var r = JSON.parse(localStorage.getItem("pocetna"));
        if(r == null || r[1].grupa!="glavno jelo") {
            receptiPocetna.push({
                ime : "Grilovana skusa",
                grupa : "glavno jelo",
                trajanje : "1h", 
                tezina : "5",
                uputstvo : 'Operite i ocistite ribu, pa je prosusite papirnim ubrusom. Napravite po tri reza na ribi. Posolite i pobiberite, potom prelijte limunovim sokom. Pomesajte tri cena belog luka, bosiljak i ruzmarin, maslinovo ulje. Lepo izmesajte i utrljajte ribu, posebno u rezove i unutrasnjost. Stavite ribu na rostilj koji ste pre toga premazali uljem. Povremeno ih okrecite i kada budu gotove...',
                pocetnaSlika : 'img/categories/categories-list/skusa.jpg',
                yt : "https://www.youtube.com/embed/jdj2EzF7OHI",
                prosecnaOcena : "3",
                ukupno : "9",
                broj : "3"
            });
    
            receptiPocetna.push({
                ime : "Sarma",
                grupa : "glavno jelo",
                trajanje : "2h", 
                tezina : "4",
                uputstvo : 'Sa manjih glavica kiselog kupusa skidati jedan po jedan list, nozem odseci deblja rebra sa njih i dobro ih oprati u hladnoj vodi. Meso ocistiti od zilica i samleti.U serpu staviti 100g masti, mleveno meso i iseckan luk, pa malo proprziti. Dodati pirinac, malo mlevenog bibera, jedno jaje i soli po ukusu, pa sve dobro izmesati. U vecu serpu poredjati na dno nekoliko listova...',
                pocetnaSlika : 'img/categories/categories-list/sarma.jpg',
                yt : "https://www.youtube.com/embed/ewXhHgESReQ",
                prosecnaOcena : "4",
                ukupno : "16",
                broj : "4"
            });
           
            receptiPocetna.push({
                ime : "Snicla u sosu od pecuraka i krompir",
                grupa : "glavno jelo",
                trajanje : "40min", 
                tezina : "3",
                uputstvo : 'Snicle izlupati, blago usoliti i prziti na plitkoj masnoci. Sos od pecuraka: Izdinstati praziluk, dodati pecurke, persun i senf. Kada se dinstanje zavrsi dodati kiselu pavlaku i blago prokuvati zajedno. Poređjane snicle u vatrostalnoj ciniji preliti sosom i tako servirati. Restovani krompir: Skuvati krompir, zatim ga iseci na kolutove, ubaciti u dinstani luk (oko 200 grama)...',
                pocetnaSlika : 'img/categories/categories-list/snicla.jpg',
                yt : "https://www.youtube.com/embed/RAhNPZ2E-UE",
                prosecnaOcena : "5",
                ukupno : "15",
                broj : "3"
            });
            localStorage.setItem("pocetna", JSON.stringify(receptiPocetna));
        }
        else {
            receptiPocetna = r;
        }

        for(let i=1; i<receptiPocetna.length; i++) {
            if(receptiPocetna[i].grupa == 'glavno jelo') {
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
                if(mojiRecepti[i].grupa == 'glavno jelo') {
                    var cat = $("<div/>").attr("class", 'categories__list__post__item');
                    var row = $("<div/>").attr("class", 'row');
                    
                    var slika = $("<div/>").attr("class", 'col-lg-6 col-md-6').append($("<div/>").attr("class", 'categories__post__item__pic set-bg').attr('data-setbg',"/img/categories/categories-list/skusa.jpg").css('background-image', "url(" +mojiRecepti[i].pocetnaSlika + ")"));
    
                    var tekst = $("<div/>").attr("class", 'col-lg-6 col-md-6').append($("<div/>").attr("class", 'categories__post__item__text').append($("<ul/>").attr("class", 'post__label--large').append($("<li/>").append("" + mojiRecepti[i].grupa))).append($("<h3/>").append($("<a/>").attr("id", "nas" + i).attr("href","single-post.html").append("" + mojiRecepti[i].ime).css('font-size', '22px'))).append($("<ul/>").attr("class", "post__widget").append($("<li/>").append("trajanje ").css({'list-style' : 'none', 'font-size' : '12px', 'color' : '#888888'}).append($("<span/>").append(mojiRecepti[i].trajanje).css('color', 'black'))).append($("<li/>").append("nivo ").css({'list-style' : 'none', 'font-size' : '12px', 'color' : '#888888'}).append($("<span/>").append(mojiRecepti[i].tezina).css('color', 'black')))).append($("<p/>").append("" + mojiRecepti[i].uputstvo)));
    
                    row.append(slika);
                    row.append(tekst);
                    cat.append(row);
                    $("#recepti").append(cat);

                   /*$("#nas" + i).click(function(){
                       // alert("jafk");
                        klik(this);
                    });*/
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
        //let Recepti = JSON.parse(localStorage.getItem("recepti"));
        var ime = $(this).find('a').text();
       // alert(ime);
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
        window.location.href = "glavno_jelo.html";
    });

    $("#sortOcena").click(function() {
        receptiPocetna.sort((a, b) => ((a.prosecnaOcena > b.prosecnaOcena) ? 1 : -1));
        localStorage.setItem("pocetna", JSON.stringify(receptiPocetna));
        window.location.href = "glavno_jelo.html";
    });

    var prikaz=[];
    $("#ok").click(function() {
        var tekst = $("#search-input").val();
        for(let i=1; i<receptiPocetna.length; i++) {
            if(receptiPocetna[i].ime.search(tekst) == -1) continue; 
            //alert(receptiPocetna[i].ime.search(tekst));
            prikaz.push(receptiPocetna[i]);   
        }
        //alert(receptiPocetna[1].ime);
        localStorage.setItem("pretrazeni", JSON.stringify(prikaz));
        window.location.href = "searched.html"
    });
}); 