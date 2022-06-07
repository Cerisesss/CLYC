"use strict";

const fs = require("fs");
const nunjucks = require("nunjucks");
const monObjet = require("./jeu.js");

const traite = function (req, res, query) {
    
	let page;
    let contenu_fichier;
    let situation_jeu;
	let situation, id;
	let marqueurs;

	// ON LIT LES FICHIERS JSON EXISTANTS 

    contenu_fichier = fs.readFileSync("situation.json", 'utf-8');
    situation = JSON.parse(contenu_fichier);
        
	marqueurs = {};
	marqueurs.generer_texte = "html";
	marqueurs.generer_button = "marqueur";

 	res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(page);
    res.end();
}
module.exports = traite;

