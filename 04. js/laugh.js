console.log(laugh(3));

function laugh(repeat) {
	var laugh = "";
	for(var x = 0; x < repeat; x++) {
		laugh += "ha";
	}
	return laugh + "!";
}