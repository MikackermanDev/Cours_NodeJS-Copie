const eventEmitter = require("events");

let monEcouteur = new eventEmitter();

// .on = addListener all event		 			.once = que le 1er event
//monEcouteur.on("saute", function (a, b) {
monEcouteur.once("saute", function (a, b) {
	console.log("j'ai sauté", a, b);
});

monEcouteur.emit("saute", 10, 20);
monEcouteur.emit("saute");
monEcouteur.emit("saute");
monEcouteur.emit("saute");
