// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works 
// (e.g. "The greater number of 5 and 10 is 10.").

// function greaterNum(num1, num2) {
// 	if (num1>num2) {
// 		document.write("The greater number of " + num1 + " and " + num2 + " is " + num1 + ".<br>");
// 	}
// 	else if (num1 === num2) {
// 		document.write("Both " + num1 + " and " + num2 + " are equal.<br>");
// 	}
// 	else {
// 		document.write("The greater number of " + num1 + " and " + num2 + " is " + num2 + ".<br>");
// 	}
// }

// greaterNum(23, 56);
// greaterNum(33, 3);
// greaterNum(12345, 12345);


// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

// function helloWorld(language_code) {

// 	if (language_code == "de") {
// 		document.write("Hallo welt.<br>")
// 	}
// 	else if (language_code == "fr") {
// 		document.write("Bonjour le monde.<br>")
// 	}
// 	else if (language_code == "es") {
// 		document.write("Hola mundo.<br>")
// 	}
// 	else {
// 		document.write("Hello World.<br>");
// 	}
// }

// helloWorld("es");
// helloWorld("de");
// helloWorld("fr");
// helloWorld("en");
// helloWorld("asfsasadf");

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

// function checkGrade(grade) {
	
// 	if (grade >= 90)  {
// 		document.write("For " + grade + " You got an A.<br>");
// 	}
// 	else if (grade < 90 && grade >= 80) {
// 		document.write("For " + grade + " You got an B.<br>");
// 	}
// 	else if (grade < 80 && grade >= 70) {
// 		document.write("For " + grade + " You got an C.<br>");
// 	}
// 	else if (grade < 70 && grade >= 60) {
// 		document.write("For " + grade + " You got an D.<br>");
// 	}
// }

// checkGrade(99);
// checkGrade(80);
// checkGrade(79);
// checkGrade(65);

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function Pluralize(noun, number) {
	if (number == 1) {
		document.write(number + " " + noun + ".<br>")
	}
	else {
		document.write(number + " " + noun + "s.<br>")
	}
}

Pluralize("cat", 5);
Pluralize("dog", 1);




