import { getCookie } from "./script.js"
export default class Game {
    constructor() {
        this.nb_clics = 0;
        this.mini1 = "";
        this.mini2 = ""; // mémoriser le nom img
        this.case1 = "";
        this.case2 = ""; // sécurité pour éviter clic sur la même image
        this.img_ok = 0;
        this.nb_erreurs = 0;
        this.score = 0;
        this.depart = false;
        this.temps_debut = new Date().getTime();
        this.cookie = getCookie("level");
    }
    verifier(nameImg, baliseName, level) {
        let dif_temps = Math.floor((new Date().getTime() - this.temps_debut) / 1000);
        this.nb_clics++;
        document.getElementById(nameImg).src = "mini/" + baliseName + ".png";
        if (this.nb_clics == 1) {
            this.mini1 = baliseName;
            this.case1 = nameImg;
        } else {
            this.mini2 = baliseName;
            this.case2 = nameImg;

            if (this.case1 != this.case2) {
                this.depart = false;
                if (this.mini1 != this.mini2) {
                    let attente = setTimeout(() => {
                        document.getElementById(this.case1).src = "mini/miniz.png";
                        document.getElementById(this.case2).src = "mini/miniz.png";
                        this.depart = true;
                        this.nb_clics = 0;
                        this.nb_erreurs++;
                        switch (this.cookie) {
                            case "level1":
                                if (this.nb_erreurs < 11)
                                    this.score = 10 - this.nb_erreurs;
                                document.getElementById("score").innerHTML = "<strong>" + this.score + "</strong>/10";
                                break;
                            case "level2":
                                if (this.nb_erreurs < 21)
                                    this.score = 20 - this.nb_erreurs;
                                document.getElementById("score").innerHTML = "<strong>" + this.score + "</strong>/20";
                                break;
                            case "level3":
                                if (this.nb_erreurs < 31)
                                    this.score = 30 - this.nb_erreurs;
                                document.getElementById("score").innerHTML = "<strong>" + this.score + "</strong>/30";
                                break;
                        }

                    }, 1000);
                } else {
                    this.depart = true;
                    this.nb_clics = 0;
                    this.img_ok += 2;
                    switch (this.cookie) {
                        case "level1":
                            if (this.img_ok == 16) {
                                document.getElementById("score").innerHTML = "<strong>" + this.score + "</strong>/10";
                                document.getElementById("temps").innerHTML = "Vous avez mis <strong>" + dif_temps + "</strong> secondes";
                            }
                            break;
                        case "level2":
                            if (this.img_ok == 36) {
                                document.getElementById("score").innerHTML = "<strong>" + this.score + "</strong>/20";
                                document.getElementById("temps").innerHTML = "Vous avez mis <strong>" + dif_temps + "</strong> secondes";
                            }
                            break;
                        case "level3":
                            if (this.img_ok == 64) {
                                document.getElementById("score").innerHTML = "<strong>" + this.score + "</strong>/30";
                                document.getElementById("temps").innerHTML = "Vous avez mis <strong>" + dif_temps + "</strong> secondes";
                            }
                            break;
                    }
                }
            } else {
                if (this.nb_clics == 2) {
                    this.nb_clics = 1;
                }
            }
            if (this.dif_temps > 180) {
                document.getElementById("temps").innerHTML = "Le temps imparti est dépassé, vous avez perdu !";
                this.depart = false;
            }
        }
    }
}