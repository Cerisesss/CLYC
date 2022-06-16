"use strict";

const fs = require("fs");
const nunjucks = require("nunjucks");
const monObjet = require("./jeu.js");

const traite = function (req, res, query) {
    
	let id;
    let contenu_sauvegarde;
    let situation_courante;
    let situation_suivante;
    let sauvegarde;
    let marqueurs;
    let page;

    contenu_sauvegarde = fs.readFileSync(query.pseudo + ".json", "utf-8");
    sauvegarde = JSON.parse(sauvegarde);

    situation_courante = situation(query.situation);
    id = situation_courante.choix(query.rep).nextText;
    situation_suivante = situation[id];

    if  (
        situation_courante.debloque
        && sauvegarde.fin_debloquees.indexOf(situation_suivante.debloque) === -1
		) {
            sauvegarde.fin_debloquees.push(situation_suivante.debloque);
        }

    contenu_sauvegarde = fs.writeFileSync(query.pseudo + ".json",'utf-8');
    fs.writeFileSync = JSON.parse(sauvegarde);

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

