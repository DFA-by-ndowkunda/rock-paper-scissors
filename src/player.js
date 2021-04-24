class Player {
	constructor(weapon, playerName) {
		this.weapon = weapon;
		this.playerName = playerName;
	}
	getName() {
		return this.playerName;
	}
	getWeapon() {
		return this.weapon;
	}
}
module.exports = Player;
