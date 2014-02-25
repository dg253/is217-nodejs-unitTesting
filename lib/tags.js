//getting start with mocha & chai unit testing

exports = module.exports = {};
 
exports.parse = function(args) {
var options = {}
   for (var i in args) { //Cycle through args
       var arg = args[i];
       //Check if Long formed tag
       if (arg.substr(0, 2) === "--") {
           arg = arg.substr(2);
           //Check for equals sign
	   //If the argument in indexOf doesn't exist, it returns -1
	   //so !==-1 is saying it should not accept a -1, meaning if that doesnt exist then do nothing
           if (arg.indexOf("=") !== -1) {
               arg = arg.split("=");
	       //remove first item in array, this being the left side of "=" sign
               var key = arg.shift();
               options[key] = arg.join("=");
           }
       }
   }


return options; 
}
