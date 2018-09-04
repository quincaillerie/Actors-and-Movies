
// time to add fire base
var config = {
    apiKey: "AIzaSyCoKN3aBcomtecZICsL1l_FNfBZawPOzow",
    authDomain: "movieprojectissofun.firebaseapp.com",
    databaseURL: "https://movieprojectissofun.firebaseio.com",
    projectId: "movieprojectissofun",
    storageBucket: "movieprojectissofun.appspot.com",
    messagingSenderId: "920966827156"
  };
  firebase.initializeApp(config);

  var searchArray = []
  var database = firebase.database();
  
  
  $("#search").on("click", function(e) {
    e.preventDefault();
  
  
    var search = $("#search").val().trim();
  
  
  
  
    database.ref().push(search);
  
  
    $("#search").val("");
  });
  
  
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
  
    var search = childSnapshot.val()
  
  searchArray.push(search)
  $('#searchDiv').html(searchArray)
  
  });
   
var newSearch = []
function count() {
  // array_elements = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];
  
  searchArray.sort();
  
  var current = null;
 
  var cnt = 0;

  for (var i = 0; i < searchArray.length+1; i++) {
 
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
count();
console.log('object below')
console.log(JSON.stringify(newSearch))


function compare(a,b) {
  if (a.howMany > b.howMany)
    return -1;
  if (a.howMany < b.howMany)
    return 1;
  return 0;
}
compare();

newSearch.sort(compare);
console.log(newSearch)