// Key: 86gmopU2iKrSWy2FWvm1h5sM3An49fxH

// Create an array to hold the animals

// This .on("click") function will trigger the AJAX call
$("#find-animal").on("click", function(event) {

    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();

    // Here we grab the text from the input box
    var animal = $("#animal-input").val();

    // Grab our GIPHY API by making an Ajax request
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal +"&api_key=86gmopU2iKrSWy2FWvm1h5sM3An49fxH&limit=5"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });

});
