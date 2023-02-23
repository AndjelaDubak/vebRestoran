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
        if(recepti == null || recepti[1].grupa!="main dish") {
            komentari.push({
                ime : "Katarina",
                imeRec: "Grilled fish",
                tekst : "Mmm! Delicious!"
            });
            komentari.push({
                ime : "Milan",
                imeRec: "Grilled fish",
                tekst : "How much salt?"
            });
            Recepti.push({
                ime : "Grilled fish",
                grupa : "main dish",
                trajanje : "1h", 
                tezina : "5",
                uputstvo : 'Wash and clean the fish, then dry it with a paper towel. Make three cuts on the fish. Add salt and pepper, then pour lemon juice. Mix three cloves of garlic, basil and rosemary, olive oil. Mix and rub the fish nicely, especially in the cuts and inside. Put the fish on the grill that you previously coated with oil. Turn them occasionally and when they are done, serve and garnish with lemon slices, baby spinach and cherry tomatoes.',
                pocetnaSlika : 'img/categories/categories-list/skusa1.jpg',
                yt : "https://www.youtube.com/embed/jdj2EzF7OHI",
                prosecnaOcena : "3",
                ukupno : "9",
                broj : "3"
            });
    
            komentari.push({
                ime : "Marko",
                imeRec: "Sarma",
                tekst : "Sooo good!"
            });
            Recepti.push({
                ime : "Sarma",
                grupa : "main dish",
                trajanje : "2h", 
                tezina : "4",
                uputstvo : 'Remove one leaf at a time from the smaller heads of sauerkraut, cut off the thicker ribs from them with a knife and wash them well in cold water. Clean the meat from the veins and grind it. Put 100 g of fat, minced meat and chopped onion in the sherpa, then fry a little. Add rice, a little ground pepper, one egg and salt to taste, and mix everything well. Arrange a few cabbage leaves on the bottom of the larger sherpa. Take, one by one, a cabbage leaf, put one spoonful of meat stuffing on each one and wrap the leaves in small firm rolls. Pull the ends of the cabbage well, so that the hope does not fall out during cooking. Arrange the sarma in a sherpa, side by side, in several rows. Wash the dried meat and bacon in hot water, cut it into pieces, and put it between the rows of sarma. Add 5-6 peppercorns and 2 bay leaves. Pour cold water over the sarma and cook on low heat for about 3-4 hours. In a pan, make a mixture of 50 g of fat, a spoonful of flour and one teaspoon of allspice, pour over the sarma, cover the sherpa and let it boil for another half an hour. Instead of bread with sarma, serve proja.',
                pocetnaSlika : 'img/categories/categories-list/sarma1.jpg',
                yt : "https://www.youtube.com/embed/ewXhHgESReQ",
                prosecnaOcena : "4",
                ukupno : "16",
                broj : "4"
            });
    
            komentari.push({
                ime : "Ivana",
                imeRec: "Steak in mushroom sauce and potatoes",
                tekst : "Awesome, i made it yesterday."
            });
           
            Recepti.push({
                ime : "Steak in mushroom sauce and potatoes",
                grupa : "main dish",
                trajanje : "40min", 
                tezina : "3",
                uputstvo : 'Beat the steak, add a little salt and fry in shallow fat. Mushroom sauce: Saute leeks, add mushrooms, parsley and mustard. When the stewing is finished, add sour cream and cook gently together. Pour the sauce over the arranged steaks in a fireproof bowl and serve that way. Restored potatoes: Boil the potatoes, then cut them into rings, put them in stewed onions (about 200 grams). Add salt and pepper, combine to taste.',
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
        if(r == null || r[1].grupa!="main dish") {
            receptiPocetna.push({
                ime : "Grilled fish",
                grupa : "main dish",
                trajanje : "1h", 
                tezina : "5",
                uputstvo : 'Wash and clean the fish, then dry it with a paper towel. Make three cuts on the fish. Add salt and pepper, then pour lemon juice. Mix three cloves of garlic, basil and rosemary, olive oil. Mix and rub the fish nicely, especially in the cuts and inside. Put the fish on the grill that you previously coated with oil. Turn them occasionally and when they are done ...',
                pocetnaSlika : 'img/categories/categories-list/skusa.jpg',
                yt : "https://www.youtube.com/embed/jdj2EzF7OHI",
                prosecnaOcena : "3",
                ukupno : "9",
                broj : "3"
            });
    
            receptiPocetna.push({
                ime : "Sarma",
                grupa : "main dish",
                trajanje : "2h", 
                tezina : "4",
                uputstvo : 'Remove one leaf at a time from the smaller heads of sauerkraut, cut off the thicker ribs from them with a knife and wash them well in cold water. Clean the meat from the veins and grind it. Put 100 g of fat, minced meat and chopped onion in the sherpa, then fry a little. Add rice, a little ground pepper, one egg and salt to taste, and mix everything well. Arrange a few leaves on the bottom of a larger sherpa ...',
                pocetnaSlika : 'img/categories/categories-list/sarma.jpg',
                yt : "https://www.youtube.com/embed/ewXhHgESReQ",
                prosecnaOcena : "4",
                ukupno : "16",
                broj : "4"
            });
           
            receptiPocetna.push({
                ime : "Steak in mushroom sauce and potatoes",
                grupa : "main dish",
                trajanje : "40min", 
                tezina : "3",
                uputstvo : 'Beat the steak, add a little salt and fry in shallow fat. Mushroom sauce: Saute leeks, add mushrooms, parsley and mustard. When the stewing is finished, add sour cream and cook gently together. Pour the sauce over the arranged steaks in a fireproof bowl and serve that way. Restored potatoes: Boil the potatoes, then cut them into rings, put them in stewed onions (about 200 grams) ...',
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
            if(receptiPocetna[i].grupa == 'main dish') {
                var cat = $("<div/>").attr("class", 'categories__list__post__item');
                var row = $("<div/>").attr("class", 'row');
                
                var slika = $("<div/>").attr("class", 'col-lg-6 col-md-6').append($("<div/>").attr("class", 'categories__post__item__pic set-bg').attr('data-setbg',"/img/categories/categories-list/skusa.jpg").css('background-image', "url(" + receptiPocetna[i].pocetnaSlika + ")"));

                var tekst = $("<div/>").attr("class", 'col-lg-6 col-md-6').append($("<div/>").attr("class", 'categories__post__item__text').append($("<ul/>").attr("class", 'post__label--large').append($("<li/>").append("" + receptiPocetna[i].grupa))).append($("<h3/>").append($("<a/>").attr("href","single-post_eng.html").append("" + receptiPocetna[i].ime).css('font-size', '22px'))).append($("<ul/>").attr("class", "post__widget").append($("<li/>").append("prep time ").css({'list-style' : 'none', 'font-size' : '12px', 'color' : '#888888'}).append($("<span/>").append(receptiPocetna[i].trajanje).css('color', 'black'))).append($("<li/>").append("level ").css({'list-style' : 'none', 'font-size' : '12px', 'color' : '#888888'}).append($("<span/>").append(receptiPocetna[i].tezina).css('color', 'black')))).append($("<p/>").append("" + receptiPocetna[i].uputstvo)));

                row.append(slika);
                row.append(tekst);
                cat.append(row);
                $("#recepti").append(cat);
            }

            if(mojiRecepti != null) {
                for(let i=1; i<mojiRecepti.length; i++) {
                    if(mojiRecepti[i].grupa == 'main dish') {
                        var cat = $("<div/>").attr("class", 'categories__list__post__item');
                        var row = $("<div/>").attr("class", 'row');
                        
                        var slika = $("<div/>").attr("class", 'col-lg-6 col-md-6').append($("<div/>").attr("class", 'categories__post__item__pic set-bg').attr('data-setbg',"/img/categories/categories-list/skusa.jpg").css('background-image', "url(" +mojiRecepti[i].pocetnaSlika + ")"));
        
                        var tekst = $("<div/>").attr("class", 'col-lg-6 col-md-6').append($("<div/>").attr("class", 'categories__post__item__text').append($("<ul/>").attr("class", 'post__label--large').append($("<li/>").append("" + mojiRecepti[i].grupa))).append($("<h3/>").attr("id", "nas").append($("<a/>").attr("href","single-post_eng.html").append("" + mojiRecepti[i].ime).css('font-size', '22px'))).append($("<ul/>").attr("class", "post__widget").append($("<li/>").append("prep time ").css({'list-style' : 'none', 'font-size' : '12px', 'color' : '#888888'}).append($("<span/>").append(mojiRecepti[i].trajanje).css('color', 'black'))).append($("<li/>").append("level ").css({'list-style' : 'none', 'font-size' : '12px', 'color' : '#888888'}).append($("<span/>").append(mojiRecepti[i].tezina).css('color', 'black')))).append($("<p/>").append("" + mojiRecepti[i].uputstvo)));
        
                        row.append(slika);
                        row.append(tekst);
                        cat.append(row);
                        $("#recepti").append(cat);

                    }
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
        window.location.href = "glavno_jelo_eng.html";
    });

    $("#sortOcena").click(function() {
        receptiPocetna.sort((a, b) => ((a.prosecnaOcena > b.prosecnaOcena) ? 1 : -1));
        localStorage.setItem("pocetna", JSON.stringify(receptiPocetna));
        window.location.href = "glavno_jelo_eng.html";
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
        window.location.href = "searched_eng.html"
    });
}); 