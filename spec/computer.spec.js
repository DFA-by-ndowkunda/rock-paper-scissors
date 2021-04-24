const Computer = require("../src/computer.js");

describe("Computer unit tests", () => {
	it("expecting computer to pick a selection randomly", () => {
		let computer = new Computer();
		expect(computer.getWeapon()).toEqual("rock" || "scissors" || "paper");
	});
});
