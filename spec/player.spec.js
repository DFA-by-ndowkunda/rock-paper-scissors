const Player = require("../src/player.js");

describe("player unit tests", () => {
	it("expecting player's name", () => {
		const player = new Player();
		const result = (player.username = "Marie");
		expect(result).toBe("Marie");
	});
	it("expecting player to pick paper", () => {
		const player = new Player();
		const result = (player.weapon = "paper");
		expect(result).toEqual("paper");
	});
});
