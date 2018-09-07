//Code will run once DOM is ready for JavaScript
$(document).ready(function () {
$('.sidenav').sidenav();

    //Click function for the submit button
    $("#submit").click(function (e) {
        e.preventDefault();
        //Puts the input that the user typed into a variable
        var search = $("#movie-name").val().toLowerCase();
        //Variable for api key with search variable implemented in url
        var queryURL = " http://www.omdbapi.com/?s=" + search + "&apikey=2fa555f3";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            //Clears previous search's results from div
            $("#container").empty();
            //for loop that allows us to access key value pairs of objects
            for (var i = 0; i < response.Search.length; i++) {
                //Variable for the value of title
                var title = response.Search[i].Title;
                //Variable for the value of year
                var year = response.Search[i].Year;
                //function for default 'no poster' results
                var noImg = function() {
                    if(response.Search[i].Poster === "N/A") {
                   return false;
                    };
                    return response.Search[i].Poster;
                };
                var img = noImg() || 'css/images/nopicture.png';
                $("#container").append("<div class='result'> <img src=" + img + "> <p><b>" + title + '</b><br>' + "Year: " + year + "</p> <a target='_blank' href='https://www.imdb.com/title/" + response.Search[i].imdbID + "/'>More Info</a><script type='text/javascript' language='javascript' src='https://www.boxofficemojo.com/data/js/moviegross.php?id="+ search +"amp;shortgross=0'></script><br><a class='btn-floating btn-small waves-effect waves-light red'><i class='material-icons'>add</i><br></a><hr><br></div>");
                noImg;
                    $("body").append('<script type="text/javascript" language="javascript" src="https://www.boxofficemojo.com/data/js/moviegross.php?id=' + search + '&amp;shortgross=0"></script>')
                };
            //Brings out YouTube Video when clicked 
            $(".btn-floating").click(function() {
                console.log("button clicked")
                $("#player").toggle();
            })
    
            $(".brand-log").on('click', 'a', function (e) {
                            e.preventDefault();
                        var url = $(this).attr('index.html');
                    });
                });
        
            });
        
    // Firebase development
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

    $("#submit").click(function (e) {
        // add things to firebase
        e.preventDefault();
        var search = $("#movie-name").val();
        database.ref().push(search);

    });

    database.ref().on("child_added", async function (childSnapshot) {
// add our firebase to our array
        var search2 = childSnapshot.val();
        console.log(search2)
        searchArray.push(search2);
     
    });
    setTimeout(function () {
        count();
        console.log(searchArray)
        console.log(newSearch)
        newSearch.sort(compare)
        console.log(newSearch)
        makeTable();
    }, 2000)

    var newSearch = [];
    function count() {

        var current = null;
        searchArray.sort();
        var cnt = 0;
// make a new array and add times searched into an object
        for (var i = 0; i <= searchArray.length; i++) {

            if (searchArray[i] != current) {

                if (cnt > 0) {

                    var newObj = {
                        target: current,
                        howMany: cnt,
                    }
                    newSearch.push(newObj)
                }
                current = searchArray[i];
                cnt = 1;
            } else {
                cnt++;
            }
        }
    }
    function compare(a, b) {
        // sort our new array by how many times things were searched
        if (a.howMany > b.howMany)
            return -1;
        if (a.howMany < b.howMany)
            return 1;
        return 0;
    };
    //  select recent serach boxes and append newSearch[number].target for amount of seach results you want
    function makeTable() {
        for (var i = 0; i < 5; i++) {

            $('#searchResults').append("<tr><td>" + newSearch[i].target + "</td><td>" + newSearch[i].howMany + "</td></tr>")
            console.log(newSearch)
        }
    }
});

