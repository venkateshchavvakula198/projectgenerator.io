#!/usr/bin/env node
const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');
const query = require('../lib/filesgeneration')
const exec = require('child_process').exec;
const filescreation=require('../lib/filescreation')
// clear();
console.log(chalk.yellow(figlet.textSync('Welcome to pg', { horizontalLayout: 'full' })));
const run = async () => {

    // Delete the 0 and 1 argument (node and script.js)
var args = process.argv.splice(process.execArgv.length + 2);
console.log(__dirname)
// Retrieve the first argument
var name = args[0];
console.log(name)
// Displays the text in the console
    const data = await query.askProjecttype();
    console.log(data)
    if (data) {
        await angular(data.filename);
    }
}
const angular = async (data) => {
     exec('ng new ' + data, function (error, stdOut, stdErr) {
    })
    filescreation.projectcreation(data)
}

run();


