module.exports.config = {
 name: "antijoin",
 version: "1.0.0",
 hasPermssion: 2,
 credits: "BraSL", 
 description: "Cấm tv vào nhóm, xin tuổi :)",
 commandCategory: "system",
 usages: "antijoin on/off",
 cooldowns: 0
};

module.exports.run = async function ({ event, api, Threads }) {
  const antijoin = (await Threads.getData(event.threadID)).data || {};
 let data = antijoin;
 if (data.newMember == false) return;
 if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) return
    var memJoin = event.logMessageData.addedParticipants.map(info => info.userFbId)
    await antijoinData();
  return api.sendMessage(`»Bạn đã bật antijoin, xin vui lòng tắt trước khi thêm thành viên.Mãi Yêu :3`, event.threadID);


  async function antijoinData() {
    for (let idUser of memJoin) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      api.removeUserFromGroup(idUser, event.threadID);
    }
  }
}

