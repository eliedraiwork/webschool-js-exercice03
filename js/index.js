//  define the variables
let num1;
let num2;

//  input numbers from the user
num1 = prompt('Please, enter number 1');
num2 = prompt('Please, enter number 2');

//  parse the string numbers into numbers
num1 = parseInt(num1);
num2 = parseInt(num2);

// num1 = parseFloat(num1);
// num2 = parseFloat(num2);

// Make the division
let result = num1 / num2;

// Round the result
// result = Math.round(result);
result = parseFloat(result.toFixed(2));

// Display the result in the alert window
alert(
	'The result of the division between ' +
		num1 +
		' and ' +
		num2 +
		' is ' +
		result
);
