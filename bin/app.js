#!/usr/bin/env node
// Delete the 0 and 1 argument (node and script.js)
var args = process.argv.splice(process.execArgv.length + 2);
console.log(__dirname)
// Retrieve the first argument
var name = args[0];

var myLibrary = require('../app.js');
console.log(name)
// Displays the text in the console
myLibrary.run();

