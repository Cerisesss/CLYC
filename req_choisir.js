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

	// query.situation // id de la situation précédente
	
	// ON LIT LES FICHIERS JSON EXISTANTS 

    contenu_fichier = fs.readFileSync("situation.json", 'utf-8');
    situation = JSON.parse(contenu_fichier);

	id = situation[query.situation].choix[query.rep].nextText;
	
	marqueurs = {};
	marqueurs.situation = query.situation;
	marqueurs.texte = monObjet.generer_texte (situation, id);
    marqueurs.buttons = monObjet.generer_button(situation[id].choix, id, query.pseudo);
    marqueurs.temps = 180;
    
	page = fs.readFileSync("jeuIndex.html", 'utf-8');
    page = nunjucks.renderString(page, marqueurs);

 	res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(page);
    res.end();
}

module.exports = traite;

