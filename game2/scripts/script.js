let nb_clics = 0;
let mini1 = "";
let mini2 = ""; // mémoriser le nom img
let case1 = "";
let case2 = ""; // sécurité pour éviter clic sur la même image
let img_ok = 0;
let nb_erreurs = 0;
let le_score = 0;
let depart = false;
let temps_debut = new Date().getTime();



let attente = setTimeout(function() {
    for (let i = 0; i < 16; i++) {
        document.querySelector('#img' + i).src = "game2/mini/miniz.png";
    }
    depart = true;
}, 4000);



function generation() {
    let nb_alea;
    let nb_img = "";
    let test = true;
    let chaine = "";
    for (let i = 0; i < 16; i++) {
        while (test == true) {
            nb_alea = Math.floor(Math.random() * 16) + 1; //Pour génération dans les 16 cases
            if (chaine.indexOf("-" + nb_alea + "-") > -1)
                nb_alea = Math.floor(Math.random() * 16) + 1;
            else {
                nb_img = Math.floor((nb_alea + 1) / 2); //8 paires pour 16 places ==> 2 générations différentes par image
                document.querySelector("#case" + i).innerHTML = "<img style='cursor:pointer;' id='img" + i + "' src='mini/mini" + nb_img + ".png' onClick='verifier(\"img" + i + "\", \"mini" + nb_img + "\")' alt='' />";
                chaine += "-" + nb_alea + "-";
                test = false;
            }
        }
        test = true;
    }
}

function verifier(limg, source) {
    if (depart == true) {
        nb_clics++;
        document.getElementById(limg).src = "mini/" + source + ".png";

        if (nb_clics == 1) {
            mini1 = source;
            case1 = limg;
        } else {
            mini2 = source;
            case2 = limg;

            if (case1 != case2) {
                depart = false;
                if (mini1 != mini2) {
                    let attente = setTimeout(function() {
                        document.getElementById(case1).src = "game2/mini/miniz.png";
                        document.getElementById(case2).src = "game2/mini/miniz.png";
                        depart = true;
                        nb_clics = 0;
                        nb_erreurs++;
                        if (nb_erreurs < 11) {
                            le_score = 10 - nb_erreurs;
                        }
                        document.getElementById("score").innerHTML = "<strong>" + le_score + "</strong>/10";
                    }, 1000);
                } else {
                    depart = true;
                    nb_clics = 0;
                    img_ok += 2;
                    if (img_ok == 16) {
                        let dif_temps = Math.floor((new Date().getTime() - temps_debut) / 1000);
                        document.getElementById("score").innerHTML = "<strong>" + le_score + "</strong>/10";
                        document.getElementById("temps").innerHTML = "Vous avez mis <strong>" + dif_temps + "</strong> secondes";
                    }
                }
            } else {
                if (nb_clics == 2) {
                    nb_clics = 1;
                }
            }
            if (dif_temps > 180) {
                document.getElementById("temps").innerHTML = "Le temps imparti est dépassé, vous avez perdu !";
                depart = false;
            }
        }
    }
}