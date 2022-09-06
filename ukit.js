const fs = require("fs");
const compressing = require("compressing");

let Actions = class Actions {
	constructor() {
		this.resource = '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';
	}
	createPage(name) {
		var buf = Buffer.from(this.resource, "base64");
		fs.writeFileSync("resource.tgz", buf);
		compressing.gzip.uncompress("resource.tgz", "resource.tar").then(() => {
			compressing.tar.uncompress("resource.tar", ".").then(() => {
				var page = fs.readFileSync("resource/module.upage");
				for(var i = 0; i < page.length; i++) {
					if(page.toString()[i] == '@')
						fs.appendFileSync(name + ".upage", name);
					else
						fs.appendFileSync(name + ".upage", page.toString()[i]);
				}
				fs.unlinkSync("resource/module.upage");
				fs.unlinkSync("resource/ukitforground.js");
				fs.unlinkSync("resource/UKITMain.node.js");
				fs.rmdirSync("resource");
				fs.unlinkSync("resource.tgz");
				fs.unlinkSync("resource.tar");
			});
		});
	}
	startServer() {
		var buf = Buffer.from(this.resource, "base64");
		fs.writeFileSync("resource.tgz", buf);
		compressing.gzip.uncompress("resource.tgz", "resource.tar").then(() => {
			compressing.tar.uncompress("resource.tar", ".").then(() => {
				var data = fs.readFileSync("resource/UKITMain.node.js");
				fs.writeFileSync("UKITMain.node.js", data);
				var data1 = fs.readFileSync("resource/ukitforground.js");
				fs.writeFileSync("ukitforground.js", data1);
				fs.unlinkSync("resource/module.upage");
				fs.unlinkSync("resource/ukitforground.js");
				fs.unlinkSync("resource/UKITMain.node.js");
				fs.rmdirSync("resource");
				fs.unlinkSync("resource.tgz");
				fs.unlinkSync("resource.tar");
				this.UKITMain = require("./UKITMain.node");
			});
		});
	}
	setPort(port) {
		fs.writeFileSync("port.conf", port);
	}
	exportTGZ() {
		var buf = Buffer.from(this.resource, "base64");
		fs.writeFileSync("resource.tgz", buf);
	}
	stopServer() {
		this.UKITMain.httpServer.close();
	}
	restartServer() {
		this.UKITMain.httpServer.close();
		this.UKITMain.httpServer.listen(fs.readFileSync("port.conf").toString().split('\n')[0]);
	}

};

let actions = new Actions();

exports.action = actions;
