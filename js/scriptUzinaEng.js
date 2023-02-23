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
        if(recepti == null || recepti[1].grupa!="snack") {
            komentari.push({
                ime : "Mina",
                imeRec: "Apple compote",
                tekst : "Sweet and healthy."
            });
            komentari.push({
                ime : "Misa",
                imeRec: "Apple compote",
                tekst : "Must love apples!"
            });
            Recepti.push({
                ime : "Apple compote",
                grupa : "snack",
                trajanje : "1h", 
                tezina : "2",
                uputstvo : "Chop the apples, pour water over them and cook for about half an hour. When the apple compote is ready, add two tablespoons of oatmeal. Wait a while for the flakes to swell, remove them from your stove and add a little cinnamon. In this way, you can cook compote of pears, berries, plums (fresh, dried) - you can't go wrong, these are all healthy snacks that are more than delicious.",
                pocetnaSlika : 'img/categories/categories-list/kompot1.jpg',
                yt : "https://www.youtube.com/embed/U9mjwAE1RnQ",
                prosecnaOcena : "3",
                ukupno : "9",
                broj : "3"
            });
    
            komentari.push({
                ime : "Masa",
                imeRec: "Barbells with almonds and coconut",
                tekst : "So good and sweet!"
            });
            Recepti.push({
                ime : "Barbells with almonds and coconut",
                grupa : "snack",
                trajanje : "2h", 
                tezina : "3",
                uputstvo : 'Preheat the oven to 160 C. Line a square baking tray (sides approx. 20 cm) with baking paper. Set aside. Pour almonds, coconut leaves and salt (if you use it) into a large bowl and stir. Pour this mixture over the maple syrup. Stir until everything is well combined. Pour this mixture into the prepared baking tray. Using a rubber spatula or a spatula, press the mixture and smooth it into a tightly packed, even layer. Bake for 25-35 minutes (depending on the oven). The bars must be thoroughly baked, otherwise they will not stick together when cooled. Leave in the pan to cool for 1 hour (or until completely cooled). Squeeze the opposite ends of the baking paper liner, and lift from the baking sheet. Gently remove the paper from the bottom. Cut into 12 strips (6 rows of 2 columns).',
                pocetnaSlika : 'img/categories/categories-list/stanglice1.jpg',
                yt : "https://www.youtube.com/embed/zbtHwZGmxDA",
                prosecnaOcena : "4",
                ukupno : "16",
                broj : "4"
            });
    
            komentari.push({
                ime : "Iva",
                imeRec: "Fruit salad",
                tekst : "Freshing."
            });
           
            Recepti.push({
                ime : "Fruit salad",
                grupa : "snack",
                trajanje : "3h", 
                tezina : "5",
                uputstvo : 'Peel an apple and cut it into small pieces. Add chopped oranges and bananas, as well as some blueberries. Pour lemon juice and a full spoonful of honey over everything. Cut the strawberries in half (I used frozen ones), then sprinkle them with vanilla sugar. Combine everything and mix well. Fill glasses and decorate with whipped cream and blueberries.',
                pocetnaSlika : 'img/categories/categories-list/vocna1.jpg',
                yt : "https://www.youtube.com/embed/R4bDe-vX_wo",
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
        if(r == null || r[1].grupa!="snack") {
            receptiPocetna.push({
                ime : "Apple compote",
                grupa : "snack",
                trajanje : "1h", 
                tezina : "2",
                uputstvo : "Chop the apples, pour water over them and cook for about half an hour. When the apple compote is ready, add two tablespoons of oatmeal. Wait a while for the flakes to swell, remove them from your stove and add a little cinnamon. This way you can cook pear compote, berries, plums (fresh, dried) - you can't go wrong ...",
                pocetnaSlika : 'img/categories/categories-list/kompot.jpg',
                yt : "https://www.youtube.com/embed/U9mjwAE1RnQ",
                prosecnaOcena : "3",
                ukupno : "9",
                broj : "3"
            });
    
            receptiPocetna.push({
                ime : "Barbells with almonds and coconut",
                grupa : "snack",
                trajanje : "2h", 
                tezina : "3",
                uputstvo : 'Preheat the oven to 160 C. Line a square baking tray (sides approx. 20 cm) with baking paper. Set aside. Pour almonds, coconut leaves and salt (if you use it) into a large bowl and stir. Pour this mixture over the maple syrup. Stir until everything is well combined. Pour this mixture into the prepared baking tray. Using a rubber spatula or a welder, press ...',
                pocetnaSlika : 'img/categories/categories-list/badem.jpg',
                yt : "https://www.youtube.com/embed/zbtHwZGmxDA",
                prosecnaOcena : "4",
                ukupno : "16",
                broj : "4"
            });
           
            receptiPocetna.push({
                ime : "Fruit salad",
                grupa : "snack",
                trajanje : "3h", 
                tezina : "5",
                uputstvo : 'Peel an apple and cut it into small pieces. Add chopped oranges and bananas, as well as some blueberries. Pour lemon juice and a full spoonful of honey over everything. Cut the strawberries in half (I used frozen ones), then sprinkle them with vanilla sugar. Combine everything and mix well. Fill glasses and decorate with whipped cream and blueberries.',
                pocetnaSlika : 'img/categories/categories-list/fruit.jpg',
                yt : "https://www.youtube.com/embed/R4bDe-vX_wo",
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
            if(receptiPocetna[i].grupa == 'snack') {
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
                if(mojiRecepti[i].grupa == 'snack') {
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
        window.location.href = "uzina_eng.html";
    });

    $("#sortOcena").click(function() {
        receptiPocetna.sort((a, b) => ((a.prosecnaOcena > b.prosecnaOcena) ? 1 : -1));
        localStorage.setItem("pocetna", JSON.stringify(receptiPocetna));
        window.location.href = "uzina_eng.html";
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