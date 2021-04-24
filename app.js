const express = require("express");
const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

const RegisterController = require("./src/controllers/register.js");
app.use("/", RegisterController);

const ChoicesController = require("./src/controllers/choices.js");
app.use("/choices", ChoicesController);

app.listen(port, () => {
	console.log(`Rock-paper-scissors app listening at http://localhost:${port}`);
});
