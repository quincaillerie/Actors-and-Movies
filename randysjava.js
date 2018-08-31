
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












var times = []
function count() {
  array_elements = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];
  
  array_elements.sort();
  
  var current = null;
 
  var cnt = 0;

  for (var i = 0; i < array_elements.length+1; i++) {
 
      if (array_elements[i] != current) {
       
          if (cnt > 0) {
        
              var newObj = {
                target: current,
                howMany: cnt,
              }
              times.push(newObj)
          }
          current = array_elements[i];
          cnt = 1;
         
      } else {
          
          cnt++;
          
      }
  }

}
count();
console.log('object below')
console.log(JSON.stringify(times))


function compare(a,b) {
  if (a.howMany > b.howMany)
    return -1;
  if (a.howMany < b.howMany)
    return 1;
  return 0;
}

times.sort(compare);
console.log(times)