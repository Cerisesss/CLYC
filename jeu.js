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






//if : l affichage de ce qu'on veut mettre (icone)
//dans situation.json : choisir selon notre adaptation les indices (honneur, bravour...)

monObjet.generer_button = function (choix, id) {
    let marqueur;
	let contenu_situation;
    let contenu_Femme;
    let situation;
    let Femme;

    contenu_Femme = fs.readFileSync("Femme.json", 'utf-8');
    Femme = JSON.parse(contenu_Femme);

    marqueur = "";

    for (let j = 0; j < choix.length; j++) {
		if(honneur == true && Femme.length > 0){
        	marqueur += `<a href = "/req_choisir?rep=${j}&situation=${id}"><button>`
            	+ choix[j].text + choix[j].honneur + `</button></a>`;
        	marqueur += `<br>`;
			// situation[id].choix[j].honneur = "🏆";

    	}else{
			marqueur += `<a href = "/req_choisir?rep=${j}&situation=${id}"><button>`
                + choix[j].text +`</button></a>`;
            marqueur += `<br>`;
	}
    return marqueur;
};

module.exports = monObjet;


