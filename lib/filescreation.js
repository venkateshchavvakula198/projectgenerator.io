const fs=require('fs')
const download=require('download')
const clear = require('clear');
const shell = require('shelljs')

module.exports = {
    projectcreation(projectName) {

            download('https://github.com/venkateshchavvakula198/projectzip/archive/master.zip', 'dist').then(() => {
            var AdmZip = require('adm-zip');  
            // reading archives
            var zip = new AdmZip("./dist/projectzip-master.zip");
            zip.extractAllTo(/*target path*/"./dist/", /*overwrite*/true);            
            var zip = new AdmZip("./dist/projectzip-master/pg.zip");
            zip.extractAllTo(/*target path*/"./dist/", /*overwrite*/true);
   console.log(projectName)
            if(shell.test('-d', `${projectName}/src/app/`)){
            shell.cp('-R','dist/pg/backend',`${projectName}/`)
            shell.mv(['dist/pg/mean/src/app/login-success'],`${projectName}/src/app/`);
            shell.mv(['dist/pg/mean/src/app/login-signup'],`${projectName}/src/app/`);
            shell.mv(['dist/pg/mean/src/app/response-request-handlers'],`${projectName}/src/app/`);
            
            shell.mv(['dist/pg/mean/src/app/app.component.html','dist/pg/mean/src/app/app.component.css','dist/pg/mean/src/app/user.service.ts'],`${projectName}/src/app/`);
            shell.mv(['dist/pg/mean/src/app/socket.service.ts','dist/pg/mean/src/app/frontendConfig.ts','dist/pg/mean/src/app/app.module.ts',],`${projectName}/src/app/`);
           
            shell.mv(['dist/pg/mean/src/app/app-routing.module.ts '],`${projectName}/src/app/`);
             shell.mv(['dist/pg/mean/src/styles.css'],`${projectName}/src/`)
             shell.mv(['dist/pg/mean/tsconfig.app.json'],`${projectName}/`)

            shell.rm('-rf','dist')
             shell.cd(`${projectName}`)
             shell.exec('npm i -s socket.io-client crypto-js ngx-cookie-service  @angular/material @angular/cdk @angular/animations ', {silent: true});
            shell.exec('npm install --save-dev @angular-devkit/build-angular')
             shell.exec('ng add @angular/material', (code, output) => {
               console.log("Thanks For Using Project Generator!")
             process.exit(0)

            })
        }else {
            process.exit(0)

        }
        });
    },
}
