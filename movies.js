
    $("#Form").on("submit",function(e){
        e.preventDefault(); 
        console.log("This was submitted");
        let rating = $('#InputRating').val();
        let movie = $('#InputTitle').val();
        createString(movie,rating);

        $('#Form').trigger("reset");

    });

        $('#movie-container').on('click', "button",function(evt){
            console.log(evt.target);
            evt.target.closest('li').remove();
    });


    function createString(movie,rating){
        let input = `
        <li>You rated ${movie} a ${rating} out of 10 
            <button>Remove</button> 
        </li>`;
        $('#movie-container').append(input);
        return input;
    };




// between line 4 and 5, always use a named function and pass that into the submit so tis more testable
// split up into mult fxns -- 1 fxn, accepts a movie / rating and returns a string + li + data ---- easier to test
// line 15 anti pattern 