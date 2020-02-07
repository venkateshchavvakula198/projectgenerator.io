const inquirer = require('inquirer');
module.exports={
    askProjecttype:()=>{
        const questions=[
            {
                name:'filename',
                type:'input',
                message:'Enter choose programming languages',
                validate: function(value){
                    if(value.length){
                        return true
                    }else{
                        return "please enter name"
                    }
                }
            }
        ]
        return inquirer.prompt(questions)
    }
}