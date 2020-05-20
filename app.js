const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');
const query = require('./lib/filesgeneration')
const exec = require('child_process').exec;
const filescreation=require('./lib/filescreation')
// clear();
console.log(chalk.yellow(figlet.textSync('Project Generation', { horizontalLayout: 'full' })));
const run = async () => {
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
exports.run = run()
