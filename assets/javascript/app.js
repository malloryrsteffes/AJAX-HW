// Key: 86gmopU2iKrSWy2FWvm1h5sM3An49fxH

// Create an array to hold the animals

// Grab our GIPHY API by making an Ajax request
var queryURL = "https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=86gmopU2iKrSWy2FWvm1h5sM3An49fxH&limit=5"

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
