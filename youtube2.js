function tplawesome(e, t) { res = e; for (var n = 0; n < t.length; n++) { res = res.replace(/\{\{(.*?)\}\}/g, function (e, r) { return t[n][r] }) } return res }


$(function () {
  $("form").on("search", function (e) {
    e.preventDefault();
    // prepare the request
    var request = gapi.client.youtube.search.list({
      part: "snippet",
      type: "video",
      q: encodeURIComponent($('#search').val()).replace(/%20/g, '+'),
      maxResults: 3,
      order: 'viewCount',
    });

    request.execute(function (response) {
      console.log(response);
      var results = response.result;
      $('#results').html("");
      $.each(results.items, function (index, item) {
        $.get('item', function(data) {
          $('#results').append((tplawesome(data, [{'title': item.snippet.title, 'videoid':item.id.videoId}]));
  });
      });
      resetVideoHeight();
    });
  });
  $(window).on('resize', resetVideoHeight);
});



function init() {
  gapi.client.setApikey('AIzaSyA5jHBMVIbhdYKSbK7aHo7d-DUR0-oHzeQ');
  gapi.client.load('youtube', 'v3', function {
    //youtube api is ready
  })
}

function resetVideoHeight() {
  $('video').css('height',$('results').width() * 9/16);
}



function start() {
  // 2. Initialize the JavaScript client library.
  gapi.client.init({
    'apiKey': 'AIzaSyA5jHBMVIbhdYKSbK7aHo7d-DUR0-oHzeQ',
    // Your API key will be automatically added to the Discovery Document URLs.
    'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
  }).then(function () {
    // 3. Initialize and make the API request.
    return gapi.client.people.people.get({
      'resourceName': 'people/me',
      'requestMask.includeField': 'person.names'
    });
  }).then(function (response) {
    console.log(response.result);
  }, function (reason) {
    console.log('Error: ' + reason.result.error.message);
  });
};
// 1. Load the JavaScript client library.
gapi.load('client', start);
