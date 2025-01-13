Calculator App

Description

This is a simple calculator application built with JavaScript, HTML, and CSS. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The app handles invalid inputs gracefully, providing error messages for malformed expressions or unsupported operations.

Features

Supports addition (+), subtraction (-), multiplication (*), and division (/).

Handles consecutive identical operators (e.g., 9++3 simplifies to 9+3).

Throws an error for malformed expressions with different consecutive operators (e.g., 9+*/3).

Prevents division by zero, displaying "DIVISION BY 0 IS UNDEFINED".

Detects and displays errors for inputs containing text or unsupported characters.

Clears error messages immediately when the input is modified.

Technologies Used

HTML: For structuring the app interface.

CSS: For styling the app.

JavaScript: For implementing the calculator logic.

Installation

Clone the repository or download the project files.

Open the index.html file in a web browser.

Usage

Enter numbers and operators using the calculator buttons or keyboard.

Press the = button to calculate the result.

Use the C button to clear the input field and reset the calculator.

Error Handling

Invalid Characters: Displays an error if the input contains unsupported characters (e.g., letters).

Malformed Expressions: Throws an error for expressions with different consecutive operators (e.g., +*).

Division by Zero: Displays "DIVISION BY 0 IS UNDEFINED" if the expression attempts division by zero.

Empty Input: Displays an error if the input field is empty when solving.

Code Highlights

Handling Consecutive Operators

x = x.replace(/[+\-*/]{2,}/g, (match) => {
  if (match.length === 2) {
    return match.slice(-1); // Keep the second operator
  } else {
    throw new Error(`Malformed Expression: More than two consecutive operators ('${match}')`);
  }
});

Clearing Error Messages

document.getElementById('result').addEventListener('input', () => {
  msg.textContent = ''; // Clear error message
});

Example Scenarios

Valid Input

Input: 9+3

Output: 12

Consecutive Operators

Input: 9++3

Output: 12 (simplified to 9+3)

Malformed Expression

Input: 9+*/3

Output: Error: "Malformed Expression: More than two consecutive operators ('+*/')"

Division by Zero

Input: 9/0

Output: "DIVISION BY 0 IS UNDEFINED"

Invalid Input

Input: Hello

Output: "Invalid Input: Text or unsupported characters detected"

Future Enhancements

Add advanced mathematical functions (e.g., square root, exponentiation).

Improve the user interface with better styling and animations.

Allow keyboard shortcuts for operations and functionality.

Implement a history feature to keep track of past calculations.

License

This project is licensed under the MIT License. Feel free to use, modify, and distribute as needed.
