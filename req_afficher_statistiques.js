"use strict";
const fs = require("fs");
const nj = require("nunjucks");
const generer_situation = require("./generer_situation.js");
const statistiques  = function (req, res, query) {
    let contenu; // Contenu du fichier sous forme de chaîne de caractères
    let sauvegarde; // Contenu du fichier reconstruit en mémoire
    let html;
    let marqueurs;
    let page;

    /* == Récupération des champs de la query-string == */
    /* == Récupération du contexte ==  */
    contenu = fs.readFileSync(query.pseudo + ".json", "utf-8");
    sauvegarde = JSON.parse(contenu); 

    /* == Traitement == */

    /* == Mémorisation du contexte == */
    // contenu = JSON.stringify(query.pseudo);
    // fs.writeFileSync(query.pseudo + ".json", contenu, "utf-8");

    /* == Fabrication et envoi de la réponse (page HTML) == */
    marqueurs = {};
	if (sauvegarde.fin_debloquees.indexOf("finA")!==-1) { 
			marqueurs.source ="images/photo1.jpg"
	} else {
			marqueurs.source ="images/interrogation.jpg"	
	}
	if (sauvegarde.fin_debloquees.indexOf("finB")!==-1) { 
			marqueurs.source_1 ="images/photo1.jpg"
	} else {
		marqueurs.source_1 = "images/interrogation.jpg"
	}
	if (sauvegarde.fin_debloquees.indexOf("finC")!==-1){
			marqueurs.source_2 ="images/photo1.jpg"
	} else {
		marqueurs.source_2="images/interrogation.jpg"
	}
	if (sauvegarde.fin_debloquees.indexOf("finD")!==-1){
    		marqueurs.source_3 ="images/photo1.jpg"
    } else { 
		marqueurs.source_3="images/interrogation.jpg"
	}
	if (sauvegarde.fin_debloquees.indexOf("finE")!==-1){
    	marqueurs.source_4 ="images/photo1.jpg"
    } else  {
		marqueurs.source_4 ="images/interrogation.jpg"
	}
	if (sauvegarde.fin_debloquees.indexOf("finF")!==-1){
   		 marqueurs.source_5 ="images/photo1.jpg"
  	} else {
		marqueurs.source_5 = "images/interrogation.jpg"
	} 
	marqueurs.pseudo = query.pseudo;
	//console.log(marqueurs.liste);
    page = fs.readFileSync("statistiques.html", "utf-8");
    page = nj.renderString(page, marqueurs);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(page);
    res.end();
};

module.exports = statistiques;



