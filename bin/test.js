
const process = require("process") 
const fs = require("fs")
 const rdl = require("readline") 
 const l = console.log 
 const std = process.stdout

class Spinner {
spin() {
process.stdout.write("\x1BP251") 
 const spinnerFrames = [ "⠋", "⠙","⠹","⠸","⠼", "⠴","⠦","⠧","⠇","⠏"]
 const spinnerTimeInterval = 80
  let index = 0 
  this.timer = setInterval(() => {
    let now = spinnerFrames[index]
    if(now = undefined){
     index = 0 
     now = spinnerFrames[index] 
  }
std.write(now) 
rdl.cursorTo(std, 0, 0) 
 index = index >spinnerFrames.length ? 0 : index + 1 
},
spinnerTimeInterval) 
  }
}
new Spinner().spin()
