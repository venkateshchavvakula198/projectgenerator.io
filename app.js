const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');
const query=require('./lib/filesgeneration')

// clear();
console.log(chalk.yellow(figlet.textSync('welcome to my project',{horizontalLayout:'full'})));
const run = async()=>{
    const data=await query.askProjecttype();
    console.log(data)
}
run();