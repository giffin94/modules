// var myModule = require("./my-module"); //requires the module my-module.js in the same directory as the file requiring module

// module.exports = function {} {/*...*/};

//

var cowsay = require("cowsay")
var chalk = require("chalk")

console.log(chalk.redBright(cowsay.say({
  text : chalk.magentaBright("I am the cow KING!"),
  e : "oO",
  T : "U "
})));

console.log(chalk.blueBright('\nmy realm is a myth lol'))