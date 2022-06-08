"use strict";

let monObjet = {};

monObjet.generer_texte = function (situation, id) {
    let html;

	html = situation[id].text;
	return html;
};

monObjet.generer_button = function (choix, id) {
    let marqueur;
	let situation;

    marqueur = "";

    for (let j = 0; j < choix.length; j++) {
		marqueur += `<a href = "/req_choisir?rep=${j && situation[id].text}"><button name="texte" value="${j}">`+ choix[j].text +`</button>`;
        marqueur += `<br>`;
    }
    return marqueur;
};

module.exports = monObjet;

