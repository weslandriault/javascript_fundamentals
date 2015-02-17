// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

function favColours(colours) {
	for (var i=0; i < colours.length; i++) {
		if (i === 0) {
			console.log("My 1st choice is " + colours[i] + ".");
		}
		else if (i === 1) {
			console.log("My 2nd choice is " + colours[i] + ".");
		}
		else if (i === 2) {
			console.log("My 3rd choice is " + colours[i] + ".");
		}
		else{
			console.log("My " + (i+1) + "th"  + " choice is " + colours[i] + ".");
		}
	}
}

var colours = ["green", "red", "blue", "black", "white"];

favColours(colours);


