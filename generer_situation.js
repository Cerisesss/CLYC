"use strict";
const generer_situation = function (Femme) {
    let html;

    html = "";

    for (let i = 0; i < Femme.length; i++) {
		html +=`Wow vous avez debloqué une fin`
        html += `<img src="images/photo1.jpg">`;
        html += Femme.fin_debloquees;
        html += `<br>`;
    }
    return html;
};
module.exports = generer_situation;


