const Player = require("../src/player.js");

describe("player unit tests", () => {
	it("expecting player's name", () => {
		let player1 = new Player("rock", "Marie");
		let name = player1.getName();
		expect(name).toEqual("Marie");
	});
	it("expecting player to pick rock", () => {
		let player1 = new Player("rock", "Marie");
		let weapon = player1.getWeapon();
		expect(weapon).toEqual("rock");
	});
	it("expecting player to pick paper", () => {
		let player1 = new Player("paper", "Marie");
		let weapon = player1.getWeapon();
		expect(weapon).toEqual("paper");
	});
	it("expecting player to pick scissors", () => {
		let player1 = new Player("scissors", "Marie");
		let weapon = player1.getWeapon();
		expect(weapon).toEqual("scissors");
	});
});
