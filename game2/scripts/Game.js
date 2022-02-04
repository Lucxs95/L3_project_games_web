export default class Game {
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
    constructor() {
        const cookie = document.cookie.split('=');
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
                    let attente = setTimeout(function() {
                        document.getElementById(this.case1).src = "mini/miniz.png";
                        document.getElementById(this.case2).src = "mini/miniz.png";
                        this.depart = true;
                        this.nb_clics = 0;
                        this.nb_erreurs++;
                        switch (cookie[1]) {
                            case "level1":
                                if (this.nb_erreurs < 11)
                                    this.le_score = 10 - this.nb_erreurs;
                                document.getElementById("score").innerHTML = "<strong>" + this.le_score + "</strong>/10";
                                break;
                            case "level2":
                                if (nb_erreurs < 21)
                                    this.le_score = 20 - this.nb_erreurs;
                                document.getElementById("score").innerHTML = "<strong>" + this.le_score + "</strong>/20";
                                break;
                            case "level3":
                                if (nb_erreurs < 31)
                                    this.le_score = 30 - this.nb_erreurs;
                                document.getElementById("score").innerHTML = "<strong>" + this.le_score + "</strong>/30";
                                break;
                        }

                    }, 1000);
                } else {
                    this.depart = true;
                    this.nb_clics = 0;
                    this.img_ok += 2;
                    switch (level) {
                        case "level1":
                            if (this.img_ok == 16) {
                                document.getElementById("score").innerHTML = "<strong>" + this.le_score + "</strong>/10";
                                document.getElementById("temps").innerHTML = "Vous avez mis <strong>" + this.dif_temps + "</strong> secondes";
                            }
                            break;
                        case "level2":
                            if (this.img_ok == 25) {
                                document.getElementById("score").innerHTML = "<strong>" + this.le_score + "</strong>/20";
                                document.getElementById("temps").innerHTML = "Vous avez mis <strong>" + this.dif_temps + "</strong> secondes";
                            }
                            break;
                        case "level3":
                            if (this.img_ok == 36) {
                                document.getElementById("score").innerHTML = "<strong>" + this.le_score + "</strong>/30";
                                document.getElementById("temps").innerHTML = "Vous avez mis <strong>" + this.dif_temps + "</strong> secondes";
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