"use sttrict";

const fs = require("fs");
const nj = require("nunjucks");

let contenu;
let jeuIndex;
let marqueurs;
let page;

contenu = fs.readFileSync("situation.json", "utf-8");
jeuIndex = JSON.parse(contenu);

//jeuIndex.splice(nb, 1);

marqueurs = {};
marqueurs.liste = texte(jeuIndex);
page = fs.readFileSync("jeuIndex.html", "utf-8");
page = nj.renderString(page, marqueurs);

const texte = function (jeuIndex) {
	let html;

	html = "";

	for (let i = 0; i < jeuIndex.length; i++) {
		html += `<button name="nb" value="${i}">-</button>`;
		html += jeuIndex[i];
		html += `<br>`;
	}
	return html;
};

html += '<img src = "' + situation[i].id + '.png">';

module.exports = texte;
