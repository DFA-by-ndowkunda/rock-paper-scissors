describe("web demo", function () {
	//aserting page has correct content upon load
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
		cy.contains("ROCK");
		cy.contains("PAPER");
		cy.contains("SCISSORS");
		cy.get("#rock-button").click();
		cy.url().should("include", "/game");
	});
	it("shows player and computer choices", function () {
		cy.contains("#choice1-image");
		cy.contains("#choice2-image");
		cy.contains("#game-outcome");
		cy.url().should("include", "/game");
	});
	it("shows an outcome", function () {
		cy.contains("#choice1-image");
		cy.contains("#choice2-image");
		cy.contains("#game-outcome");
		cy.url().should("include", "/game");
	});
	it("shows player wins or player loses depending on computer choosing scissors", function () {
		cy.get("#choice2").then(($choice2) => {
			// synchronously ask for the body's text
			// and do something based on whether it includes
			// another string
			if (
				$choice2.text().includes("scissors") &&
				$choice1.text().includes("scissors")
			) {
				// yup found it
				cy.get("#choice1").should("include", "draw");
			}
			if (
				$choice2.text().includes("scissors") &&
				$choice1.text().includes("rock")
			) {
				// yup found it
				cy.get("#choice1").should("include", "player wins");
			}
			if (
				$choice2.text().includes("scissors") &&
				$choice1.text().includes("paper")
			) {
				cy.get("#choice1").should("include", "player loses");
			}
		});
	});
	it("shows player wins or player loses depending on computer choosing paper", function () {
		cy.get("#choice2").then(($choice2) => {
			// synchronously ask for the body's text
			// and do something based on whether it includes
			// another string
			if (
				$choice2.text().includes("paper") &&
				$choice1.text().includes("paper")
			) {
				// yup found it
				cy.get("#choice1").should("include", "draw");
			}
			if (
				$choice2.text().includes("paper") &&
				$choice1.text().includes("rock")
			) {
				// yup found it
				cy.get("#choice1").should("include", "player loses");
			}
			if (
				$choice2.text().includes("paper") &&
				$choice1.text().includes("scissors")
			) {
				cy.get("#choice1").should("include", "player wins");
			}
		});
	});
	it("shows player wins or player loses depending on computer choosing rock", function () {
		cy.get("#choice2").then(($choice2) => {
			// synchronously ask for the body's text
			// and do something based on whether it includes
			// another string
			if (
				$choice2.text().includes("rock") &&
				$choice1.text().includes("rock")
			) {
				// yup found it
				cy.get("#choice1").should("include", "draw");
			}
			if (
				$choice2.text().includes("rock") &&
				$choice1.text().includes("scissors")
			) {
				// yup found it
				cy.get("#choice1").should("include", "player loses");
			}
			if (
				$choice2.text().includes("rock") &&
				$choice1.text().includes("paper")
			) {
				cy.get("#choice1").should("include", "player wins");
			}
		});
	});
});
