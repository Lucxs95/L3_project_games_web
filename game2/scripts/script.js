import { generation_dif1 } from "./dif1.js";
import Dif2 from "./dif2.js";
import Dif3 from "./dif3.js";
window.onload = init;

let grille;

function init() {
    console.log("Page et ressources prêtes à l'emploi");
    this.grille = document.querySelector(".grille");
    this.grille2 = document.querySelector(".grille2");
    this.grille3 = document.querySelector(".grille3");
    this.grille2.style.display = "none";
    this.grille3.style.display = "none";

    let dif1 = document.querySelector("#dif1");
    dif1.onclick = () => {
        this.grille.style.display = "";
        this.grille2.style.display = "none";
        this.grille3.style.display = "none";
        generation_dif1();
    }

    let dif2 = document.querySelector("#dif2");
    dif2.onclick = () => {
        this.grille.style.display = "none";
        this.grille2.style.display = "";
        this.grille3.style.display = "none";

    }

    let dif3 = document.querySelector("#dif3");
    dif3.onclick = () => {
        this.grille.style.display = "none";
        this.grille2.style.display = "none";
        this.grille3.style.display = "";

    }
}

function verifier(limg, source) {
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