$(document).ready(function() {

    var mojiRecepti = [{
        ime : "",
        grupa : "",
        trajanje : "",
        tezina : "",
        uputstvo : ""
    }];

    inicijalizuj();

    function inicijalizuj() {

        var rec = JSON.parse(localStorage.getItem("mojiRecepti"));
        
        mojiRecepti = rec;
         //alert(mojiRecepti);
        if(mojiRecepti != null) {
            for(let i=1; i<mojiRecepti.length; i++) {

                var cat = $("<div/>").attr("class", 'categories__list__post__item');
                var row = $("<div/>").attr("class", 'row');
                
    
                var slika = $("<div/>").attr("class", 'col-lg-6 col-md-6').append($("<div/>").attr("class", 'categories__post__item__pic set-bg').css('background-image', "url(" + "img/categories/categories-list/gj" + i + ".jpg"));
    
                var tekst = $("<div/>").attr("class", 'col-lg-6 col-md-6').append($("<div/>").attr("class", 'categories__post__item__text').append($("<ul/>").attr("class", 'post__label--large').append($("<li/>").append($("<br>")).append($("<br>")).append("" + mojiRecepti[i].grupa))).append($("<h3/>").append("" + mojiRecepti[i].ime).css('font-size', '30px').append($("<ul/>").attr("class", "post__widget").append($("<li/>").append("time ").css({'list-style' : 'none', 'font-size' : '12px', 'color' : '#888888'}).append($("<span/>").append(mojiRecepti[i].trajanje).css('color', 'black'))).append($("<li/>").append("level ").css({'list-style' : 'none', 'font-size' : '12px', 'color' : '#888888'}).append($("<span/>").append(mojiRecepti[i].tezina).css('color', 'black')))).append($("<p/>").append("" + mojiRecepti[i].uputstvo)).append($("<button>").attr('class', 'site-btn').attr('id', 'brisanje' + i).append("DELETE RECIPE"))));
    
                row.append(slika);
                row.append(tekst);
                //row.append($("<div/>").attr("class", 'col-lg-3 col-md-3').append($("<img>").attr('src', 'img/categories/categories-list/brisi.jpg').attr('id', 'brisanje').css({'width' : '50px', 'align' : 'center', 'height' : '50px'})));
                cat.append(row);
                $("#recepti").append(cat);
    
                $("#brisanje" + i).click(function() {
                    brisanjeRec(this, i);
                });
            }
        }

        var kom = JSON.parse(localStorage.getItem("mojiKomentari"));

        if(kom != null) {
            $("#recepti").append($("<div/>").attr("class", 'widget__title').append($("<h4/>").append("My comments:")));
            for(let i = 1; i<kom.length; i++) {
                $("#recepti").append($("<div/>").attr("class", 'csingle-post__comment__item').append($("<div/>").attr("class", 'single-post__comment__item__pic').append($("<img>").attr('src', 'img/categories/single-post/comment/comment-1.jpg'))).append($("<div/>").attr("class", 'single-post__comment__item__text').append($("<h5/>").append(kom[i].ime))).append($("<div/>").attr("class", 'single-post__comment__item__text').append($("<h5/>").append(kom[i].imeRec).css('text-transform', 'none'))).append($("<p/>").append(kom[i].tekst)));
            }
        }

        var glasovi = JSON.parse(localStorage.getItem("mojiGlasovi"));
        if(glasovi != null) {
            $("#recepti").append($("<div/>").attr("class", 'widget__title').append($("<h4/>").append("My votes:").attr('id', 'app')));
            for(let i = 1; i<glasovi.length; i++) {
                $("#recepti").append($("<h5/>").append(glasovi[i].imeRec).css('text-transform', 'none')).append($("<p/>").append(glasovi[i].ocena));
            }
        }

    }   

    function brisanjeRec(obj, index) {
        //alert(index);
        mojiRecepti.splice(index, 1);
        localStorage.setItem("mojiRecepti", JSON.stringify(mojiRecepti));
        window.location.href = "mojNalog_eng.html";
    }
        
});