const Game = require("../src/game.js");

class ComputerDoubles {
	getWeapon() {
		let random = Math.floor(
			Math.random() * Object.values(weaponsDoubles).length
		);
		return Object.values(weaponsDoubles)[random];
	}
}
class PlayerDoubles {
	constructor() {
		this.weapon;
		this.username;
	}
}
const weaponsDoubles = {
	choice1: "rock",
	choice2: "paper",
	choice3: "scissors",
};

describe("Game play unit tests", () => {
	it("expecting player weapon choice to be added to game", () => {
		let player = new PlayerDoubles();
		let playerChoice = (player.weapon = "rock");
		let game = new Game();
		game.addWeapon(playerChoice);
		let result = game.weapons[0];
		expect(result).toBe("rock");
	});
	it("choices to be evaluated when player picks rock", () => {
		let player = new PlayerDoubles();
		let computer = new ComputerDoubles();
		let computerChoice = computer.getWeapon();
		let playerChoice = (player.weapon = "rock");
		let game = new Game();
		game.addWeapon(playerChoice);
		game.addWeapon(computerChoice);
		if (computerChoice === "rock") {
			let result1 = game.checkWeapons();
			expect(result1).toBe("DRAW");
		}
		if (computerChoice === "paper") {
			let result2 = game.checkWeapons();
			expect(result2).toBe("YOU LOSE :(");
		}
		if (computerChoice === "scissors") {
			let result3 = game.checkWeapons();
			expect(result3).toBe("YOU WIN :)");
		}
	});
	it("choices to be evaluated when player picks paper", () => {
		let player = new PlayerDoubles();
		let computer = new ComputerDoubles();
		let computerChoice = computer.getWeapon();
		let playerChoice = (player.weapon = "paper");
		let game = new Game();
		game.addWeapon(playerChoice);
		game.addWeapon(computerChoice);
		if (computerChoice === "paper") {
			let result1 = game.checkWeapons();
			expect(result1).toBe("DRAW");
		}
		if (computerChoice === "scissors") {
			let result2 = game.checkWeapons();
			expect(result2).toBe("YOU LOSE :(");
		}
		if (computerChoice === "rock") {
			let result3 = game.checkWeapons();
			expect(result3).toBe("YOU WIN :)");
		}
	});
	it("choices to be evaluated when player picks scissors", () => {
		let player = new PlayerDoubles();
		let computer = new ComputerDoubles();
		let computerChoice = computer.getWeapon();
		let playerChoice = (player.weapon = "scissors");
		let game = new Game();
		game.addWeapon(playerChoice);
		game.addWeapon(computerChoice);
		if (computerChoice === "scissors") {
			let result1 = game.checkWeapons();
			expect(result1).toBe("DRAW");
		}
		if (computerChoice === "rock") {
			let result2 = game.checkWeapons();
			expect(result2).toBe("YOU LOSE :(");
		}
		if (computerChoice === "paper") {
			let result3 = game.checkWeapons();
			expect(result3).toBe("YOU WIN :)");
		}
	});
});
