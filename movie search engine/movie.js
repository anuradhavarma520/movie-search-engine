var inputElement = $("#movie-name")[0]

var movieWrapper = $("#movie-wrapper")

console.log(movieWrapper)

$("#search-btn").click( function(){
    movieWrapper.html(" ")
    $("#error").text("")
    $("#loader").text("loading........")
$.get("https://www.omdbapi.com/?apikey=c951ff1&s=" +inputElement.value , function(response){
    console.log(response)
    if(response.Response == "True"){
        $("#loader").text(" ")
        var movies = response.Search
        for( var i = 0 ; i < movies.length ; i++ ){
            console.log(movies[i])
            var movieCard = $("<div>")
            movieCard.addClass("movie-card")
            var movieImage = $("<img>")
            movieImage.attr("src" ,   movies[i].Poster )
            movieImage.addClass("movie-image")
            var titleElement = $("<p>")
            titleElement.text(movies[i].Title)
            var type = $("<p>")
            type.text(movies[i].Type)
            var releaseYear = $("<p>")
            releaseYear.text(movies[i].Year)
            movieCard.append(movieImage,titleElement,type,releaseYear)
            movieWrapper.append(movieCard)
           
        }
    }else{
        $("#loader").text(" ")
        $("#error").text("404 movies not found!!!")

    }
}   )
} )