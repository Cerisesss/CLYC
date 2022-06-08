"use strict";

const fs = require("fs");
const nunjucks = require("nunjucks");
const monObjet = require("./jeu.js");

const traite = function (req, res, query) {
    
	let page;
    let contenu_fichier;
    let situation_jeu;
	let situation; 
	let id;
	let marqueurs;

	// ON LIT LES FICHIERS JSON EXISTANTS 

    contenu_fichier = fs.readFileSync("situation.json", 'utf-8');
	situation = JSON.parse(contenu_fichier);
    
	marqueurs = {};
	marqueurs.texte = monObjet.generer_texte (situation, id);
    marqueurs.buttons = monObjet.generer_button(situation[id].choix);
        
    page = fs.readFileSync("jeuIndex.html", 'utf-8');
    page = nunjucks.renderString(page, marqueurs);

 	res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(page);
    res.end();
}

module.exports = traite;

