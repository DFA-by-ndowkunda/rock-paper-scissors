const weapons = require("./weapons.js");

class Computer {
	constructor() {}
	getWeapon() {
		let random = Math.floor(Math.random() * Object.keys(weapons).length);
		let computerChoice = Object.keys(weapons)[random];
		return computerChoice;
	}
}

module.exports = Computer;
