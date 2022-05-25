"use strict";
const fs = require("fs");
const nj = require("nunjucks");
const generer_situation = require("./generer_situation.js");
const statistiques  = function (req, res, query) {
    let contenu; // Contenu du fichier sous forme de chaîne de caractères
    let Femme; // Contenu du fichier reconstruit en mémoire
    let html;
    let marqueurs;
    let page;

    /* == Récupération des champs de la query-string == */
    /* == Récupération du contexte ==  */
    contenu = fs.readFileSync("Femme.json", "utf-8");
    Femme = JSON.parse(contenu);

    /* == Traitement == */

    /* == Mémorisation du contexte == */
    contenu = JSON.stringify(Femme);
    fs.writeFileSync("Femme.json", contenu, "utf-8");

    /* == Fabrication et envoi de la réponse (page HTML) == */
    marqueurs = {};
    marqueurs.photo = generer_situation(Femme.fin_debloquees);
	//console.log(marqueurs.liste);
    page = fs.readFileSync("statistiques.html", "utf-8");
    page = nj.renderString(page, marqueurs);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(page);
    res.end();
};

module.exports = statistiques;



