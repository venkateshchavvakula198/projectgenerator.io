#!/usr/bin/env node
const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');
const query = require('../lib/filesgeneration')
const exec = require('child_process').exec;
const filescreation = require('../lib/filescreation')
var Spinner = require('cli-spinner').Spinner;
var spinner = new Spinner('%s');
spinner.setSpinnerString('⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏');
var packagejson = require('../package.json');

// clear();
console.log("Welcome To Project Genearator")

console.log(chalk.yellow(figlet.textSync('pg', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default'
})));
const run = async () => {
    // Delete the 0 and 1 argument (node and script.js)
    var args = process.argv.splice(process.execArgv.length + 2);
    // Retrieve the first argument
    var name = args[0];
    if (name && name.toLowerCase() == 'mean') {
        // Displays the text in the console
        const projectName = await query.askProjecttype();
        if (projectName) {
            await angular(projectName.filename).then(function (data) {
                filescreation.projectcreation(projectName.filename)
            }, function (err) {
                //console.log("fail: ", err);
                filescreation.projectcreation(projectName.filename)
            });

        }
    } else {
        console.log('projectgenerator.io@', packagejson.version);
        console.log('pg is used to create project with single command currently pg supported to generate MEAN Applications');
        console.log('Command Ex.', 'pg Mean');
        console.log('Prerequest.. Instalations..');
        console.log('node:>=10.15');
        console.log('npm:>=6.3');
        console.log('angular:>=6');
        process.exit(0)
    }
}
const angular = async (data) => {
    return new Promise(function (resolve, reject) {
        spinner.start();
        var childprocess = exec('ng new ' + data, function (error, stdout, stderr) {
            if (error) {
                reject(error);
            } else {
                resolve("program exited without an error");
            }
        });
    });

}


run();

module.exports.spinner=spinner
