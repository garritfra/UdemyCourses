var frozen = new createMovie("frozen", 4, true);
var MadMax = new createMovie("Mad Max", 5, true);

var movies = [frozen, MadMax];

movies.forEach(function(item) {
    printMovie(item);
});

function createMovie(name, rating, seen) {
    this.name = name;
    this.rating = rating;
    this.seen = seen;
}

function printMovie(movie) {

    if (movie.seen === true) {
        console.log("You have watched " + movie.name + " - " + movie.rating + " stars");
    } else if (movie.seen === false) {
        console.log("You have not seen " + movie.name + " - " + movie.rating + " stars");
    }
}