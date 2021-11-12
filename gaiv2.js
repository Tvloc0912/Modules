var fs = require('fs');
module.exports.config = {
	name: "gaiv2",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Thanh dz",
	description: "Random ảnh gái xinh nhất Việt Nam :))",
	commandCategory: "random-img",
	usages: "gaiv2",
	cooldowns: 5
};
    module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
 const axios = global.nodemodule["axios"];
 const request = global.nodemodule["request"];
 const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.ibb.co/WF2hJd2/1.jpg",
"https://i.ibb.co/YhKFprm/2.jpg",
"https://i.ibb.co/b3qW8pV/IMG-5641.jpg",
"https://i.ibb.co/f0MK4VD/IMG-5640.jpg",
"https://i.ibb.co/Z1tfS3K/IMG-5639.jpg",
"https://i.ibb.co/L5jChfN/IMG-5638.jpg",
"https://i.ibb.co/Nsc2XQM/IMG-5637.jpg",
"https://i.ibb.co/hySK1RP/IMG-5636.jpg",
"https://i.ibb.co/bbhRt56/IMG-5635.jpg",
"https://i.ibb.co/fpcDh30/IMG-5633.jpg",
"https://i.ibb.co/RSGGj13/IMG-5634.jpg",
"https://i.ibb.co/pRs9XCs/IMG-5632.jpg",
"https://i.ibb.co/k1FHW31/IMG-5631.jpg",
"https://ibb.co/KNx3DJM",
"https://ibb.co/0mL4wct",
"https://ibb.co/yB9g64t",
"https://ibb.co/fYT6h5T",
"https://ibb.co/HGtN1hy",
"https://ibb.co/BGY1PGf",
"https://ibb.co/4NP4DT4",
"https://ibb.co/Z8nQDts",
"https://ibb.co/3dLhg51",
"https://ibb.co/VC92Hbd",
"https://ibb.co/WfCNSSj",
"https://ibb.co/d2jfFq4",
"https://ibb.co/PhkLjCF",
"https://ibb.co/Xzd8dHJ",
"https://ibb.co/hHwYtZg",
"https://ibb.co/g62LLQk",
"https://ibb.co/MR6QgHz",
"https://ibb.co/jgwDc05",
"https://ibb.co/hfv7tXf",
"https://ibb.co/2sLfKXL",
"https://ibb.co/vPtX7Nz",
"https://ibb.co/j599Jdy",
"https://ibb.co/KKZznx5",
"https://ibb.co/Y3xtT7z",
"https://ibb.co/rmD2gTV",
"https://ibb.co/ySv8BJ4",
"https://ibb.co/0V8nKkZ",
"https://ibb.co/q1B4kLJ",
"https://ibb.co/mB1DMQK",
"https://ibb.co/9vxkqfb",
"https://ibb.co/K92K3s1",
  ];
  var callback = () => api.sendMessage({body:`Ảnh gái cực ngon \nSố ảnh: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/gai.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/gai.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/gai.jpg")).on("close",() => callback());
};
