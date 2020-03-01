const inquirer = require('inquirer');
module.exports={
    askProjecttype:()=>{
        const questions=[
            {
                name:'filename',
                type:'input',
                message:'Enter Project Name',
                validate: function(value){
                    if(value.length){
                        return true
                    }else{
                        return "Please Enter Name"
                    }
                }
            }
        ]
        return inquirer.prompt(questions)
    }
}