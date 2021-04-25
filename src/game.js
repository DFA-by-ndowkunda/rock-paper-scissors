const weaponChoices = require("./weaponChoices.js");
class Game {
	constructor() {
		this.weapons = [];
	}
	addWeapon(weapon) {
		this.weapons.push(weapon);
	}

	isDraw() {
		if (this.weapons[0] === this.weapons[1]) {
			return true;
		}
	}
	isRock() {
		if (this.weapons[0] === `✊` && this.weapons[1] === `✌`) {
			return true;
		}
	}
	isPaper() {
		if (this.weapons[0] === `✋` && this.weapons[1] === `✊`) {
			return true;
		}
	}
	isScissors() {
		if (this.weapons[0] === `✌` && this.weapons[1] === `✋`) {
			return true;
		}
	}
	checkWeapons() {
		if (this.isDraw()) {
			return "DRAW";
		}
		if (this.isRock() || this.isPaper() || this.isScissors()) {
			return "YOU WIN :)";
		} else {
			return "YOU LOSE :(";
		}
	}
}
module.exports = Game;
