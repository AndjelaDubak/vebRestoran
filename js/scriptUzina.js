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
        if(recepti == null || recepti[1].grupa!="uzina") {
            komentari.push({
                ime : "Mina",
                imeRec: "Kompot od jabuka",
                tekst : "Slatko i zdravo."
            });
            komentari.push({
                ime : "Misa",
                imeRec: "Kompot od jabuka",
                tekst : "Divno."
            });
            Recepti.push({
                ime : "Kompot od jabuka",
                grupa : "uzina",
                trajanje : "1h", 
                tezina : "2",
                uputstvo : 'Iseckajte jabuke, prelijte ih vodom i kuvajte oko pola sata. Kad je kompot od jabuka gotov, dodajte mu dve supene kasike ovsenih pahuljica. Sacekajte malo da pahuljice nabubre, sklonite ih sa vaseg sporeta i dodajte im malo cimeta. Na ovaj nacin mozete kuvati kompot od krusaka, bobicastog voca, sljiva (svezih, suvih) – ne mozete omanuti, sve su to zdravi medjuobroci koji su vise nego ukusni.',
                pocetnaSlika : 'img/categories/categories-list/kompot1.jpg',
                yt : "https://www.youtube.com/embed/U9mjwAE1RnQ",
                prosecnaOcena : "3",
                ukupno : "9",
                broj : "3"
            });
    
            komentari.push({
                ime : "Masa",
                imeRec: "Stanglice sa bademom i kokosom",
                tekst : "Obozavam!"
            });
            Recepti.push({
                ime : "Stanglice sa bademom i kokosom",
                grupa : "uzina",
                trajanje : "2h", 
                tezina : "3",
                uputstvo : 'Zagrejte rernu na 160 C. Oblozite kvadratni pleh (stranice oko 20 cm) papirom za pecenje. Ostavite po strani. Sipajte bademe, listice kokosa i so (ako je koristite) u veliku posudu i promesajte. Prelijte ovu smesu javorovim sirupom. Mesajte dok se sve dobro ne sjedini. Ovu smesu sipajte u pripremljeni pleh za pecenje. Pomoću gumene lopatice ili varjace pritisnite mesavinu i uglacajte je u cvrsto nabijeni, ujednaceni sloj. Pecite 25-35 minuta (u zavisnosti od rerne). stanglice se moraju temeljno ispeći, jer se inace neće drzati zajedno kada se ohlade. Ostavite u plehu da se ohladi 1 sat (ili dok se potpuno ne ohladi). Stisnite suprotne krajeve obloge od papira za pecenje, i podignite iz pleha. Lagano skinite papir sa dna. Isecite na 12 traka (6 redova po 2 kolone). ',
                pocetnaSlika : 'img/categories/categories-list/stanglice1.jpg',
                yt : "https://www.youtube.com/embed/zbtHwZGmxDA",
                prosecnaOcena : "1",
                ukupno : "3",
                broj : "3"
            });
    
            komentari.push({
                ime : "Iva",
                imeRec: "Vocna salata",
                tekst : "Osvezavajuce."
            });
           
            Recepti.push({
                ime : "Vocna salata",
                grupa : "uzina",
                trajanje : "3h", 
                tezina : "5",
                uputstvo : 'Jabuku ogulite i nasecite na sitniju parcad. Dodajte i naseckanu pomorandzu i banane, kao i malo borovnica. Sve prelijte limunovim sokom i punom kasikom meda. Jagode nasecite na polovine (ja sam koristila smrznute), pa ih pospite vanilin secerom. Sve sjedinite i dobro promesajte. Punite case i dekorisite slagom i borovnicama.',
                pocetnaSlika : 'img/categories/categories-list/vocna1.jpg',
                yt : "https://www.youtube.com/embed/R4bDe-vX_wo",
                prosecnaOcena : "4.5",
                ukupno : "9",
                broj : "2"
            });
            localStorage.setItem("komentari",JSON.stringify(komentari));
            localStorage.setItem("recepti",JSON.stringify(Recepti));
        }
        else {
            Recepti = recepti;
        }

        var r = JSON.parse(localStorage.getItem("pocetna"));
        if(r == null || r[1].grupa!="uzina") {
            receptiPocetna.push({
                ime : "Kompot od jabuka",
                grupa : "uzina",
                trajanje : "1h", 
                tezina : "2",
                uputstvo : 'Iseckajte jabuke, prelijte ih vodom i kuvajte oko pola sata. Kad je kompot od jabuka gotov, dodajte mu dve supene kasike ovsenih pahuljica. Sacekajte malo da pahuljice nabubre, sklonite ih sa vaseg sporeta i dodajte im malo cimeta. Na ovaj nacin mozete kuvati kompot od krusaka, bobicastog voca, sljiva (svezih, suvih) – ne mozete omanuti...',
                pocetnaSlika : 'img/categories/categories-list/kompot.jpg',
                yt : "https://www.youtube.com/embed/U9mjwAE1RnQ",
                prosecnaOcena : "3",
                ukupno : "9",
                broj : "3"
            });
    
            receptiPocetna.push({
                ime : "Stanglice sa bademom i kokosom",
                grupa : "uzina",
                trajanje : "2h", 
                tezina : "3",
                uputstvo : 'Zagrejte rernu na 160 C. Oblozite kvadratni pleh (stranice oko 20 cm) papirom za pecenje. Ostavite po strani. Sipajte bademe, listice kokosa i so (ako je koristite) u veliku posudu i promesajte. Prelijte ovu smesu javorovim sirupom. Mesajte dok se sve dobro ne sjedini. Ovu smesu sipajte u pripremljeni pleh za pecenje. Pomoću gumene lopatice ili varjace pritisnite... ',
                pocetnaSlika : 'img/categories/categories-list/badem.jpg',
                yt : "https://www.youtube.com/embed/zbtHwZGmxDA",
                prosecnaOcena : "1",
                ukupno : "3",
                broj : "3"
            });
           
            receptiPocetna.push({
                ime : "Vocna salata",
                grupa : "uzina",
                trajanje : "3h", 
                tezina : "5",
                uputstvo : 'Jabuku ogulite i nasecite na sitniju parcad. Dodajte i naseckanu pomorandzu i banane, kao i malo borovnica. Sve prelijte limunovim sokom i punom kasikom meda. Jagode nasecite na polovine (ja sam koristila smrznute), pa ih pospite vanilin secerom. Sve sjedinite i dobro promesajte. Punite case i dekorisite slagom i borovnicama.',
                pocetnaSlika : 'img/categories/categories-list/fruit.jpg',
                yt : "https://www.youtube.com/embed/R4bDe-vX_wo",
                prosecnaOcena : "4.5",
                ukupno : "9",
                broj : "2"
            });
            localStorage.setItem("pocetna", JSON.stringify(receptiPocetna));
        }
        else {
            receptiPocetna = r;
        }

        for(let i=1; i<receptiPocetna.length; i++) {
            if(receptiPocetna[i].grupa == 'uzina') {
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
                if(mojiRecepti[i].grupa == 'uzina') {
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

        /*for(let i=1; i<mojiRecepti.length; i++) {
            if(mojiRecepti[i].grupa == 'uzina') {
                var cat = $("<div/>").attr("class", 'categories__list__post__item');
                var row = $("<div/>").attr("class", 'row');
                
                var slika = $("<div/>").attr("class", 'col-lg-6 col-md-6').append($("<div/>").attr("class", 'categories__post__item__pic set-bg').attr('data-setbg',"/img/categories/categories-list/skusa.jpg").css('background-image', "url(" + "img/categories/categories-list/u" + i + ".jpg"));

                var tekst = $("<div/>").attr("class", 'col-lg-6 col-md-6').append($("<div/>").attr("class", 'categories__post__item__text').append($("<ul/>").attr("class", 'post__label--large').append($("<li/>").append("" + mojiRecepti[i].grupa))).append($("<h3/>").append($("<a/>").attr("href","single-post.html").append("" + mojiRecepti[i].ime).css('font-size', '22px'))).append($("<ul/>").attr("class", "post__widget").append($("<li/>").append("trajanje ").css({'list-style' : 'none', 'font-size' : '12px', 'color' : '#888888'}).append($("<span/>").append(mojiRecepti[i].trajanje).css('color', 'black'))).append($("<li/>").append("nivo ").css({'list-style' : 'none', 'font-size' : '12px', 'color' : '#888888'}).append($("<span/>").append(mojiRecepti[i].tezina).css('color', 'black')))).append($("<p/>").append("" + mojiRecepti[i].uputstvo)));

                row.append(slika);
                row.append(tekst);
                cat.append(row);
                $("#recepti").append(cat);
            }
        }*/

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
        window.location.href = "uzina.html";
    });

    $("#sortOcena").click(function() {
        receptiPocetna.sort((a, b) => ((a.prosecnaOcena > b.prosecnaOcena) ? 1 : -1));
        localStorage.setItem("pocetna", JSON.stringify(receptiPocetna));
        window.location.href = "uzina.html";
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