describe("rock paper scissors feature test", function () {
	it("on load shows name registeration request", function () {
		cy.visit("/");
		cy.contains("Please enter your name");
	});
	it("shows name input field and submit button", function () {
		cy.get("#name-textbox").type("Marie");
		cy.get("#name-submit").click();
		cy.contains("Pick your weapon!");
		cy.url().should("include", "/choices");
	});
	it("shows 3 options to select from", function () {
		cy.contains(`✊`);
		cy.contains(`✋`);
		cy.contains(`✌`);
		cy.get("#rock-button").click();
		cy.url().should("include", "/game");
	});
	it("shows player and computer choices and result", function () {
		cy.contains("Marie");
		cy.contains("chose");
		cy.contains(`✊`);
		cy.contains("computer");
		cy.contains("chose");
		cy.url().should("include", "/game");
	});
	it("shows game result depending on player choosing rock", function () {
		cy.get("#result").then(($result) => {
			cy.get("[data-cy=player-choice]").then(($player) => {
				cy.get("[data-cy=computer-choice]").then(($computer) => {
					if (
						$player.text().includes(`✊`) &&
						$computer.text().includes(`✊`)
					) {
						$result.text().includes("DRAW");
					}
					if (
						$player.text().includes(`✊`) &&
						$computer.text().includes(`✌`)
					) {
						$result.text().includes("WIN");
					}
					if (
						$player.text().includes(`✊`) &&
						$computer.text().includes(`✋`)
					) {
						$result.text().includes("LOSE");
					}
				});
			});
		});
	});
});
