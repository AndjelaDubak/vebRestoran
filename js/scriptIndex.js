$(document).ready(function() {

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

    inicijalizuj();
    var niz;
    function inicijalizuj() {
        var all = JSON.parse(localStorage.getItem("svi"));
        if(all == null || all[1].grupa!='glavno jelo') {
            svi.push({
                ime : "Grilovana skusa",
                grupa : "glavno jelo",
                trajanje : "1h", 
                tezina : "5",
                uputstvo : 'Operite i ocistite ribu, pa je prosusite papirnim ubrusom. Napravite po tri reza na ribi. Posolite i pobiberite, potom prelijte limunovim sokom. Pomesajte tri cena belog luka, bosiljak i ruzmarin, maslinovo ulje. Lepo izmesajte i utrljajte ribu, posebno u rezove i unutrasnjost. Stavite ribu na rostilj koji ste pre toga premazali uljem. Povremeno ih okrecite i kada budu gotove, servirajte i ukrasite kriskama limuna, baby spanacem i ceri paradajzom.',
                pocetnaSlika : 'img/categories/categories-list/skusa1.jpg',
                slika : 'img/categories/categories-list/skusa.jpg',
                yt : "https://www.youtube.com/embed/jdj2EzF7OHI",
                prosecnaOcena : "3",
                ukupno : "9",
                broj : "3"
            });
        
            svi.push({
                ime : "Sarma",
                grupa : "glavno jelo",
                trajanje : "2h", 
                tezina : "4",
                uputstvo : 'Sa manjih glavica kiselog kupusa skidati jedan po jedan list, nozem odseci deblja rebra sa njih i dobro ih oprati u hladnoj vodi. Meso ocistiti od zilica i samleti.U serpu staviti 100g masti, mleveno meso i iseckan luk, pa malo proprziti. Dodati pirinac, malo mlevenog bibera, jedno jaje i soli po ukusu, pa sve dobro izmesati. U vecu serpu poređati na dno nekoliko listova kupusa. Uzimati, jedan po jedan, list kupusa, na svaki stavljati po jednu kasiku nadeva od mesa i zavijati listove U male cvrste valjke. Krajeve kupusa dobro uvuci, da ne bi nadev ispadao za vreme kuvanja. Sarme ređati u serpu, jednu pored druge, u nekoliko redova. Suvo meso i slaninu oprati u vreloj vodi, iseci na parcad, pa staviti između redova sarmi. Dodati 5-6 zrna bibera i 2 lista lorbera. Preliti sarmu hladnom vodom i kuvati na tihoj vatri oko 3-4 casa. U tiganju napraviti zaprsku od 50g masti, kasike brasna i jedne kasicice aleve paprike, preliti njome sarmu, poklopiti serpu i ostaviti da vri jos oko pola casa.Umesto hleba sa sarmom se sluzi proja.',
                pocetnaSlika : 'img/categories/categories-list/sarma1.jpg',
                slika : 'img/categories/categories-list/sarma.jpg',
                yt : "https://www.youtube.com/embed/ewXhHgESReQ",
                prosecnaOcena : "4",
                ukupno : "16",
                broj : "4"
            });
        
            svi.push({
                ime : "Snicla u sosu od pecuraka i krompir",
                grupa : "glavno jelo",
                trajanje : "40min", 
                tezina : "3",
                uputstvo : 'snicle izlupati, blago usoliti i prziti na plitkoj masnoci. Sos od pecuraka: Izdinstati praziluk, dodati pecurke, persun i senf. Kada se dinstanje zavrsi dodati kiselu pavlaku i blago prokuvati zajedno. Poređjane snicle u vatrostalnoj ciniji preliti sosom i tako servirati. Restovani krompir: Skuvati krompir, zatim ga iseci na kolutove, ubaciti u dinstani luk (oko 200 grama). Posoliti i biberiti, po ukusu sjediniti.',
                pocetnaSlika : 'img/categories/categories-list/snicla1.jpg',
                slika : 'img/categories/categories-list/snicla.jpg',
                yt : "https://www.youtube.com/embed/RAhNPZ2E-UE",
                prosecnaOcena : "5",
                ukupno : "15",
                broj : "3"
            });
        
            svi.push({
                ime : "Pitice sa sirom",
                grupa : "predjelo",
                trajanje : "1h", 
                tezina : "2",
                uputstvo : 'Ukljuciti rernu da se zagreje na 220 stepeni. Podeliti kore na dva jednaka dela. U jednu manju posudicu staviti jaje  i umutiti ga. U drugu, vecu posudu staviti sir, kiselo mleko, so i promesati. Usuti zatim jaje, ali ostaviti malo u toj posudici, koliko da premazete rolate na kraju. To je nekoliko umakanja cetkicom. Prvo staviti dve kore i poprskati sa malo ulja. Svuda po malo na koru staviti fila. Prebaciti trecu koru i ponoviti postupak. Kada ostanete na dve zadnje kore od te polovine kora koje ste odvojili uviti rolat. Uvijate od uze strane kora. Pomerite rolat, stavite  one dve kore i onda uvijete sve zajedno. Stavite u podmazan pleh i premazete uljem. Ponovite postupak i sa drugom polovinom kora. Premazte oba rolata sa ono malo jaja sto ste ostavili i po zelji pospete morskom solju ili susamom. Stavite da se pece oko 30 minuta smanjivsi temperaturu pecenja na 200 kada ubacite pleh u rernu. Pecene pitice po vadjenju iz rerne poprskate sa dve sake vode i pokrijete krpom. Mogu da se sluze i tople i hladne, preukusne su.',
                pocetnaSlika : 'img/categories/categories-list/pitice1.jpg',
                slika : 'img/categories/categories-list/pitice.jpg',
                yt : "https://www.youtube.com/embed/rvPkNEnEMOU",
                prosecnaOcena : "2",
                ukupno : "8",
                broj : "4"
            });
        
            svi.push({
                ime : "Slana rozen torta",
                grupa : "predjelo",
                trajanje : "2h", 
                tezina : "4",
                uputstvo : 'Skuvajte jaja i ostavite ih da se ohlade. Izrendajte sir, jaja, sunku i krastavcice. Pomesajte kiselu pavlaku, majonez i krem sir. Odvojte oko 350 g fila sa strane (za dekoraciju). Ostatak fila podelite na dva jednaka dela. U jednu polovinu dodajte rendana jaja i sunku. U drugu polovinu dodajte rendane krastavcice i 100 g kackavlja. Sastojke dobro promesajte. Ređajte koru – fil sa sunkom i jajima – kora – fil sa krastavcicima i kackavljom sve dok ne utrosite materijal. Na kraju treba da bude kora. Preko kore stavite krpu ili foliju i stavite knjigu ili neki teret. Ostavite najmanje 30 minuta. Nakon toga celu tortu premazite sa filom od pavlake, majoneza i krem sira (koji ste na pocetku odvojili). Preko pospite rendani sir.',
                pocetnaSlika : 'img/categories/categories-list/rozen.jpg',
                slika : 'img/categories/categories-list/rozen1.jpg',
                yt : "https://www.youtube.com/embed/jtgSZmzyaAo",
                prosecnaOcena : "4",
                ukupno : "16",
                broj : "4"
            });
        
            svi.push({
                ime : "Proja sa spanacem",
                grupa : "predjelo",
                trajanje : "40min", 
                tezina : "2",
                uputstvo : 'Rernu zagrejte na 200 stepeni a pleh za mafine papirnim korpicama za pecenje ili ih podmazite uljem i pospite brasnom ukoliko nemate papirne korpice. Pomesajte jaja, ulje, kiselu vodu, jogurt i sir. Kada je sve sjedinjeno dodajte brasno, palentu, so i prasak za pecivo i mutite varjacom dok ne dobijete ujednacenu smesu. Na kraju umesajte svezi spanac. Rasporedite smesu u kalupe i pecite 20-25 minuta u zagrejanoj rerni. Smesa je dovoljna za 10 proja pecenih u kalupima za mafine standardne velicine.',
                pocetnaSlika : 'img/categories/categories-list/proja1.jpg',
                slika : 'img/categories/categories-list/proja.jpg',
                yt : "https://www.youtube.com/embed/i_RykL1o-Ww",
                prosecnaOcena : "2",
                ukupno : "6",
                broj : "3"
            });
        
            svi.push({
                ime : "Kompot od jabuka",
                grupa : "uzina",
                trajanje : "1h", 
                tezina : "2",
                uputstvo : 'Iseckajte jabuke, prelijte ih vodom i kuvajte oko pola sata. Kad je kompot od jabuka gotov, dodajte mu dve supene kasike ovsenih pahuljica. Sacekajte malo da pahuljice nabubre, sklonite ih sa vaseg sporeta i dodajte im malo cimeta. Na ovaj nacin mozete kuvati kompot od krusaka, bobicastog voca, sljiva (svezih, suvih) – ne mozete omanuti, sve su to zdravi međuobroci koji su vise nego ukusni.',
                pocetnaSlika : 'img/categories/categories-list/kompot1.jpg',
                slika : 'img/categories/categories-list/kompot.jpg',
                yt : "https://www.youtube.com/embed/U9mjwAE1RnQ",
                prosecnaOcena : "3",
                ukupno : "9",
                broj : "3"
            });
            
            svi.push({
                ime : "stanglice sa bademom i kokosom",
                grupa : "uzina",
                trajanje : "2h", 
                tezina : "3",
                uputstvo : 'Zagrejte rernu na 160 C. Oblozite kvadratni pleh (stranice oko 20 cm) papirom za pecenje. Ostavite po strani. Sipajte bademe, listice kokosa i so (ako je koristite) u veliku posudu i promesajte. Prelijte ovu smesu javorovim sirupom. Mesajte dok se sve dobro ne sjedini. Ovu smesu sipajte u pripremljeni pleh za pecenje. Pomoću gumene lopatice ili varjace pritisnite mesavinu i uglacajte je u cvrsto nabijeni, ujednaceni sloj. Pecite 25-35 minuta (u zavisnosti od rerne). stanglice se moraju temeljno ispeći, jer se inace neće drzati zajedno kada se ohlade. Ostavite u plehu da se ohladi 1 sat (ili dok se potpuno ne ohladi). Stisnite suprotne krajeve obloge od papira za pecenje, i podignite iz pleha. Lagano skinite papir sa dna. Isecite na 12 traka (6 redova po 2 kolone). ',
                pocetnaSlika : 'img/categories/categories-list/stanglice1.jpg',
                slika : 'img/categories/categories-list/badem.jpg',
                yt : "https://www.youtube.com/embed/zbtHwZGmxDA",
                prosecnaOcena : "1",
                ukupno : "3",
                broj : "3"
            });
        
            svi.push({
                ime : "Vocna salata",
                grupa : "uzina",
                trajanje : "3h", 
                tezina : "5",
                uputstvo : 'Jabuku ogulite i nasecite na sitniju parcad. Dodajte i naseckanu pomorandzu i banane, kao i malo borovnica. Sve prelijte limunovim sokom i punom kasikom meda. Jagode nasecite na polovine (ja sam koristila smrznute), pa ih pospite vanilin secerom. Sve sjedinite i dobro promesajte. Punite case i dekorisite slagom i borovnicama.',
                pocetnaSlika : 'img/categories/categories-list/vocna1.jpg',
                slika : 'img/categories/categories-list/fruit.jpg',
                yt : "https://www.youtube.com/embed/R4bDe-vX_wo",
                prosecnaOcena : "4.5",
                ukupno : "9",
                broj : "2"
            });
        
            svi.push({
                ime : "cokoladni sufle",
                grupa : "desert",
                trajanje : "2h", 
                tezina : "3",
                uputstvo : 'Umutiti jaja, secer, i brasno. Posebno na sporetu lagano istopiti cokoladu sa maslacem; zatim to, sjediniti u prethodno umucenu masu od (jaja, brasna i secera). Priprema jeste do 20-ak minuta ali imajte u vidu da se napravljena smesa, mora, najpre ohladiti jedno 2-3 sata pre pecenja. Smesom puniti do 2/3 modle. Peci u zagrejanoj rerni na 250 stepeni tacno 7 minuta.',
                pocetnaSlika : 'img/categories/categories-list/sufle1.jpg',
                slika : 'img/categories/categories-list/sufle.jpg',
                yt : "https://www.youtube.com/embed/xmQrucN0kmA",
                prosecnaOcena : "4",
                ukupno : "16",
                broj : "4"
            });
        
            svi.push({
                ime : "Cheese Cake",
                grupa : "desert",
                trajanje : "3h", 
                tezina : "5",
                uputstvo : 'Margarin pomesate sa keksom i napravite koru. Umutite slag, u koji dodate secer. Kada je to umuceno dodate kiselu pavlaku, i sir. U sve to stavite zelatin koji ste pripremili na sledeci nacin: U malu serpicu, stavite 4 kasike hladne vode i zelatin (10 g) i to mesate, i odmah neposredno pre kljucanja skinete sa vatre i odmah stavite u fil i mutite mikserom jos minut. Oblikujete koru i stavite u frizider da se ohladi i pocnete da pravite fil od voca. U posebnu posudu 15-ak min. kuvate maline pomesane sa 4 kasike secera i kada je pri kraju kuvano, sastavite preostalih 10 grama zelatina sa tim i promesate a zatim sada njih ostavite u frizider da se malo ohlade. Spremni smo za filovanje kao i najlepsi deo pravljenja ovog recepta. Najpre preko kore stavite beli fil, a preko belog zatim i vocni crveni. Uzivajte ! (za dekoraciju je pozeljno staviti na tacnu maline 2,3 ukoliko su vam ostale )',
                pocetnaSlika : 'img/categories/categories-list/cheese1.jpg',
                slika : 'img/categories/categories-list/cheese.jpg',
                yt : "https://www.youtube.com/embed/FZCd6_WaIUE",
                prosecnaOcena : "1",
                ukupno : "3",
                broj : "3"
            });
        
            svi.push({
                ime : "Banane sa karamel prelivom",
                grupa : "desert",
                trajanje : "2h", 
                tezina : "4",
                uputstvo : 'U serpi otopite puter. Dodajte secer i kuvajte dok ne postane braon. Polako dodajte pavlaku i ostavite da vri 1 minut. Stavite banane u tiganj da se zagreju. Sklonite sa vatre, stavite u tanjir i prelijte filom. Po zelji dodajte cimet i/ili sladoled.',
                pocetnaSlika : 'img/categories/categories-list/banane1.jpg',
                slika : 'img/categories/categories-list/banana.jpg',
                yt : "https://www.youtube.com/embed/Z2qqHfoaOw4",
                prosecnaOcena : "3",
                ukupno : "9",
                broj : "3"
            });
            localStorage.setItem("svi", JSON.stringify(svi));
        }
        else {
            svi = all;
        }
        niz = svi;

        for(let i=1; i<4;i++) {
            max = nadjiMax(niz);
            $("#best").append($("<div/>").attr("class", 'col-lg-4 col-md-4 col-sm-12').append($("<div/>").attr("class", "categories__item set-bg").attr('data-setbg', max.slika).css('background-image', "url(" + max.slika + ")").append($("<div/>").attr("class", 'categories__hover__text').append($("<h5/>").append($("<a/>").attr("href","single-post.html").append(max.ime)).append($("<p/>").append("ocena: " + max.prosecnaOcena))))));
        }
        
        
    }

    function nadjiMax(niz) {
        var index = 0;
        var max = 0;
        var best;
        for(let i=0;i<niz.length;i++) {
            if(niz[i].prosecnaOcena > max) {
                index = i;
                max = niz[i].prosecnaOcena;
                best = niz[i];
            }
        }
        niz.splice(index,1);
        return best;
    }

    $("h5").click(function(){
        //var ime = $(this).text();
        var ime = $(this).find('a').text();
        var t=null;
        var svii = JSON.parse(localStorage.getItem("svi"));
        for(let i=0; i<svii.length; i++){
           // alert(svii[i].ime);
            if(svii[i].ime==ime){
                
                t=svii[i];
            }
        }

        localStorage.setItem("kliknutRecept",JSON.stringify(t));
    });
    
});