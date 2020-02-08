const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');
const query=require('./lib/filesgeneration')
const exec=require('child_process').exec;
const fs=require('fs')
const download=require('download')
// clear();
console.log(chalk.yellow(figlet.textSync('welcome to my project',{horizontalLayout:'full'})));
const run = async()=>{
    const data=await query.askProjecttype();
    console.log(data)
    if(data){
        // angular(data.filename);
        filesdownload();
    }
}
const angular=async(data)=>{
exec('ng new '+data,function(error,stdOut,stdErr){
})
// clear();
// process.exit();

}
const filesdownload=async()=>{
     download('https://uc873c64a3833962e87ffd231426.dl.dropboxusercontent.com/cd/0/get/AxtULS_Sx-hus80idnfwmrXDBAe18bSp-ugFVFJZ9jNALF0SjbANUF6Txwk-4UFovVdaaRDmTfEILRMTWawsWShaaHcIi41eqATxBEWtWlpKqYmy_od9FB4IwBh00e2TOeA/file?dl=1', 'dist').then(() => {
    console.log('done!');

var AdmZip = require('adm-zip');
 
// reading archives
var zip = new AdmZip("./dist/newproject.zip");
var zipEntries = zip.getEntries();
console.log(zipEntries,'g')
zip.extractAllTo(/*target path*/"./dist/", /*overwrite*/true);
 });
}
run();