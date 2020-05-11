    //Immediately Invoked Function Executions (IIFEs)
    //IIFEs in a local scope
// (function calc() {
//     console.log('Calc');
// })();

// (function calc() {
//     var number = 10;
//     console.log(number);
// })();

// (function calc() {
//     var number = 10;
//     console.log(number);
// })();
// console.log(number);
// //Register function in a local scope

// var obj = {};
// (function calc(input) {
//     obj.name = 'Max';
// })(obj);
// console.log(obj);
// //IIFEs in a global scope
// //Created the object on the global scope, is registered in the global scope!



    //Built-in Methods & Properties
// function message(message) {
//     console.log(message);
//     console.log(arguments);
// }
// message('Hi!');

// function message(message) {
//     console.log(message);
//     console.log(arguments);
// }
// message('Hi!', 10);

// function message(message) {
//     console.log(message);
//     console.log(arguments[2]);
// }
// message('Hi!', 10);

// function message(message) {
//     console.log(message);
//     console.log(arguments.length);
// }
// message('Hi!', 10);

// function message(message) {
//     console.log(message);
// }
// console.log(message.name);

// function message(message) {
//     console.log(message);
// }
// var msg = message;
// console.log(msg.name);

// function message(message, number) {
//     console.log(message);
// }
// var msg = message;
// console.log(msg.length);

// var msg = function message(message) {
//     console.log(message);
// }
// console.log(msg.length);

// function message(message) {
//     console.log(this.name);
// };
// message();
