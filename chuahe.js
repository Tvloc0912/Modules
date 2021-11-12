const fs = require("fs");
module.exports.config = {
	name: "chúa hề",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "BraSL", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Chúa Hề VN",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("chúa hề")==0 || (event.body.indexOf("Chúa hề")==0)) {
		var msg = {
				body: "Joker số 1 Việt Nam",
				attachment: fs.createReadStream(__dirname + `/noprefix/he.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}