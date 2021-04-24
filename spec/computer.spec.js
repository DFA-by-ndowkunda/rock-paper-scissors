const Computer = require("../src/computer.js");

describe("Computer unit tests", () => {
	it("expecting computer to pick rock", () => {
		spyOn(global.Math, "random").and.returnValue(0);
		const computer = new Computer();
		const result = computer.getWeapon();
		expect(result).toBe(`✊`);
	});
	it("expecting computer to pick paper", () => {
		spyOn(global.Math, "random").and.returnValue(0.5);
		const computer = new Computer();
		const result = computer.getWeapon();
		expect(result).toBe(`✋`);
	});
	it("expecting computer to pick scissors", () => {
		spyOn(global.Math, "random").and.returnValue(0.8);
		const computer = new Computer();
		const result = computer.getWeapon();
		expect(result).toBe(`✌`);
	});
});
