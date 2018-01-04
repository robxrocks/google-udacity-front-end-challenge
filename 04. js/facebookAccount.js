/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
	name: "Rob",
	friends: 99,
	messages: ["hello"],
	postMessage: function(message) {
		facebookProfile.messages.push(message);
	},

	deleteMessage: function(index) {
		facebookProfile.messages.splice(index, 1);
	},

	addFriend: function() {
		facebookProfile.friends++;
	},

	removeFriend: function() {
		facebookProfile.friends--;
	}
};
