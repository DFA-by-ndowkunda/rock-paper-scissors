const weaponChoices = require("./weaponChoices.js");

class Computer {
	getWeapon() {
		let random = Math.floor(
			Math.random() * Object.values(weaponChoices).length
		);
		let computerChoice = Object.values(weaponChoices)[random];
		return computerChoice;
	}
}

module.exports = Computer;
