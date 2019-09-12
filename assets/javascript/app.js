// Key: 86gmopU2iKrSWy2FWvm1h5sM3An49fxH
$( document ).ready(function() {
    // Create an array to hold the animals
    var animals = ["cat", "dog", "horse", "pig", "cow", "rabbit", "snake", "frog", "lizard", "bird", "mouse", "rat", "lion", "tiger", "bear"]

    // Function to render new buttons to the page. This function rerenders the entire array each time.
    function renderButtons(){

        // We empty out the buttons, so we don't have repeats each time
        $("#buttons-view").empty();

        // Loops through the array of movies
        for (var i = 0; i < animals.length; i++) {

            // Then dynamically generates buttons for each movie in the array.
            var b = $("<button>");
            // Adding a class
            b.addClass("animal-button");
            // Adding a data-attribute with a value of the movie at index i
            b.attr("data-name", animals[i]);
            // Providing the button's text with a value of the movie at index i
            b.text(animals[i]);
            // Adding the button to the HTML
            $("#buttons-view").append(b);
        }
    }

    // This .on("click") function will trigger the AJAX call
    $("#add-animal").on("click", function(event) {

        // event.preventDefault() can be used to prevent an event's default behavior.
        // Here, it prevents the submit button from trying to submit a form when clicked
        event.preventDefault();

        // Here we grab the text from the input box
        var animal = $("#animal-input").val().trim();


        // Adding movie from the textbox to our array
        animals.push(animal);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();

    });

    //On click listener for any button with a class of animal-button
function displayAnimalInfo(){
    $("#animal-button").on("click", function(){
     // Grab our GIPHY API by making an Ajax request
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal +"&api_key=86gmopU2iKrSWy2FWvm1h5sM3An49fxH&limit=5"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
        });
    })
}

$(document).on("click", ".animal-button", displayAnimalInfo);


    // Displays the initial array items as buttons on the page
    renderButtons();

});
