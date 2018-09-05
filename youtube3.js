var queryURL = "https://api.themoviedb.org/3/search/movie?api_key=a5b28b40ca05946a267a6aa421bbc46b&query=Jack+Reacher&append_to_response=videos"
"&order=viewCount" +
"&type=video" +
"&videoEmbeddable=true" +
"&maxResults=5" +
"&q=" + artist + "&key=" + apikey;

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  // $("#movie-view").text((response));
  console.log(response);
});
