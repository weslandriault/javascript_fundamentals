// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

// function fortuneTeller(job_title, geographic_location, partner_name, num_of_children) {
// 	if (num_of_children === 1) {
// 		document.write("You will be a " + job_title + " in " + geographic_location + ", married to " + partner_name + " with " + num_of_children + " kid.<br>");
// 	}
// 	else {
// 		document.write("You will be a " + job_title + " in " + geographic_location + ", married to " + partner_name + " with " + num_of_children + " kids.<br>");
// 	}
// }

// fortuneTeller("sculptor", "Paris", "Marilyn Monroe", 5);
// fortuneTeller("pencil pusher", "Paradise", "nobody special", 1);

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

// current_year = 2015;
// birth_year = 1978;

// document.write("They are either " + (current_year - birth_year) + " or " + (current_year - birth_year - 1) + " years old.")

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

// current_age = 25;
// maximum_age = 90;
// snack_amount_per_day = 4;

// document.write("You will need " + ((maximum_age - current_age) * 365 * 4) + " snacks to last you until the ripe old age of " + 90 + ".");

// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

// radius = 4
// circumference = Math.PI * (2*radius);
// area = Math.PI * (radius * radius)
// document.write("The circumference of the circle is " + circumference + " cm. <br>");
// document.write("The area of the circle is " + area + " cm. <br>");


// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
function celsiusToFahrenheit(celsius) {
	document.write(celsius + "°C " + "is " + (celsius * 9/5 + 32 ) + "°F.<br>")
}
function fahrenheitToCelsius(fahrenheit) {
	document.write(fahrenheit + "°F " + "is " + ((fahrenheit - 32)* 5/9) + "°C.<br>")
}

celsiusToFahrenheit(25);
fahrenheitToCelsius(95);





