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
        if(all == null || all[1].grupa!='main dish') {
            svi.push({
                ime : "Grilled fish",
                grupa : "main dish",
                trajanje : "1h", 
                tezina : "5",
                uputstvo : 'Wash and clean the fish, then dry it with a paper towel. Make three cuts on the fish. Add salt and pepper, then pour lemon juice. Mix three cloves of garlic, basil and rosemary, olive oil. Mix and rub the fish nicely, especially in the cuts and inside. Put the fish on the grill that you previously coated with oil. Turn them occasionally and when they are done, serve and garnish with lemon slices, baby spinach and cherry tomatoes.',
                pocetnaSlika : 'img/categories/categories-list/skusa1.jpg',
                slika : 'img/categories/categories-list/skusa.jpg',
                yt : "https://www.youtube.com/embed/jdj2EzF7OHI",
                prosecnaOcena : "3",
                ukupno : "9",
                broj : "3"
            });
        
            svi.push({
                ime : "Sarma",
                grupa : "main dish",
                trajanje : "2h", 
                tezina : "4",
                uputstvo : 'Remove one leaf at a time from the smaller heads of sauerkraut, cut off the thicker ribs from them with a knife and wash them well in cold water. Clean the meat from the veins and grind it. Put 100 g of fat, minced meat and chopped onion in the sherpa, then fry a little. Add rice, a little ground pepper, one egg and salt to taste, and mix everything well. Arrange a few cabbage leaves on the bottom of the larger sherpa. Take, one by one, a cabbage leaf, put one spoonful of meat stuffing on each one and wrap the leaves in small firm rolls. Pull the ends of the cabbage well, so that the hope does not fall out during cooking. Arrange the sarma in a sherpa, side by side, in several rows. Wash the dried meat and bacon in hot water, cut it into pieces, and put it between the rows of sarma. Add 5-6 peppercorns and 2 bay leaves. Pour cold water over the sarma and cook on low heat for about 3-4 hours. In a pan, make a mixture of 50 g of fat, a spoonful of flour and one teaspoon of allspice, pour over the sarma, cover the sherpa and let it boil for another half an hour. Instead of bread with sarma, serve proja.',
                pocetnaSlika : 'img/categories/categories-list/sarma1.jpg',
                slika : 'img/categories/categories-list/sarma.jpg',
                yt : "https://www.youtube.com/embed/ewXhHgESReQ",
                prosecnaOcena : "4",
                ukupno : "16",
                broj : "4"
            });
        
            svi.push({
                ime : "Steak in mushroom sauce and potatoes",
                grupa : "main dish",
                trajanje : "40min", 
                tezina : "3",
                uputstvo : 'Beat the steak, add a little salt and fry in shallow fat. Mushroom sauce: Saute leeks, add mushrooms, parsley and mustard. When the stewing is finished, add sour cream and cook gently together. Pour the sauce over the arranged steaks in a fireproof bowl and serve that way. Restored potatoes: Boil the potatoes, then cut them into rings, put them in stewed onions (about 200 grams). Add salt and pepper, combine to taste.',
                pocetnaSlika : 'img/categories/categories-list/snicla1.jpg',
                slika : 'img/categories/categories-list/snicla.jpg',
                yt : "https://www.youtube.com/embed/RAhNPZ2E-UE",
                prosecnaOcena : "5",
                ukupno : "15",
                broj : "3"
            });
        
            svi.push({
                ime : "Cheese pie",
                grupa : "appetizer",
                trajanje : "1h", 
                tezina : "2",
                uputstvo : "Turn on the oven to preheat to 220 degrees. Divide the crust into two equal parts. Put an egg in a small bowl and beat it. In another, larger bowl, put cheese, sour milk, and stir. Then pour in the egg, but leave a little in that bowl, just enough to coat the rolls at the end. That's a few brush dips. First put two crusts and sprinkle with a little oil. Put a little filling on the crust everywhere. Transfer the third crust and repeat the process. When you stay on the last two crusts from that half of the crust that you separated, roll up the roll. You twist from the narrower side of the bark. Move the roll, put those two crusts and then wrap everything together. Place in a greased baking sheet and coat with oil. Repeat the procedure with the other half of the crust. Coat both rolls with the few eggs you left and sprinkle with sea salt or sesame seeds if desired. Bake for about 30 minutes, reducing the baking temperature to 200 when you put the pan in the oven. After removing from the oven, sprinkle the baked pies with two handfuls of water and cover with a cloth. They can be served hot or cold, they are delicious.",
                pocetnaSlika : 'img/categories/categories-list/pitice1.jpg',
                slika : 'img/categories/categories-list/pitice.jpg',
                yt : "https://www.youtube.com/embed/rvPkNEnEMOU",
                prosecnaOcena : "2",
                ukupno : "8",
                broj : "4"
            });
        
            svi.push({
                ime : "Salty cake",
                grupa : "appetizer",
                trajanje : "2h", 
                tezina : "4",
                uputstvo : 'Boil the eggs and leave them to cool. Grate cheese, eggs, ham and cucumbers. Mix sour cream, mayonnaise and cream cheese. Separate about 350 g of filling from the side (for decoration). Divide the rest of the filling into two equal parts. Add grated eggs and ham to one half. In the other half, add grated cucumbers and 100 g of cheese. Mix the ingredients well. Arrange the crust - filling with ham and eggs - crust - filling with cucumbers and cheese until you use up the material. In the end there should be a crust. Place a cloth or foil over the crust and place a book or some cargo. Leave for at least 30 minutes. Then coat the whole cake with a filling of sour cream, mayonnaise and cream cheese (which you separated at the beginning). Sprinkle grated cheese over.',
                pocetnaSlika : 'img/categories/categories-list/rozen.jpg',
                slika : 'img/categories/categories-list/rozen1.jpg',
                yt : "https://www.youtube.com/embed/jtgSZmzyaAo",
                prosecnaOcena : "4",
                ukupno : "16",
                broj : "4"
            });
        
            svi.push({
                ime : "Proja with spinach",
                grupa : "appetizer",
                trajanje : "40min", 
                tezina : "2",
                uputstvo : 'Preheat the oven to 200 degrees and the muffin tin with baking paper baskets or grease them with oil and sprinkle with flour if you do not have paper baskets. Mix eggs, oil, sour water, yogurt and cheese. When everything is combined, add flour, polenta, salt and baking powder and stir with a food processor until you get a uniform mixture. Finally, stir in the fresh spinach. Arrange the mixture in molds and bake for 20-25 minutes in a preheated oven. The mixture is enough for 10 rolls baked in standard size muffin tins.',
                pocetnaSlika : 'img/categories/categories-list/proja1.jpg',
                slika : 'img/categories/categories-list/proja.jpg',
                yt : "https://www.youtube.com/embed/i_RykL1o-Ww",
                prosecnaOcena : "2",
                ukupno : "6",
                broj : "3"
            });
        
            svi.push({
                ime : "Apple compote",
                grupa : "snack",
                trajanje : "1h", 
                tezina : "2",
                uputstvo : "Chop the apples, pour water over them and cook for about half an hour. When the apple compote is ready, add two tablespoons of oatmeal. Wait a while for the flakes to swell, remove them from your stove and add a little cinnamon. In this way, you can cook compote of pears, berries, plums (fresh, dried) - you can't go wrong, these are all healthy snacks that are more than delicious.",
                pocetnaSlika : 'img/categories/categories-list/kompot1.jpg',
                slika : 'img/categories/categories-list/kompot.jpg',
                yt : "https://www.youtube.com/embed/U9mjwAE1RnQ",
                prosecnaOcena : "3",
                ukupno : "9",
                broj : "3"
            });
            
            svi.push({
                ime : "Barbells with almonds and coconut",
                grupa : "snack",
                trajanje : "2h", 
                tezina : "3",
                uputstvo : 'Preheat the oven to 160 C. Line a square baking tray (sides approx. 20 cm) with baking paper. Set aside. Pour almonds, coconut leaves and salt (if you use it) into a large bowl and stir. Pour this mixture over the maple syrup. Stir until everything is well combined. Pour this mixture into the prepared baking tray. Using a rubber spatula or a spatula, press the mixture and smooth it into a tightly packed, even layer. Bake for 25-35 minutes (depending on the oven). The bars must be thoroughly baked, otherwise they will not stick together when cooled. Leave in the pan to cool for 1 hour (or until completely cooled). Squeeze the opposite ends of the baking paper liner, and lift from the baking sheet. Gently remove the paper from the bottom. Cut into 12 strips (6 rows of 2 columns).',
                pocetnaSlika : 'img/categories/categories-list/stanglice1.jpg',
                slika : 'img/categories/categories-list/badem.jpg',
                yt : "https://www.youtube.com/embed/zbtHwZGmxDA",
                prosecnaOcena : "1",
                ukupno : "3",
                broj : "3"
            });
        
            svi.push({
                ime : "Fruit salad",
                grupa : "snack",
                trajanje : "3h", 
                tezina : "5",
                uputstvo : 'Peel an apple and cut it into small pieces. Add chopped oranges and bananas, as well as some blueberries. Pour lemon juice and a full spoonful of honey over everything. Cut the strawberries in half (I used frozen ones), then sprinkle them with vanilla sugar. Combine everything and mix well. Fill glasses and decorate with whipped cream and blueberries.',
                pocetnaSlika : 'img/categories/categories-list/vocna1.jpg',
                slika : 'img/categories/categories-list/fruit.jpg',
                yt : "https://www.youtube.com/embed/R4bDe-vX_wo",
                prosecnaOcena : "4.5",
                ukupno : "9",
                broj : "2"
            });
        
            svi.push({
                ime : "Chocolate souffle",
                grupa : "dessert",
                trajanje : "2h", 
                tezina : "3",
                uputstvo : 'Beat eggs, sugar, and flour. Lightly melt the chocolate with the butter, especially on the stove; then this, combine into a previously beaten mass of (eggs, flour and sugar). The preparation takes up to 20 minutes, but keep in mind that the mixture must be cooled for 2-3 hours before baking. Fill up to 2/3 of the mold with the mixture. Bake in a preheated oven at 250 degrees for exactly 7 minutes.',
                pocetnaSlika : 'img/categories/categories-list/sufle1.jpg',
                slika : 'img/categories/categories-list/sufle.jpg',
                yt : "https://www.youtube.com/embed/xmQrucN0kmA",
                prosecnaOcena : "4",
                ukupno : "16",
                broj : "4"
            });
        
            svi.push({
                ime : "Cheese Cake",
                grupa : "dessert",
                trajanje : "3h", 
                tezina : "5",
                uputstvo : 'Mix the margarine with the biscuits and make a crust. Whip the whipped cream, to which you add the sugar. When it is whipped, add sour cream and cheese. Put the gelatin prepared in the following way in all this: In a small pot, put 4 tablespoons of cold water and gelatin (10 g) and mix it, and immediately before boiling, remove from the heat and immediately put in the filling and stir with a mixer for another minute. Shape the crust and put it in the fridge to cool and start making the fruit filling. In a separate bowl for about 15 minutes. cook the raspberries mixed with 4 tablespoons of sugar and when it is cooked at the end, add the remaining 10 grams of gelatin with it and stir and then now leave them in the fridge to cool a bit. We are ready for filling as well as the most beautiful part of making this recipe. First, put white filling over the rind, and then fruit red over the white. Enjoy ! (for decoration, it is desirable to put raspberries on a tray 2,3 if you have any left)',
                pocetnaSlika : 'img/categories/categories-list/cheese1.jpg',
                slika : 'img/categories/categories-list/cheese.jpg',
                yt : "https://www.youtube.com/embed/FZCd6_WaIUE",
                prosecnaOcena : "1",
                ukupno : "3",
                broj : "3"
            });
        
            svi.push({
                ime : "Bananas with caramel topping",
                grupa : "dessert",
                trajanje : "2h", 
                tezina : "4",
                uputstvo : 'Melt the butter in a pan. Add sugar and cook until brown. Slowly add the sour cream and simmer for 1 minute. Put the bananas in a pan to heat. Remove from the heat, place in a plate and pour over the filling. Add cinnamon and / or ice cream if desired. ',
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
            $("#best").append($("<div/>").attr("class", 'col-lg-4 col-md-4 col-sm-12').append($("<div/>").attr("class", "categories__item set-bg").attr('data-setbg', max.slika).css('background-image', "url(" + max.slika + ")").append($("<div/>").attr("class", 'categories__hover__text').append($("<h5/>").append($("<a/>").attr("href","single-post_eng.html").append(max.ime)).append($("<p/>").append("mark: " + max.prosecnaOcena))))));
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