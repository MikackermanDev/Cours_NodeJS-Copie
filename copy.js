let fs = require("fs");

let file = "chipset.webm";

fs.stat(file, (err, stat) => {
	let longueur = stat.size;
	let progression = 0;
	let lire = fs.createReadStream(file);
	let ecrire = fs.createWriteStream("chipset3.mp4");

	lire.on("data", (chunk) => {
		progression += chunk.length;
		console.log("J'ai lu " + Math.round(100 * (progression / longueur)) + " %");
	});
	lire.pipe(ecrire);
	ecrire.on("finish", () => {
		console.log("J'ai fini de lire le fichier Mike");
	});
});

// fonctionne très bien
fs.readFile("chipset.webm", (err, data) => {
	if (err) throw err;
	fs.writeFile("chipset2.mp4", data, (err) => {
		if (err) throw err;
		console.log("Le fichier a bien été copié");
	});
});
