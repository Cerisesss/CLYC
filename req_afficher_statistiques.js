"use strict";

const fs = require("fs");
const nunjucks = require("nunjucks");

const trait3 = function (req, res, query) {
    let page;

    page = fs.readFileSync("statistiques.html", 'utf-8');

    page = nunjucks.renderString(page);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(page);
    res.end();
};
module.exports = trait3;

