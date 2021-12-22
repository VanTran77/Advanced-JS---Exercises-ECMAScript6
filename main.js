// Exercise 8
// Rewrite if..else using multiple ternary operators '?'.
// let message;
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }
//------------------------------------------------------------------//
let login = "Director";
let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';
console.log(message);
//------------------------------------------------------------------//

// Exercise 7
// Rewrite this if using the ternary operator '?':
// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }
//------------------------------------------------------------------//
// let a = 1;
// let b = 5;
// let result = a + b < 4 ? 'Below' : 'Over';
// console.log(result);
//------------------------------------------------------------------//

// Exercise 6:
//Write a code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0.
//------------------------------------------------------------------//
// let salaries = {
//     Fred: 100,
//     Ted: 160,
//     Ghaith: 130
//   }
// function sumSalaries(salaries){
//     let sum = 0;
//     for (let i=0; i<Object.values(salaries).length; i++)
//     sum += Object.values(salaries)[i];
//     console.log(sum);
// }
// sumSalaries(salaries);
// console.log(Object.values(salaries));
//------------------------------------------------------------------//

// Exercise 5
// Is it possible to change an object declared with const, how do you think and why?
//--------------------------------------//
//Yes, it works. Because we don't change the value of a variable declared by const.
//In this case, we change the properties of object. 
// const user = {
//     name: "John"
//   }
//   // does it work?
//   user.name = "Pete"
// //--------------------------------------//

// Exercise 4
// Write the code, one line for each action:
// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.
//--------------------------------//
// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Peter';
// delete user.name;
// console.log(user);  
//--------------------------------//

// Exercise 3
// Look at the code. What will be result of the call at the last line and why?
//Web browser will display an alert "Hello, John". Because the last line calls an alert from function sayHi()  
//-------------------------------//
// let phrase = "Hello"
// if (true) {
//   let user = "John";
//   function sayHi() {
//     alert(`${phrase}, ${user}`)
//   }
// }
// sayHi()
//--------------------------------//

// Exercise 2
// Give the right name:
// Create the variable with the name of our planet. How would you name such a variable?
// Create the variable to store the name of the current visitor. How would you name that variable?
//----------------------------------//
// const myPlanet = "Earth";
// let currentVisitor = "John";
// console.log();
//---------------------------------//

// Exercise 1
// Write the destructuring assignment that reads:
// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false if absent)
//---------------------------//
// let user = {
//     firstname: "John",
//     years: 30,
// }
// let {firstname, years, isAdmin = false} = user;
// console.log(firstname, years, isAdmin);
//----------------------------//