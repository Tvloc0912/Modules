module.exports.config = {
    name: "noprefix",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "ProCoderMew - Mod By Lê Đức Thuận",
    description: "Nói bot ngu đi - ăn ban",
    commandCategory: "noprefix",
    usages: "",
    cooldowns: 0
};

module.exports.handleEvent = ({ event, api }) => (event.body.toLowerCase() == "bot óc") ? api.sendMessage("Chúc mừng m đã bị tao ban", event.threadID, () => 
                    global.data.userBanned.set(parseInt(event.senderID), 1): '';
module.exports.run = () => {}
