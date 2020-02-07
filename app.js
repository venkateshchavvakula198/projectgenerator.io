const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');
const query=require('./lib/filesgeneration')
const exec=require('child_process').exec;
// clear();
console.log(chalk.yellow(figlet.textSync('welcome to my project',{horizontalLayout:'full'})));
const run = async()=>{
    const data=await query.askProjecttype();
    console.log(data)
    if(data){
        angular(data.filename);
    }
}
const angular=async(data)=>{
exec('ng new '+data,function(error,stdOut,stdErr){
})
// clear();
// process.exit();

}
run();