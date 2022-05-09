"use strict"

//récupérer un objet permettant de créer un objet"serveur HTTP"
const http = require("http");
const fs = require("fs");

//sera appelée à l'arrivée de chaque requête
const traite_requete = function (req, res) {

	let contenu;
	contenu = fs.readFileSync("modele_accueil_membre.html", "UTF-8");

};

//crée un serveur
let mon_serveur = http.createServer(traite_requete);

//démarre le serveur
mon_serveur.listen(5000);


