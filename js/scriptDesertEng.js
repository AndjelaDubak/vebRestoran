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
        if(recepti == null || recepti[1].grupa!="dessert") {
            komentari.push({
                ime : "Mina",
                imeRec: "Bananas with caramel topping",
                tekst : "Sweet and delicious."
            });
            komentari.push({
                ime : "Misa",
                imeRec: "Bananas with caramel topping",
                tekst : "Super!"
            });
            Recepti.push({
                ime : "Bananas with caramel topping",
                grupa : "dessert",
                trajanje : "2h", 
                tezina : "4",
                uputstvo : 'Melt the butter in a pan. Add sugar and cook until brown. Slowly add the sour cream and simmer for 1 minute. Put the bananas in a pan to heat. Remove from the heat, place in a plate and pour over the filling. Add cinnamon and / or ice cream if desired. ',
                pocetnaSlika : 'img/categories/categories-list/banane1.jpg',
                yt : "https://www.youtube.com/embed/Z2qqHfoaOw4",
                prosecnaOcena : "3",
                ukupno : "9",
                broj : "3"
            });
    
            komentari.push({
                ime : "Masa",
                imeRec: "Chocolate souffle",
                tekst : "I love it!"
            });
            Recepti.push({
                ime : "Chocolate souffle",
                grupa : "dessert",
                trajanje : "2h", 
                tezina : "3",
                uputstvo : 'Beat eggs, sugar, and flour. Lightly melt the chocolate with the butter, especially on the stove; then this, combine into a previously beaten mass of (eggs, flour and sugar). The preparation takes up to 20 minutes, but keep in mind that the mixture must be cooled for 2-3 hours before baking. Fill up to 2/3 of the mold with the mixture. Bake in a preheated oven at 250 degrees for exactly 7 minutes.',
                pocetnaSlika : 'img/categories/categories-list/sufle1.jpg',
                yt : "https://www.youtube.com/embed/xmQrucN0kmA",
                prosecnaOcena : "4",
                ukupno : "16",
                broj : "4"
            });
    
            komentari.push({
                ime : "Iva",
                imeRec: "Cheese Cake",
                tekst : "Freshing."
            });
           
            Recepti.push({
                ime : "Cheese Cake",
                grupa : "dessert",
                trajanje : "3h", 
                tezina : "5",
                uputstvo : 'Mix the margarine with the biscuits and make a crust. Whip the whipped cream, to which you add the sugar. When it is whipped, add sour cream and cheese. Put the gelatin prepared in the following way in all this: In a small pot, put 4 tablespoons of cold water and gelatin (10 g) and mix it, and immediately before boiling, remove from the heat and immediately put in the filling and stir with a mixer for another minute. Shape the crust and put it in the fridge to cool and start making the fruit filling. In a separate bowl for about 15 minutes. cook the raspberries mixed with 4 tablespoons of sugar and when it is cooked at the end, add the remaining 10 grams of gelatin with it and stir and then now leave them in the fridge to cool a bit. We are ready for filling as well as the most beautiful part of making this recipe. First, put white filling over the rind, and then fruit red over the white. Enjoy ! (for decoration, it is desirable to put raspberries on a tray 2,3 if you have any left)',
                pocetnaSlika : 'img/categories/categories-list/cheese1.jpg',
                yt : "https://www.youtube.com/embed/FZCd6_WaIUE",
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
        if(r == null || r[1].grupa!="dessert") {
            receptiPocetna.push({
                ime : "Bananas with caramel topping",
                grupa : "dessert",
                trajanje : "2h", 
                tezina : "4",
                uputstvo : 'Melt the butter in a pan. Add sugar and cook until brown. Slowly add the sour cream and simmer for 1 minute. Put the bananas in a pan to heat. Remove from the heat, place in a plate and pour over the filling. Add cinnamon and / or ice cream if desired. ',
                pocetnaSlika : 'img/categories/categories-list/banana.jpg',
                yt : "https://www.youtube.com/embed/Z2qqHfoaOw4",
                prosecnaOcena : "3",
                ukupno : "9",
                broj : "3"
            });
    
            receptiPocetna.push({
                ime : "Chocolate souffle",
                grupa : "dessert",
                trajanje : "2h", 
                tezina : "3",
                uputstvo : 'Beat eggs, sugar, and flour. Lightly melt the chocolate with the butter, especially on the stove; then this, combine into a previously beaten mass of (eggs, flour and sugar). The preparation takes up to 20 minutes, but keep in mind that the mixture must be cooled for 2-3 hours before baking. Fill up to 2/3 of the mold with the mixture. Bake in a preheated oven at 250 degrees for exactly 7 minutes.',
                pocetnaSlika : 'img/categories/categories-list/sufle.jpg',
                yt : "https://www.youtube.com/embed/xmQrucN0kmA",
                prosecnaOcena : "4",
                ukupno : "16",
                broj : "4"
            });
           
            receptiPocetna.push({
                ime : "Cheese Cake",
                grupa : "dessert",
                trajanje : "3h", 
                tezina : "5",
                uputstvo : 'Mix the margarine with the biscuits and make a crust. Whip the whipped cream, to which you add the sugar. When it is whipped, add sour cream and cheese. Put gelatin prepared in the following way in all this: In a small pot, put 4 tablespoons of cold water and gelatin (10 g) and mix it...',
                pocetnaSlika : 'img/categories/categories-list/cheese.jpg',
                yt : "https://www.youtube.com/embed/FZCd6_WaIUE",
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
            if(receptiPocetna[i].grupa == 'dessert') {
                var cat = $("<div/>").attr("class", 'categories__list__post__item');
                var row = $("<div/>").attr("class", 'row');
                
                var slika = $("<div/>").attr("class", 'col-lg-6 col-md-6').append($("<div/>").attr("class", 'categories__post__item__pic set-bg').attr('data-setbg',"/img/categories/categories-list/skusa.jpg").css('background-image', "url(" + receptiPocetna[i].pocetnaSlika + ")"));

                var tekst = $("<div/>").attr("class", 'col-lg-6 col-md-6').append($("<div/>").attr("class", 'categories__post__item__text').append($("<ul/>").attr("class", 'post__label--large').append($("<li/>").append("" + receptiPocetna[i].grupa))).append($("<h3/>").append($("<a/>").attr("href","single-post_eng.html").append("" + receptiPocetna[i].ime).css('font-size', '22px'))).append($("<ul/>").attr("class", "post__widget").append($("<li/>").append("prep time ").css({'list-style' : 'none', 'font-size' : '12px', 'color' : '#888888'}).append($("<span/>").append(receptiPocetna[i].trajanje).css('color', 'black'))).append($("<li/>").append("level ").css({'list-style' : 'none', 'font-size' : '12px', 'color' : '#888888'}).append($("<span/>").append(receptiPocetna[i].tezina).css('color', 'black')))).append($("<p/>").append("" + receptiPocetna[i].uputstvo)));

                row.append(slika);
                row.append(tekst);
                cat.append(row);
                $("#recepti").append(cat);
            }
        }

        if(mojiRecepti != null) {
            for(let i=1; i<mojiRecepti.length; i++) {
                if(mojiRecepti[i].grupa == 'dessert') {
                    var cat = $("<div/>").attr("class", 'categories__list__post__item');
                    var row = $("<div/>").attr("class", 'row');
                    
                    var slika = $("<div/>").attr("class", 'col-lg-6 col-md-6').append($("<div/>").attr("class", 'categories__post__item__pic set-bg').attr('data-setbg',"/img/categories/categories-list/skusa.jpg").css('background-image', "url(" +mojiRecepti[i].pocetnaSlika + ")"));
    
                    var tekst = $("<div/>").attr("class", 'col-lg-6 col-md-6').append($("<div/>").attr("class", 'categories__post__item__text').append($("<ul/>").attr("class", 'post__label--large').append($("<li/>").append("" + mojiRecepti[i].grupa))).append($("<h3/>").append($("<a/>").attr("href","single-post_eng.html").append("" + mojiRecepti[i].ime).css('font-size', '22px'))).append($("<ul/>").attr("class", "post__widget").append($("<li/>").append("prep time ").css({'list-style' : 'none', 'font-size' : '12px', 'color' : '#888888'}).append($("<span/>").append(mojiRecepti[i].trajanje).css('color', 'black'))).append($("<li/>").append("level ").css({'list-style' : 'none', 'font-size' : '12px', 'color' : '#888888'}).append($("<span/>").append(mojiRecepti[i].tezina).css('color', 'black')))).append($("<p/>").append("" + mojiRecepti[i].uputstvo)));
    
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
        window.location.href = "desert_eng.html";
    });

    $("#sortOcena").click(function() {
        receptiPocetna.sort((a, b) => ((a.prosecnaOcena > b.prosecnaOcena) ? 1 : -1));
        localStorage.setItem("pocetna", JSON.stringify(receptiPocetna));
        window.location.href = "desert_eng.html";
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