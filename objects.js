// Exercises: Objects

// EXERCISE: The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), 
// servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

// var recipe = {
// 	name: "Lasagna",
// 	serves: 2,
// 	ingredients: ["2 28 oz. cans tomatoes", "1-2 tbsp tomato paste",
// 	"1 large onion", "garlic", "1 lb. lean ground beef", "dried oregano", 
// 	"crushed red pepper", "salt and pepper"]
// }

// var listIngredients = function() {
// 	for (i=0; i < recipe.ingredients.length; i++) { 
// 		console.log(recipe.ingredients[i]) 
// 	}
// }

// console.log("Recipe for: " + recipe.name);
// console.log("Serves: " + recipe.serves);
// console.log("Ingredients:");
// listIngredients();

// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties
// for the title (a string), author (a string), and alreadyRead (a boolean indicating if 
// you read it yet). Iterate through the array of books. For each book, log the book title
// and book author like so: "The Hobbit by J.R.R. Tolkien". // Now use an if/else statement
//  to change the output depending on whether you read it yet or not. If you read it, log a string like 
// 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 
// 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

// var books = [
// 	{	
// 		name: "The Lord of the Rings",
// 		author: "J.R.R Tolkien",
// 		ive_read: true
// 	},
// 	{
// 		name: "The Hunger Games",
// 		author: "Suzanne Collins",
// 		ive_read: true
// 	},
// 	{
// 		name: "1984",
// 		author: "George Orwell",
// 		ive_read: false
// 	}
// ];

// books.forEach(function(book){
// 	if (book.ive_read === true) {
// 		console.log("You have already read " + book.name + " by " + book.author + ".");
// 	}

// 	else {
// 		console.log("You still have to read " + book.name + " by " + book.author + ".");	
// 	}
//  });



// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), 
// and stars (an array of strings). // Create a function to print out the movie information like so: 
// "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var movies = [
	{	
		title: "The Departed",
		duration: 151,
		stars: [	
			"Leonardo DiCaprio",
			"Matt Damon",
			"Jack Nicholson",
			"Mark Wahlberg",
			"Martin Sheen"
		]
	},
	{
		title: "The Godfather Part II",
		duration: 200,
		stars: [	
			"Al Pacino",
			"Robert Duvall",
			"Diane Keaton",
			"Robert De Niro",
			"Talia Shire"
		]
	},
	{
		title: "Back to the Future",
		duration: 116,
		stars: [		
				"Michael J. Fox",
				"Christopher Lloyd",
				"Lea Thompson",
				"Crispin Glover"
		]
	}
];


movies.forEach(function(movie) {
	
	function printStars() { 
		return movie.stars.join(", ");
	}	
	console.log(movie.title + " lasts for " + movie.duration + " minutes. " + "Stars: " + movie.stars.join(", ") + ".");
});

