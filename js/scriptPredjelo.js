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
        if(recepti == null || recepti[1].grupa!="predjelo") {
            komentari.push({
                ime : "Kaca",
                imeRec: "Pitice sa sirom",
                tekst : "Ukusno, a lako za pripremu."
            });
            komentari.push({
                ime : "Milan",
                imeRec: "Pitice sa sirom",
                tekst : "Mmm!"
            });
            Recepti.push({
                ime : "Pitice sa sirom",
                grupa : "predjelo",
                trajanje : "1h", 
                tezina : "2",
                uputstvo : 'Ukljuciti rernu da se zagreje na 220 stepeni. Podeliti kore na dva jednaka dela. U jednu manju posudicu staviti jaje  i umutiti ga. U drugu, vecu posudu staviti sir, kiselo mleko, so i promesati. Usuti zatim jaje, ali ostaviti malo u toj posudici, koliko da premazete rolate na kraju. To je nekoliko umakanja cetkicom. Prvo staviti dve kore i poprskati sa malo ulja. Svuda po malo na koru staviti fila. Prebaciti trecu koru i ponoviti postupak. Kada ostanete na dve zadnje kore od te polovine kora koje ste odvojili uviti rolat. Uvijate od uze strane kora. Pomerite rolat, stavite  one dve kore i onda uvijete sve zajedno. Stavite u podmazan pleh i premazete uljem. Ponovite postupak i sa drugom polovinom kora. Premazte oba rolata sa ono malo jaja sto ste ostavili i po zelji pospete morskom solju ili susamom. Stavite da se pece oko 30 minuta smanjivsi temperaturu pecenja na 200 kada ubacite pleh u rernu. Pecene pitice po vadjenju iz rerne poprskate sa dve sake vode i pokrijete krpom. Mogu da se sluze i tople i hladne, preukusne su.',
                pocetnaSlika : 'img/categories/categories-list/pitice1.jpg',
                yt : "https://www.youtube.com/embed/rvPkNEnEMOU",
                prosecnaOcena : "2",
                ukupno : "8",
                broj : "4"
            });
    
            komentari.push({
                ime : "Masa",
                imeRec: "Slana rozen torta",
                tekst : "Odlican recept!"
            });
            Recepti.push({
                ime : "Slana rozen torta",
                grupa : "predjelo",
                trajanje : "2h", 
                tezina : "4",
                uputstvo : 'Skuvajte jaja i ostavite ih da se ohlade. Izrendajte sir, jaja, sunku i krastavcice. Pomesajte kiselu pavlaku, majonez i krem sir. Odvojte oko 350 g fila sa strane (za dekoraciju). Ostatak fila podelite na dva jednaka dela. U jednu polovinu dodajte rendana jaja i sunku. U drugu polovinu dodajte rendane krastavcice i 100 g kackavlja. Sastojke dobro promesajte. Ređajte koru – fil sa sunkom i jajima – kora – fil sa krastavcicima i kackavljom sve dok ne utrosite materijal. Na kraju treba da bude kora. Preko kore stavite krpu ili foliju i stavite knjigu ili neki teret. Ostavite najmanje 30 minuta. Nakon toga celu tortu premazite sa filom od pavlake, majoneza i krem sira (koji ste na pocetku odvojili). Preko pospite rendani sir.',
                pocetnaSlika : 'img/categories/categories-list/rozen1.jpg',
                yt : "https://www.youtube.com/embed/jtgSZmzyaAo",
                prosecnaOcena : "4",
                ukupno : "16",
                broj : "4"
            });
    
            komentari.push({
                ime : "Iva",
                imeRec: "Proja sa spanacem",
                tekst : "Odlicna!"
            });
           
            Recepti.push({
                ime : "Proja sa spanacem",
                grupa : "predjelo",
                trajanje : "40min", 
                tezina : "2",
                uputstvo : 'Rernu zagrejte na 200 stepeni a pleh za mafine papirnim korpicama za pecenje ili ih podmazite uljem i pospite brasnom ukoliko nemate papirne korpice. Pomesajte jaja, ulje, kiselu vodu, jogurt i sir. Kada je sve sjedinjeno dodajte brasno, palentu, so i prasak za pecivo i mutite varjacom dok ne dobijete ujednacenu smesu. Na kraju umesajte svezi spanac. Rasporedite smesu u kalupe i pecite 20-25 minuta u zagrejanoj rerni. Smesa je dovoljna za 10 proja pecenih u kalupima za mafine standardne velicine.',
                pocetnaSlika : 'img/categories/categories-list/proja1.jpg',
                yt : "https://www.youtube.com/embed/i_RykL1o-Ww",
                prosecnaOcena : "2",
                ukupno : "6",
                broj : "3"
            });
            localStorage.setItem("komentari",JSON.stringify(komentari));
            localStorage.setItem("recepti",JSON.stringify(Recepti));
        }
        else {
            Recepti = recepti;
        }

        var r = JSON.parse(localStorage.getItem("pocetna"));
        if(r == null || r[1].grupa!="predjelo") {
            receptiPocetna.push({
                ime : "Pitice sa sirom",
                grupa : "predjelo",
                trajanje : "1h", 
                tezina : "2",
                uputstvo : 'Ukljuciti rernu da se zagreje na 220 stepeni. Podeliti kore na dva jednaka dela. U jednu manju posudicu staviti jaje  i umutiti ga. U drugu, vecu posudu staviti sir, kiselo mleko, so i promesati. Usuti zatim jaje, ali ostaviti malo u toj posudici, koliko da premazete rolate na kraju. To je...',
                pocetnaSlika : 'img/categories/categories-list/pitice.jpg',
                yt : "https://www.youtube.com/embed/rvPkNEnEMOU",
                prosecnaOcena : "2",
                ukupno : "8",
                broj : "4"
            });
    
            receptiPocetna.push({
                ime : "Slana rozen torta",
                grupa : "predjelo",
                trajanje : "2h", 
                tezina : "4",
                uputstvo : 'Skuvajte jaja i ostavite ih da se ohlade. Izrendajte sir, jaja, sunku i krastavcice. Pomesajte kiselu pavlaku, majonez i krem sir. Odvojte oko 350 g fila sa strane (za dekoraciju). Ostatak fila podelite na dva jednaka dela. U jednu polovinu dodajte rendana jaja i sunku. U drugu polovinu dodajte rendane...',
                pocetnaSlika : 'img/categories/categories-list/rozen.jpg',
                yt : "https://www.youtube.com/embed/jtgSZmzyaAo",
                prosecnaOcena : "4",
                ukupno : "16",
                broj : "4"
            });
           
            receptiPocetna.push({
                ime : "Proja sa spanacem",
                grupa : "predjelo",
                trajanje : "40min", 
                tezina : "2",
                uputstvo : 'Rernu zagrejte na 200 stepeni a pleh za mafine papirnim korpicama za pecenje ili ih podmazite uljem i pospite brasnom ukoliko nemate papirne korpice. Pomesajte jaja, ulje, kiselu vodu, jogurt i sir. Kada je sve sjedinjeno dodajte brasno, palentu, so i prasak za pecivo i mutite...',
                pocetnaSlika : 'img/categories/categories-list/proja.jpg',
                yt : "https://www.youtube.com/embed/i_RykL1o-Ww",
                prosecnaOcena : "2",
                ukupno : "6",
                broj : "3"
            });
            localStorage.setItem("pocetna", JSON.stringify(receptiPocetna));
        }
        else {
            receptiPocetna = r;
        }

        for(let i=1; i<receptiPocetna.length; i++) {
            if(receptiPocetna[i].grupa == 'predjelo') {
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
                if(mojiRecepti[i].grupa == 'predjelo') {
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
        window.location.href = "predjelo.html";
    });

    $("#sortOcena").click(function() {
        receptiPocetna.sort((a, b) => ((a.prosecnaOcena > b.prosecnaOcena) ? 1 : -1));
        localStorage.setItem("pocetna", JSON.stringify(receptiPocetna));
        window.location.href = "predjelo.html";
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