$(document).ready(function () {
    var config = {
        apiKey: "AIzaSyCoKN3aBcomtecZICsL1l_FNfBZawPOzow",
        authDomain: "movieprojectissofun.firebaseapp.com",
        databaseURL: "https://movieprojectissofun.firebaseio.com",
        projectId: "movieprojectissofun",
        storageBucket: "movieprojectissofun.appspot.com",
        messagingSenderId: "920966827156"
      };
      firebase.initializeApp(config);
    
     
      var database = firebase.database();
      var searchArray = []

      $("#movie-name").keyup(function(event){
        event.preventDefault(); 
        if(event.keyCode == 13){

            $("#submit").click();
        }
    });
      
      $('#movie-name').keydown(
        function(event){
         if (event.which == '13') {
            event.preventDefault();
          }
    
    
    });
  
     
    $("#submit").click(function (e) {
        e.preventDefault();
        var search = $("#movie-name").val();
        var queryURL = " http://www.omdbapi.com/?s=" + search + "&apikey=2fa555f3";
        console.log(search);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            
            console.log(search)
            console.log(response);
            $("#container").empty();
            for (var i = 0; i < response.Search.length; i++) {
                console.log("i is " + i);
                var resultDiv = $('<div class="col-md-4 col-12">');
                var info = $("<p>" + title + " Year: " + year + "</p> <a target='_blank' href='https://www.imdb.com/title/" + response.Search[i].imdbID + "/'>IMDb Trailer</a><hr><br><img src='" + img + "'><br>");

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
                $("#container").prepend("<div class='result'> <img src=" + img + "> <p><b>" + title + '</b><br>' + "Year: " + year + "</p> <a target='_blank' href='https://www.imdb.com/title/" + response.Search[i].imdbID + "/'>More Info</a><hr><br></div>");
                noImg;
                    $("body").prepend('<script type="text/javascript" language="javascript" src="https://www.boxofficemojo.com/data/js/moviegross.php?id=' + search + '&amp;shortgross=0"></script>')
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
                });
        
            });
        
        });
        
