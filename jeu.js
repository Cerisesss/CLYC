"use strict";

let monObjet = {};

// permet d'afficher le texte général du JSON

monObjet.generer_texte = function (situation, id) {
    let html;

	html = situation[id].text;
	return html;
};

// permet d'afficher le texte des boutons du JSON

monObjet.generer_button = function (choix, id) {
    let marqueur;

    marqueur = "";

    for (let j = 0; j < choix.length; j++) {
		marqueur += `<a href = "/req_choisir?rep=${j}&situation=${id}"><button>`
			+ choix[j].text +`</button></a>`;
        marqueur += `<br>`;
    }
    return marqueur;
};

module.exports = monObjet;

