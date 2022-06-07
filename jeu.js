"use strict";

let monObjet = {};

monObjet.generer_texte = function (situation, id) {
    let html;

	html = situation[id].text;
	return html;
};

monObjet.generer_button = function (choix) {
    let marqueur;
	let j;

    marqueur = "";

    for (let j = 0; j < choix.length; j++) {
        marqueur += `<button name="texte" value="${j}">`+ choix[j].text +`</button>`;
        marqueur += `<br>`;
    }
    return marqueur;
};

module.exports = monObjet;

