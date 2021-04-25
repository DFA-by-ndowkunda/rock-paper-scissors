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
	choice1: `✊`,
	choice2: `✋`,
	choice3: `✌`,
};
let playerDouble = new PlayerDoubles();
let computerDouble = new ComputerDoubles();
let game = new Game();

describe("Game play unit tests", () => {
	it("expecting player weapon choice to be added to game", () => {
		let playerChoice = (playerDouble.weapon = `✊`);
		let game = new Game();
		game.addWeapon(playerChoice);
		let result = game.weapons[0];
		expect(result).toBe(`✊`);
	});
	it("expecting a draw outcome", () => {
		spyOn(global.Math, "random").and.returnValue(0);
		const computerChoice = computerDouble.getWeapon();
		console.log(computerChoice);
		let playerChoice = (playerDouble.weapon = `✊`);
		game.addWeapon(playerChoice);
		game.addWeapon(computerChoice);
		let result1 = game.checkWeapons();
		expect(result1).toBe("DRAW");
	});
	//player picks paper as weapon choice
	it("expecting a lose outcome", () => {
		spyOn(global.Math, "random").and.returnValue(0.8);
		const computerChoice = computerDouble.getWeapon();
		let playerChoice = (playerDouble.weapon = `✋`);
		game.addWeapon(playerChoice);
		game.addWeapon(computerChoice);
		let result = game.checkWeapons();
		expect(result).toBe("YOU LOSE :(");
	});
	it("expecting a win outcome ", () => {
		spyOn(global.Math, "random").and.returnValue(0);
		const computerChoice = computerDouble.getWeapon();
		let playerChoice = (playerDouble.weapon = `✋`);
		game.addWeapon(playerChoice);
		game.addWeapon(computerChoice);
		let result = game.checkWeapons();
		expect(result).toBe("YOU WIN :)");
	});
	//player picks rock as weapon choice
	it("expecting a lose outcome", () => {
		spyOn(global.Math, "random").and.returnValue(0.5);
		const computerChoice = computerDouble.getWeapon();
		let playerChoice = (playerDouble.weapon = `✊`);
		game.addWeapon(playerChoice);
		game.addWeapon(computerChoice);
		let result = game.checkWeapons();
		expect(result).toBe("YOU LOSE :(");
	});
	it("expecting a win outcome ", () => {
		spyOn(global.Math, "random").and.returnValue(0.8);
		const computerChoice = computerDouble.getWeapon();
		let playerChoice = (playerDouble.weapon = `✊`);
		game.addWeapon(playerChoice);
		game.addWeapon(computerChoice);
		let result = game.checkWeapons();
		expect(result).toBe("YOU WIN :)");
	});
	//player picks scissors as a weapon choice
	it("expecting a lose outcome", () => {
		spyOn(global.Math, "random").and.returnValue(0);
		const computerChoice = computerDouble.getWeapon();
		let playerChoice = (playerDouble.weapon = `✌`);
		game.addWeapon(playerChoice);
		game.addWeapon(computerChoice);
		let result = game.checkWeapons();
		expect(result).toBe("YOU LOSE :(");
	});
	it("expecting a win outcome ", () => {
		spyOn(global.Math, "random").and.returnValue(0.5);
		const computerChoice = computerDouble.getWeapon();
		let playerChoice = (playerDouble.weapon = `✌`);
		game.addWeapon(playerChoice);
		game.addWeapon(computerChoice);
		let result = game.checkWeapons();
		expect(result).toBe("YOU WIN :)");
	});
});
