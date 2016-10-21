// Complete the following challenge:
// 1) write a function named stringy that
//    takes a size and returns a string of
//    alternating '1s' and '0s'. The string
//    should start with a 1. a string with
//    size 6 should return :'101010', with
//    size 4 should return : '1010', with size
//    12 should return : '101010101010'. The
//    size will always be positive and will
//    only use whole numbers.

window.addEventListener("load",function(){
	var baseString = "10";
	var StringyOutput;
	document.getElementById("buttonClick").addEventListener("click", function(){
	    var StringyInput = prompt("Please enter the string length:", "Your number here.");
		    console.log( StringyInput );
	    // if (StringyInput != null) {
    	for (var i = 1;  i >= StringyInput; i++) {
		    console.log( i );
    		StringyOutput = "10" + baseString;
    		baseString = StringyOutput;
			document.getElementById("demo").innerHTML = "Your string is " + StringyOutput;
		}
		// }
	})
});