$(document).ready(function() {

    inicijalizuj();

    function inicijalizuj() {
        var pretrazeni = JSON.parse(localStorage.getItem("pretrazeni"));
        for(let i=0; i<pretrazeni.length; i++) {
            
            var cat = $("<div/>").attr("class", 'categories__list__post__item');
            var row = $("<div/>").attr("class", 'row');
            
            var slika = $("<div/>").attr("class", 'col-lg-6 col-md-6').append($("<div/>").attr("class", 'categories__post__item__pic set-bg').attr('data-setbg',"/img/categories/categories-list/skusa.jpg").css('background-image', "url(" + pretrazeni[i].pocetnaSlika + ")"));

            var tekst = $("<div/>").attr("class", 'col-lg-6 col-md-6').append($("<div/>").attr("class", 'categories__post__item__text').append($("<ul/>").attr("class", 'post__label--large').append($("<li/>").append("" + pretrazeni[i].grupa))).append($("<h3/>").append($("<a/>").attr("href","single-post_eng.html").append("" + pretrazeni[i].ime).css('font-size', '22px'))).append($("<ul/>").attr("class", "post__widget").append($("<li/>").append("time ").css({'list-style' : 'none', 'font-size' : '12px', 'color' : '#888888'}).append($("<span/>").append(pretrazeni[i].trajanje).css('color', 'black'))).append($("<li/>").append("level ").css({'list-style' : 'none', 'font-size' : '12px', 'color' : '#888888'}).append($("<span/>").append(pretrazeni[i].tezina).css('color', 'black')))).append($("<p/>").append("" + pretrazeni[i].uputstvo)));

            row.append(slika);
            row.append(tekst);
            cat.append(row);
            $("#recepti").append(cat);
            
        }
    }
});