var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '360',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }


// creating query to get movie trailer

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.themoviedb.org/3/movie/%7Bmovie_id%7D/videos?language=en-US&api_key=a5b28b40ca05946a267a6aa421bbc46b",
  "method": "GET",
  "headers": {},
  "data": "{}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});







// function displayMovieInfo() {
  // Grabbing and storing the data-animal property value from the button
  var trailer = $(this).attr("data-trailer");
  

      var queryURL = "https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=a5b28b40ca05946a267a6aa421bbc46b&append_to_response=videos,image";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(queryURL);
        console.log(response);
        var results = response.data;

      });








// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://api.themoviedb.org/3/movie/%7Bmovie_id%7D/videos?language=en-US&api_key=a5b28b40ca05946a267a6aa421bbc46b",
//   "method": "GET",
//   "headers": {},
//   "data": "{}"
// }

// $.ajax(settings).done(function (response) {
//   console.log(response);
// });