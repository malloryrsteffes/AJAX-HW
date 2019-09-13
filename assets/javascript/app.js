// Key: 86gmopU2iKrSWy2FWvm1h5sM3An49fxH
$(document).ready(function() {
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

    //On click listener for any button with a class of animal-button
    function displayAnimalInfo(){
        
        alert("You clicked!");
        // Set our animal variable equal to the text of the button. 
        var animal = $(this).attr("data-name");
        console.log(animal);

        // Grab our GIPHY API by making an Ajax request
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal +"&api_key=86gmopU2iKrSWy2FWvm1h5sM3An49fxH&limit=5"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
        
            var results = response.data;

            for (i = 0; i < results.length; i++){

                // Creating a div to hold the movie
                var gifDiv = $("<div class='gif'>");

                // Storing the rating data
                var rating = results[i].rating;

                // Creating an element to have the rating displayed
                var ratingParagraph = $("<p>").text("Rating: " + rating);

                // Displaying the rating
                gifDiv.append(ratingParagraph);

                // Retrieving the URL for the image
                var gifURL = results[i].images.fixed_height_still.url;
                var stillGIF = results[i].images.fixed_height_still.url;
                var movingGIF = results[i].images.fixed_height.url;

                // Creating an element to hold the image, giving it data attributes
                var gif = $("<img>").attr("src", gifURL);
                gif.attr("data-still", stillGIF);
                gif.attr("data-animate", movingGIF);
                gif.attr("data-state", "still");
                gif.addClass("gif")
                

                // Appending the image
                gifDiv.append(gif);

                // Putting the entire movie above the previous movies
                $("#gif-view").prepend(gifDiv);

                 // GIF on click still and animate function. For some reason, this works sometimes,
                 //and other times won't take affect. It's also console logging something undefined?
                 $(".gif").on("click", function() {
                    var state = $(this).attr("data-state");

                    if (state === "still"){
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                        console.log(state);
                      }
                
                      else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                      }
                });
            }

            
        });   
    }

    // This .on("click") function will trigger the AJAX call. This is DONE.
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

   



$(document).on("click", ".animal-button", displayAnimalInfo);


// Displays the initial array items as buttons on the page
renderButtons();

});
