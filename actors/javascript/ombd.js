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
                var resultDiv = $('<div class="col-md-4 col-12">');
                var info = $("<p>" + title + " Year: " + year + "</p> <a target='_blank' href='https://www.imdb.com/title/" + response.Search[i].imdbID + "/'>IMDb Trailer</a><hr><br><img src='" + img + "'><br>");

                /*      if (response.Search.Title === $("#movie-name").val()) {
                         var title = response.Search[i].Title;
                         var year = response.Search[i].Year
                         var img = response.Search[i].Poster
                         var img = response.Search[i].Poster;
                         img.alt('No Poster Available');
                         $("#container").append(response.Search[i].Title);
                         $("#container").append(response.Search[i].Year);
                         console.log(response.Search[i].imdbID);
                         console.log(response);
                         console.log("response check 2");
                         $("#movie-name").keyup(function(event){
                             event.preventDefault();
                             if(event.keyCode == 13){
     
                                 $("#submit").click();
                             }
                         });
     
                     } else { */
                var title = response.Search[i].Title;
                var year = response.Search[i].Year;
                var noImg = function() {
                    if(response.Search[i].Poster === "N/A") {
/*                         $("#container").append("<div class='result'> <img src='http://4.bp.blogspot.com/-uBZbGGe3zeA/T40TuyYUl6I/AAAAAAAABV0/pyBqkWi83x8/s1600/NO+POSTER.jpg'> <p><b>" + title + '</b><br>' + "Year: " + year + "</p> <a target='_blank' href='https://www.imdb.com/title/" + response.Search[i].imdbID + "/'>More Info</a><hr><br></div>");
 */                        return false;
                    }
                    return response.Search[i].Poster;
                };
                var img = noImg() || 'css/images/nopicture.png';
                $("#container").append("<div class='result'> <img src=" + img + "> <p><b>" + title + '</b><br>' + "Year: " + year + "</p> <a target='_blank' href='https://www.imdb.com/title/" + response.Search[i].imdbID + "/'>More Info</a><hr><br></div>");
                noImg;
                    $("body").append('<script type="text/javascript" language="javascript" src="https://www.boxofficemojo.com/data/js/moviegross.php?id=' + search + '&amp;shortgross=0"></script>')
                    console.log("Imprecise Movie Input");
                    console.log(response.Search[i].Title);
                    console.log(response.Search[i].imdbID);
                $("#movie-name").keyup(function (event) {
                            event.preventDefault();
                        if (event.keyCode == 13) {
                            $("#submit").click();
                        }
                    })
                };
    
            $(".brand-log").on('click', 'a', function (e) {
                            e.preventDefault();
                        var url = $(this).attr('index.html');
                    });
                    // console.log(response.data[i].embedded_url);
                    /*     var gifUrl = response.data[i].rating;
                        console.log("url is: " + gifUrl)
                $(".container").append(`<img src="${gifUrl}">`); */
                });
        
            });
        
        });
        
