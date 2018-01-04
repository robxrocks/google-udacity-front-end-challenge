/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(repeat) {
	var laugh = "";
	for(var x = 0; x < repeat; x++) {
		laugh += "ha";
	}
	return laugh + "!";
}

console.log(laugh(3));