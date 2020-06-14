#!/usr/bin/env node
const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');
const query = require('../lib/filesgeneration')
const exec = require('child_process').exec;
const filescreation = require('../lib/filescreation')
var Spinner = require('cli-spinner').Spinner;
var spinner = new Spinner('processing.. %s');
spinner.setSpinnerString('⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏');

// clear();
console.log('welcome to project generator')
console.log(chalk.yellow(figlet.textSync('pg', { font: 'Ghost',
horizontalLayout: 'default',
verticalLayout: 'default'
})));
const run = async () => {
    // Delete the 0 and 1 argument (node and script.js)
    var args = process.argv.splice(process.execArgv.length + 2);
    console.log(__dirname)
    // Retrieve the first argument
    var name = args[0];
    console.log(args);
    
    console.log(name)
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
}
const angular = async (data) => {
    return new Promise(function(resolve, reject) {
     spinner.start();
        var childprocess = exec('ng new ' + data, function(error, stdout, stderr) {
            if (error) {
                reject(error);
            } else {
                resolve("program exited without an error");
            }
        });
    });

}
 

run();


