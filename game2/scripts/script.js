import Game from "./Game.js";
window.onload = () => {
    const difficulty = new Difficulty();

    const cookie = document.cookie.split('=');
    if (cookie.length <= 1) {
        difficulty.setupLevelOne();
    } else {
        switch (cookie[1]) {
            case "level1":
                difficulty.setupLevelOne();
                break;
            case "level2":
                difficulty.setupLevelTwo();
                break;
            case "level3":
                difficulty.setupLevelThree();
                break;
        }
    }

};

let depart = false;
let temps_debut = new Date().getTime();

class Difficulty {
    constructor() {

        this.grille = document.querySelector(".grille");
        this.grille2 = document.querySelector(".grille2");
        this.grille3 = document.querySelector(".grille3");

        let dif1 = document.querySelector("#dif1");
        dif1.onclick = () => {
            this.setupLevelOne();
        }

        let dif2 = document.querySelector("#dif2");
        dif2.onclick = () => {
            this.setupLevelTwo();
        }

        let dif3 = document.querySelector("#dif3");
        dif3.onclick = () => {
            this.setupLevelThree();
        }
    }

    setupLevelThree() {
        this.displayGrid(this.grille3);
        this.generate("level3");
        document.cookie = "level=level3";
    }

    setupLevelTwo() {
        this.displayGrid(this.grille2);
        this.generate("level2");
        document.cookie = "level=level2";
    }

    setupLevelOne() {
        this.displayGrid(this.grille);
        this.generate("level1");
        document.cookie = "level=level1";
    }

    displayGrid(gridToDisplay) {
        this.grille.style.display = "none";
        this.grille2.style.display = "none";
        this.grille3.style.display = "none";
        gridToDisplay.style.display = ""
    }

    generate(level) {
        switch (level) {
            case "level1":
                this.GenerateLvl1();
                break;
            case "level2":
                this.GenerateLvl2();
                break;
            case "level3":
                this.GenerateLvl3();
                break;
        }

    }

    GenerateLvl1() {
        const game = new Game();
        setTimeout(function() {
            for (let i = 0; i < 16; i++) {
                document.querySelector('.grille #img' + i).src = "mini/miniz.png";
            }
            depart = true;
        }, 4000);
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
                    //onClick='verifier(\"img" + i + "\", \"mini" + nb_img + "\")'
                    document.querySelector(".grille #case" + i).innerHTML = "<img id='img" + i + "' src='mini/mini" + nb_img + ".png'  alt='' />";
                    const img = document.getElementById("img" + i);
                    img.addEventListener('click', game.verifier("img" + i, "mini" + nb_img, "level1"));
                    chaine += "-" + nb_alea + "-";
                    test = false;
                }
            }
            test = true;
        }
    }

    GenerateLvl2() {
        setTimeout(function() {
            for (let i = 0; i < 25; i++) {
                document.querySelector('.grille2 #img' + i).src = "mini/miniz.png";
            }
            depart = true;
        }, 4000);
        let nb_alea;
        let nb_img = "";
        let test = true;
        let chaine = "";
        for (let i = 0; i < 25; i++) {
            while (test == true) {
                nb_alea = Math.floor(Math.random() * 25) + 1; //Pour génération dans les 16 cases
                if (chaine.indexOf("-" + nb_alea + "-") > -1)
                    nb_alea = Math.floor(Math.random() * 25) + 1;
                else {
                    nb_img = Math.floor((nb_alea + 1) / 2); //8 paires pour 16 places ==> 2 générations différentes par image
                    document.querySelector(".grille2 #case" + i).innerHTML = "<img id='img" + i + "' src='mini/mini" + nb_img + ".png'  alt='' />";
                    const img = document.getElementById("img" + i);
                    img.addEventListener('click', game.verifier("img" + i, "mini" + nb_img, "level2"));
                    chaine += "-" + nb_alea + "-";
                    test = false;
                }
            }
            test = true;
        }
    }
    GenerateLvl3() {
        setTimeout(function() {
            for (let i = 0; i < 36; i++) {
                document.querySelector('.grille3 #img' + i).src = "mini/miniz.png";
            }
            depart = true;
        }, 4000);
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
                    document.querySelector(".grille3 #case" + i).innerHTML = "<img id='img" + i + "' src='mini/mini" + nb_img + ".png'  alt='' />";
                    const img = document.getElementById("img" + i);
                    img.addEventListener('click', game.verifier("img" + i, "mini" + nb_img, "level3"));
                    chaine += "-" + nb_alea + "-";
                    test = false;
                }
            }
            test = true;
        }
    }
}