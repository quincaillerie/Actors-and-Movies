// var queryURL = " http://www.omdbapi.com/?s=" + search + "&apikey=2fa555f3";
// var search = "";

/*  var compass = ["north", "east", "south", "west"];
 console.log("hello"); */

/*   for (i = 0; i < compass.length; i++) {
      $("body").append("<button class='movie-button " + "side" + i + "'>" + compass[i] + "</button>")
      console.log("i is " + i);
 
 
 
  }; */
// ON CLICK FUNCTION
/* $(".movie-button ").click(function () {
    console.log(name);
    console.log('INSIDE CLICK #1')
    $("p").append("<b>button[i]</b>");
    // console.log(i);
    // console.log("test");
    // good code
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log('response is ' response);

        if (response.Title === $("#movie-name").val()) {

        } else {
            console.log("Wrong Movie Input");
            console.log(response.Title);
        };

        // console.log(response.data[i].embedded_url);
        /*     var gifUrl = response.data[i].rating;
            console.log("url is: " + gifUrl)
            $(".container").append(`<img src="${gifUrl}">`); */
/* });
}); */

$(document).ready(function () {

    $("#submit").click(function (e) {
        e.preventDefault();
        var search = $("#movie-name").val();
        var queryURL = " http://www.omdbapi.com/?s=" + search + "&apikey=2fa555f3";
        console.log(search);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            $("#container").empty();
            for (var i = 0; i < response.Search.length; i++) {
                console.log("i is " + i);

                if (response.Search.Title === $("#movie-name").val()) {
                    var title = response.Search[i].Title;
                    var year = response.Search[i].Year
                    $("#container").append(response.Search[i].Title);
                    $("#container").append(response.Search[i].Year);
                    console.log(response);
                    console.log("response check 2");
                    $("#movie-name").keyup(function(event){
                        event.preventDefault();
                        if(event.keyCode == 13){

                            $("#submit").click();
                        }
                    });

                } else {
                    var title = response.Search[i].Title;
                    var year = response.Search[i].Year
                    var img = response.Search[i].Poster
                    $("#container").append("<div class='result'> <p>Title: " + title + " Year: " + year + "</p> <img src='" + img + "'> </div>");
                    console.log("Imprecise Movie Input");
                    console.log(response.Search[i].Title);
                    $("#movie-name").keyup(function(event){
                        event.preventDefault();
                        if(event.keyCode == 13){
                            $("#submit").click();
                        }
                    })
                };
            };
            // console.log(response.data[i].embedded_url);
            /*     var gifUrl = response.data[i].rating;
                console.log("url is: " + gifUrl)
                $(".container").append(`<img src="${gifUrl}">`); */
        });

    });

});

