const Game = require("../src/game.js");

class ComputerDoubles {
	getWeapon() {
		let random = Math.floor(Math.random() * Object.keys(weaponsDoubles).length);
		return Object.keys(weaponsDoubles)[random];
	}
}
class PlayerDoubles {
	constructor(weapon, playerName) {
		this.weapon = weapon;
		this.playerName = playerName;
	}
	getWeapon() {
		return this.weapon;
	}
}
const weaponsDoubles = {
	choice1: "rock",
	choice2: "paper",
	choice3: "scissors",
};

describe("Computer unit tests", () => {
	it("expecting player weapon choice to be added to game", () => {
		let player = new PlayerDoubles("rock", "Marie");
		let game = new Game();
		game.addPlayer(player);
		let result = game.players[0].weapon;
		expect(result).toBe("rock");
	});
	it("choices to be evaluated when player picks rock", () => {
		let player = new PlayerDoubles("rock", "Marie");
		let computer = new ComputerDoubles();
		let game = new Game();
		game.addPlayer(player);
		let computerWeapon = game.addPlayer(computer.getWeapon());
		let result = game.checkWeapons();
		if (computerWeapon === "rock") {
			expect(result).toContain("draw");
		}
		if (computerWeapon === "paper") {
			expect(result).toContain("player wins");
		}
		if (computerWeapon === "scissors") {
			expect(result).toContain("player lose");
		}
	});
	it("choices to be evaluated when player picks paper", () => {
		let player = new PlayerDoubles("paper", "Marie");
		let computer = new ComputerDoubles();
		let game = new Game();
		game.addPlayer(player);
		let computerWeapon = game.addPlayer(computer.getWeapon());
		let result = game.checkWeapons();
		if (computerWeapon === "rock") {
			expect(result).toContain("player lose");
		}
		if (computerWeapon === "paper") {
			expect(result).toContain("draw");
		}
		if (computerWeapon === "scissors") {
			expect(result).toContain("player win");
		}
	});
	it("choices to be evaluated when player picks scissors", () => {
		let player = new PlayerDoubles("scissors", "Marie");
		let computer = new ComputerDoubles();
		let game = new Game();
		game.addPlayer(player);
		let computerWeapon = game.addPlayer(computer.getWeapon());
		let result = game.checkWeapons();
		if (computerWeapon === "rock") {
			expect(result).toContain("player lose");
		}
		if (computerWeapon === "paper") {
			expect(result).toContain("player win");
		}
		if (computerWeapon === "scissors") {
			expect(result).toContain("draw");
		}
	});
});
