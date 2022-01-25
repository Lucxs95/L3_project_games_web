export default class Dif3 {
    nb_clics = 0;
    mini1 = "";
    mini2 = ""; // mémoriser le nom img
    case1 = "";
    case2 = ""; // sécurité pour éviter clic sur la même image
    img_ok = 0;
    nb_erreurs = 0;
    le_score = 0;
    depart = false;
    temps_debut = new Date().getTime();



    attente = setTimeout(function() {
        for (let i = 0; i < 36; i++) {
            document.querySelector('#img' + i).src = "../mini/miniz.png";
        }
        depart = true;
    }, 4000);



    generation_dif3() {
        let nb_alea;
        let nb_img = "";
        let test = true;
        let chaine = "";
        for (let i = 0; i < 36; i++) {
            while (test == true) {
                nb_alea = Math.floor(Math.random() * 36) + 1; //Pour génération dans les 16 cases
                if (chaine.indexOf("-" + nb_alea + "-") > -1)
                    nb_alea = Math.floor(Math.random() * 36) + 1;
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

    verifier(limg, source) {
        if (depart == true) {
            let dif_temps = Math.floor((new Date().getTime() - temps_debut) / 1000);
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
                            document.getElementById(case1).src = "mini/miniz.png";
                            document.getElementById(case2).src = "mini/miniz.png";
                            depart = true;
                            nb_clics = 0;
                            nb_erreurs++;
                            if (nb_erreurs < 31) {
                                le_score = 30 - nb_erreurs;
                            }
                            document.getElementById("score").innerHTML = "<strong>" + le_score + "</strong>/30";
                        }, 1000);
                    } else {
                        depart = true;
                        nb_clics = 0;
                        img_ok += 2;
                        if (img_ok == 25) {
                            document.getElementById("score").innerHTML = "<strong>" + le_score + "</strong>/30";
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
}