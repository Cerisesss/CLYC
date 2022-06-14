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
    contenu = fs.readFileSync(query.pseudo + ".json", "utf-8");
    query.pseudo = JSON.parse(contenu);

    /* == Traitement == */

    /* == Mémorisation du contexte == */
    contenu = JSON.stringify(query.pseudo);
    fs.writeFileSync(query.pseudo + ".json", contenu, "utf-8");

    /* == Fabrication et envoi de la réponse (page HTML) == */
    marqueurs = {};
    marqueurs.photo = generer_situation((query.pseudo).fin_debloquees);
	marqueurs.source = "images/photo1.jpg"
	marqueurs.pseudo = query.pseudo;
	//console.log(marqueurs.liste);
    page = fs.readFileSync("statistiques.html", "utf-8");
    page = nj.renderString(page, marqueurs);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(page);
    res.end();
};

module.exports = statistiques;



