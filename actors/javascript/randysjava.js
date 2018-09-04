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

              if (response.Search.Title === $("#movie-name").val()) {
                  var title = response.Search[i].Title;
                  var year = response.Search[i].Year
                  $("#container").append(response.Search[i].Title);
                  $("#container").append(response.Search[i].Year);
                  console.log(response);
                  console.log("response check 2");
      

              } else {
                  var title = response.Search[i].Title;
                  var year = response.Search[i].Year
                  var img = response.Search[i].Poster
                  $("#container").append("<div class='result'> <p> Year: " + year + "</p> <img src='" + img + "'> </div>");
                  console.log("Imprecise Movie Input");
                  console.log(response.Search[i].Title);
              };
          };
          // console.log(response.data[i].embedded_url);
          /*     var gifUrl = response.data[i].rating;
              console.log("url is: " + gifUrl)
              $(".container").append(`<img src="${gifUrl}">`); */
      });



  });
 

  $("#submit").click(function (e) {
      e.preventDefault();
      var search = $("#movie-name").val();
  database.ref().push(search);
      });

  database.ref().on("child_added", function(childSnapshot) {

                      var search = childSnapshot.val()
              
                      searchArray.push(search)
                    
         
      });
   console.log(searchArray)
  //  why is search array undefined ...
   console.log(searchArray[5])
  //  var tempArray = SearchArray.sort();
  //  console.log(tempArray);
          //     var  newSearch = [];
          //             function count() {
          //             var current = null;
                      
          //             var cnt = 0;
              
          //             for (var i = 0; i < searchArray.length+1; i++) {
                  
          //                 if (searchArray[i] != current) {
                          
          //                     if (cnt > 0) {
                          
          //                         var newObj = {
          //                         target: current,
          //                         howMany: cnt,
          //                         }
          //                         newSearch.push(newObj)
          //                     }
          //                     current = searchArray[i];
          //                     cnt = 1;
                          
          //                 } else {
                              
          //                     cnt++;
                              
          //                 }
          //             }
              
          //     }
          // function compare(a,b) {
          //     if (a.howMany > b.howMany)
          //     return -1;
          //     if (a.howMany < b.howMany)
          //     return 1;
          //     return 0;
          // };
          // count();
          // newSearch.sort(compare);
        
              //  select recent serach boxes and append newSearch[number].target
          //     function makeTable(){
          //         for (var i = 0; i <=2; i++){
          //     console.log(newSearch[1].howMany)
          //         $('#searchResults').replaceWith("<tr><td>"+newSearch[1].target+"</td><td>"+newSearch[1].howMany+"</td></tr>")
          //     }}
          // makeTable();




  
  
  



});

