"use strict";
const fs = require("fs");
const nunjucks = require("nunjucks");
const trait = function (req, res, query) {
    let page;
    let contenu_fichier;
    let situation_jeu;
	let situation, id;
	let marqueurs;
    // ON LIT LES FICHIERS JSON EXISTANTS 

    contenu_fichier = fs.readFileSync("situation.json", 'utf-8');
    situation = JSON.parse(contenu_fichier);
	id = situation.id;
        if (id === "1") {
            page = fs.readFileSync("photo1.html");
			page = nunjucks.renderString(page, marqueurs);
        }
	marqueurs = {};
	marqueurs["liste"] = "id";
	page = nunjucks.renderString(page, marqueurs);

 	res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(page);
    res.end();
}
module.exports = trait;

