"use strict";

/*
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


*/



const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}


const textNodes = [
	{
		id: 0,
        text:"Vous commencez votre journée.",
        options: [
            {
                text:"Se promener",
                nextText:1
            },
            {
                text:"Rester a la maison",
                nextText:0
            },  
        ]
	},
	{

		id: 1,
		text:"John voit une grand-mère qui a besoin d'aide dans la rue",
		options: [
			{
				text:"L'aider",
				nextText:2
			},
			{
			 	text:"Rien faire",
                nextText:3
			},
			{
			 	text:"L'insulter",
                nextText:4
			},
		]
	},
	{
		id: 2,
        text:"La grand-mère vous remercie et vous donne 1M d'euros.",
        options: [
            {
                text:"Accepter",
                nextText:5
            },
            {
                text:"Refuser",
                nextText:6
            },  
            {
                text:"Fuir",
                nextText:7
            },  
        ]
	},
	{
		id: 3,
        text:"Vous vous sentez coupable.",
        options: [
            {
                text:"Retouner l'aider",
                nextText:2
            },
            {
                text:"Rentrer à la maison",
				nextText:0
               
			},
        ]
	},
	{
		id: 4,
        text:"La grand-mère est furieuse! Les yakuza vous attaquent.",
        options: [
            {
                text:"Vous rentrez chez vous en chaise roulante.",
                nextText:0
            },
        ]
	},
	{
		id: 5,
        text:"C'était un rêve, vous vous réveillez en chaise roulante! (mdrr)" ,
        options: [
            {
                text:"Commencer la journée.",
                nextText:0
            },
        ]
	},
	{
		id: 6,
        text:"La grand-mère est impressionnnée. Elle vous offre un manoir (nouveau manoir)",
        options: [
            {
                text:"Recommencer la journée",
                nextText:0
            },
            {
                text:"Quittez le jeu",
                nextText:0
            },
        ]
	},
	{
		id: 7,
        text:"La grand-mère vous donne un coup de canne et vous lance un diamant sur la tête. Vous êtes maintenant riche!",
        options: [
            {
                text:"Recommencer la journée",
                nextText:0
            },
            {
                text:"Quittez",
                nextText:0
            },    
		]
	}
	]


startGame()













