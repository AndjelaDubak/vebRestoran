    var komentari = JSON.parse(localStorage.getItem("komentari"));

    var rec = JSON.parse(localStorage.getItem("kliknutRecept"));
    var recepti = JSON.parse(localStorage.getItem("recepti"));
    var svi = JSON.parse(localStorage.getItem("svi"));
    var pocetna = JSON.parse(localStorage.getItem("pocetna"));
    var moji = JSON.parse(localStorage.getItem("mojiRecepti"));
    
    
    var mojiGlasovi = [{
        imeRec : "",
        ocena : ""
    }];

    var mojiKomentari = [{
        ime : "",
        imeRec:"",
        tekst:""
    }];

    var glas = JSON.parse(localStorage.getItem("glasovi"));
    

    for(let i = 1; i<6; i++) {
        $("#star" + i).click(function() {
            rec.ukupno = parseInt(rec.ukupno) + i;
           // alert(rec.ukupno);
            rec.broj++;
            rec.prosecnaOcena = rec.ukupno/rec.broj;
            localStorage.setItem("kliknutRecept", JSON.stringify(rec)); 
            for(let j=1; j<recepti.length; j++) {
                if(recepti[j].ime == rec.ime) {
                    recepti[j].prosecnaOcena = rec.ukupno/rec.broj;
                }
            }
            for(let j=1; j<svi.length; j++) {
                if(svi[j].ime == rec.ime) {
                    svi[j].prosecnaOcena = rec.ukupno/rec.broj;
                   // alert("kajfnjans");
                }
                
            }
            for(let j=1; j<pocetna.length; j++) {
                //alert(pocetna[j].ime);
                if(pocetna[j].ime == rec.ime) {
                    pocetna[j].prosecnaOcena = rec.ukupno/rec.broj;
                }
            }
            if(moji != null) {
                for(let j=1; j<moji.length; j++) {
                    if(moji[j].ime == rec.ime) {
                        moji[j].prosecnaOcena = rec.ukupno/rec.broj;
                    }
                }
            }
            
            
            localStorage.setItem("recepti", JSON.stringify(recepti));
            localStorage.setItem("svi", JSON.stringify(svi));
            localStorage.setItem("pocetna", JSON.stringify(pocetna));
            localStorage.setItem("mojiRecepti", JSON.stringify(moji));
            alert("af");
            glasovi = JSON.parse(localStorage.getItem("mojiGlasovi"));
            if(glasovi != null) {
                mojiGlasovi = glasovi;
               
            }
            mojiGlasovi.push({
                imeRec : rec.ime,
                ocena : i
            });
            
            localStorage.setItem("mojiGlasovi", JSON.stringify(mojiGlasovi));
        });
    }
    

    inicijalizacija();

    function inicijalizacija(){
        $("#naslov").text(rec.ime);
        $(".single-post__hero").css('background-image', 'url(' + rec.pocetnaSlika + ')');
        $(".single-post__top__text").find('p').text(rec.uputstvo);
        $("#trajanje").text(rec.trajanje);
        $("#tezina").text(rec.tezina);

        var video = $("<iframe/>").append

        $("#video").html('<iframe src="' + rec.yt + '"  width="100%" height="100%" frameborder="0" allowfullscreen"></iframe>');

        var gr=$(".label");
        gr.append("<li></li>").append(rec.grupa);
        
        var kom = JSON.parse(localStorage.getItem("komentari"));
        if(kom == null) {
            return;
        }
        else {
            komentari = kom; 
        }

        var gl=$(".single-post__comment");

        for(let i=1;i<komentari.length;i++){
            if(komentari[i].imeRec!=rec.ime)continue;
            var komentar=$("<div></div>").addClass("single-post__comment__item");

            var slikaKom=$("<div></div>").addClass("single-post__comment__item__pic");
            slikaKom.append($("<img>").attr("src","img/categories/single-post/comment/comment-1.jpg"));    

            var tekstKom=$("<div></div>").addClass("single-post__comment__item__text").append($("<h5></h5>").append(kom[i].ime).css('text-transform', 'uppercase').css({'font-family' : '"Unna", serif'})).append($("<p></p>").append(kom[i].tekst).css('text-transform', 'none'));
            
            komentar.append(slikaKom);
            komentar.append(tekstKom);
            gl.append(komentar);
        }
       
        $("#prosek").append(rec.prosecnaOcena);
    }

    function ubaciKomentar(){
        var ime=$("#ime").val();
        var kom=$("#komentar").val();

        $("#ime").val("");
        $("#komentar").val("");

        var gl=$(".single-post__comment");

        var komentar=$("<div></div>").addClass("single-post__comment__item");

        var slikaKom=$("<div></div>").addClass("single-post__comment__item__pic");
        slikaKom.append($("<img>").attr("src","img/categories/single-post/comment/comment-1.jpg"));

        var tekstKom=$("<div></div>").addClass("single-post__comment__item__text").append($("<h5></h5>").append(ime).css('text-transform', 'uppercase').css({'font-family' : '"Unna", serif'})).append($("<p></p>").append(kom).css('text-transform', 'none'));

        komentar.append(slikaKom);
        komentar.append(tekstKom);
        gl.append(komentar);

        var rec = JSON.parse(localStorage.getItem("kliknutRecept"));
        komentari.push({
            ime : ime,
            imeRec: rec.ime,
            tekst : kom
        });
        komen = JSON.parse(localStorage.getItem("mojiKomentari"));
        if(komen != null) {
            mojiKomentari = komen;
            
        }
        mojiKomentari.push({
            ime : ime,
            imeRec: rec.ime,
            tekst : kom
        });
        
        //alert("ajkdamd");
        localStorage.setItem("mojiKomentari", JSON.stringify(mojiKomentari));
        
        $("#single-post__leave__comment").append("<br>").append("<br>").append("<br>").append("<br>").append("<br>").append("<br>").append("<br>");
        localStorage.setItem("komentari", JSON.stringify(komentari));
    }

//PDF
/*var pdfdoc = new jsPDF();
var specialElementHandlers = {
    '#ignoreContent': function (element, renderer) {
        return true;
    }
}; 

$(document).ready(function(){

    $("#pdf").click(function(){
        pdfdoc.fromHTML($('#PDFContent').html(), 15, 15, {
        'width': 110,
        'elementHandlers' : specialElementHandlers
    });
    pdfdoc.save('First pdf');
});});*/

/*$("#pdf").click(function(){
    var doc = new jsPDF();
    doc.setFontSize(11);
    doc.text(20, 20, '' + $(".single-post__top__text").find('p').text());
    doc.save('document.pdf');
});
*/

$("#pdf").click(function(){
    var doc = new jsPDF();
    var elementHTML = $(".single-post__top__text").html();
    var specialElementHandlers = {
        
    }; 
    doc.setFontSize(11);
    doc.setFont("courier");
    doc.fromHTML(elementHTML, 15, 15, {
        'width': 150,
        'elementHandlers' : specialElementHandlers
    });
    doc.save('document.pdf');
});

/*$("#pdf").click(function(){
    var pdf = new jsPDF('p', 'pt', 'letter');
    // source can be HTML-formatted string, or a reference
    // to an actual DOM element from which the text will be scraped.
    source = $('#content')[0];

    // we support special element handlers. Register them with jQuery-style 
    // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
    // There is no support for any other type of selectors 
    // (class, of compound) at this time.
    specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector
        '#bypassme': function (element, renderer) {
            // true = "handled elsewhere, bypass text extraction"
            return true
        }
    };
    margins = {
        top: 80,
        bottom: 60,
        left: 40,
        width: 400
    };
    // all coords and widths are in jsPDF instance's declared units
    // 'inches' in this case
    pdf.fromHTML(
        source, // HTML string or DOM elem ref.
        margins.left, // x coord
        margins.top, { // y coord
            'width': margins.width, // max width of content on PDF
            'elementHandlers': specialElementHandlers
        },

        function (dispose) {
            // dispose: object with X, Y of the last line add to the PDF 
            //          this allow the insertion of new lines after html
            pdf.save('Test.pdf');
        }, margins
    );
});*/

