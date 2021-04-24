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
		if (
			this.weapons[0] === weaponChoices.rock &&
			this.weapons[1] === weaponChoices.scissors
		) {
			return true;
		}
	}
	isPaper() {
		if (
			this.weapons[0] === weaponChoices.paper &&
			this.weapons[1] === weaponChoices.rock
		) {
			return true;
		}
	}
	isScissors() {
		if (
			this.weapons[0] === weaponChoices.scissors &&
			this.weapons[1] === weaponChoices.paper
		) {
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
