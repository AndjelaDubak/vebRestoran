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
        if(recepti == null || recepti[1].grupa!="appetizer") {
            komentari.push({
                ime : "Kaca",
                imeRec: "Cheese pie",
                tekst : "Delicious, and easy to make."
            });
            komentari.push({
                ime : "Milan",
                imeRec: "Cheese pie",
                tekst : "Mmm!"
            });
            Recepti.push({
                ime : "Cheese pie",
                grupa : "appetizer",
                trajanje : "1h", 
                tezina : "2",
                uputstvo : "Turn on the oven to preheat to 220 degrees. Divide the crust into two equal parts. Put an egg in a small bowl and beat it. In another, larger bowl, put cheese, sour milk, and stir. Then pour in the egg, but leave a little in that bowl, just enough to coat the rolls at the end. That's a few brush dips. First put two crusts and sprinkle with a little oil. Put a little filling on the crust everywhere. Transfer the third crust and repeat the process. When you stay on the last two crusts from that half of the crust that you separated, roll up the roll. You twist from the narrower side of the bark. Move the roll, put those two crusts and then wrap everything together. Place in a greased baking sheet and coat with oil. Repeat the procedure with the other half of the crust. Coat both rolls with the few eggs you left and sprinkle with sea salt or sesame seeds if desired. Bake for about 30 minutes, reducing the baking temperature to 200 when you put the pan in the oven. After removing from the oven, sprinkle the baked pies with two handfuls of water and cover with a cloth. They can be served hot or cold, they are delicious.",
                pocetnaSlika : 'img/categories/categories-list/pitice1.jpg',
                yt : "https://www.youtube.com/embed/rvPkNEnEMOU",
                prosecnaOcena : "2",
                ukupno : "8",
                broj : "4"
            });
    
            komentari.push({
                ime : "Masa",
                imeRec: "Salty cake",
                tekst : "Good recipe!"
            });
            Recepti.push({
                ime : "Salty cake",
                grupa : "appetizer",
                trajanje : "2h", 
                tezina : "4",
                uputstvo : 'Boil the eggs and leave them to cool. Grate cheese, eggs, ham and cucumbers. Mix sour cream, mayonnaise and cream cheese. Separate about 350 g of filling from the side (for decoration). Divide the rest of the filling into two equal parts. Add grated eggs and ham to one half. In the other half, add grated cucumbers and 100 g of cheese. Mix the ingredients well. Arrange the crust - filling with ham and eggs - crust - filling with cucumbers and cheese until you use up the material. In the end there should be a crust. Place a cloth or foil over the crust and place a book or some cargo. Leave for at least 30 minutes. Then coat the whole cake with a filling of sour cream, mayonnaise and cream cheese (which you separated at the beginning). Sprinkle grated cheese over.',
                pocetnaSlika : 'img/categories/categories-list/rozen1.jpg',
                yt : "https://www.youtube.com/embed/jtgSZmzyaAo",
                prosecnaOcena : "4",
                ukupno : "16",
                broj : "4"
            });
    
            komentari.push({
                ime : "Iva",
                imeRec: "Proja with spinach",
                tekst : "I love it! Actually easy to make."
            });
           
            Recepti.push({
                ime : "Proja with spinach",
                grupa : "appetizer",
                trajanje : "40min", 
                tezina : "2",
                uputstvo : 'Preheat the oven to 200 degrees and the muffin tin with baking paper baskets or grease them with oil and sprinkle with flour if you do not have paper baskets. Mix eggs, oil, sour water, yogurt and cheese. When everything is combined, add flour, polenta, salt and baking powder and stir with a food processor until you get a uniform mixture. Finally, stir in the fresh spinach. Arrange the mixture in molds and bake for 20-25 minutes in a preheated oven. The mixture is enough for 10 rolls baked in standard size muffin tins.',
                pocetnaSlika : 'img/categories/categories-list/proja1.jpg',
                yt : "https://www.youtube.com/embed/i_RykL1o-Ww",
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
        if(r == null || r[1].grupa!="appetizer") {
            receptiPocetna.push({
                ime : "Cheese pie",
                grupa : "appetizer",
                trajanje : "1h", 
                tezina : "2",
                uputstvo : 'Turn on the oven to preheat to 220 degrees. Divide the crust into two equal parts. Put an egg in a small bowl and beat it. In another, larger bowl, put cheese, sour milk, and stir. Then pour in the egg, but leave a little in that bowl, just enough to coat the rolls at the end. It is...',
                pocetnaSlika : 'img/categories/categories-list/pitice.jpg',
                yt : "https://www.youtube.com/embed/rvPkNEnEMOU",
                prosecnaOcena : "2",
                ukupno : "8",
                broj : "4"
            });
    
            receptiPocetna.push({
                ime : "Salty cake",
                grupa : "appetizer",
                trajanje : "2h", 
                tezina : "4",
                uputstvo : 'Boil the eggs and leave them to cool. Grate cheese, eggs, ham and cucumbers. Mix sour cream, mayonnaise and cream cheese. Separate about 350 g of filling from the side (for decoration). Divide the rest of the filling into two equal parts. Add grated eggs and ham to one half. In the second half, add grated ...',
                pocetnaSlika : 'img/categories/categories-list/rozen.jpg',
                yt : "https://www.youtube.com/embed/jtgSZmzyaAo",
                prosecnaOcena : "4",
                ukupno : "16",
                broj : "4"
            });
           
            receptiPocetna.push({
                ime : "Proja with spinach",
                grupa : "appetizer",
                trajanje : "40min", 
                tezina : "2",
                uputstvo : 'Preheat the oven to 200 degrees and the muffin tin with baking paper baskets or grease them with oil and sprinkle with flour if you do not have paper baskets. Mix eggs, oil, sour water, yogurt and cheese. When everything is combined, add flour, polenta, salt and baking powder and stir ...',
                pocetnaSlika : 'img/categories/categories-list/proja.jpg',
                yt : "https://www.youtube.com/embed/i_RykL1o-Ww",
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
            if(receptiPocetna[i].grupa == 'appetizer') {
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
                if(mojiRecepti[i].grupa == 'appetizer') {
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
        window.location.href = "predjelo_eng.html";
    });

    $("#sortOcena").click(function() {
        receptiPocetna.sort((a, b) => ((a.prosecnaOcena > b.prosecnaOcena) ? 1 : -1));
        localStorage.setItem("pocetna", JSON.stringify(receptiPocetna));
        window.location.href = "predjelo_eng.html";
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