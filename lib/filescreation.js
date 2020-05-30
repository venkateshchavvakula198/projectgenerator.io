const fs=require('fs')
const download=require('download')
const clear = require('clear');

module.exports = {
    projectcreation(data) {

            download('https://github.com/venkateshchavvakula198/projectzip/archive/master.zip', 'dist').then(() => {
            var AdmZip = require('adm-zip');  
            // reading archives
            var zip = new AdmZip("./dist/projectzip-master.zip");
            zip.extractAllTo(/*target path*/"./dist/", /*overwrite*/true);
            var zip = new AdmZip("./dist/projectzip-master/backend.zip");
            zip.extractAllTo(/*target path*/"./"+data.filename+"/", /*overwrite*/true);
            if (fs.existsSync('./dist')) {
                var rimraf = require("rimraf");
                rimraf.sync("./dist");
                clear()
                process.exit(0)
            }
        });
    },
}
