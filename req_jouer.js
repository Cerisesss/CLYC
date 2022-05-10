"use strict";

const fs = require("fs");
const nunjucks = require("nunjucks");

const trait1 = function (req, res, query) {
    let page;

    // AFFICHAGE DE LA PAGE D'ACCUEIL

    page = fs.readFileSync('pageJeu.html', 'utf-8');

    page = nunjucks.renderString(page);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(page);
    res.end();
};

module.exports = trait1;
                         
