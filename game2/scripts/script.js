window.onload = init;

let grille;

function init() {
    console.log("Page et ressources prêtes à l'emploi");
    this.grille = document.querySelector(".grille");
    this.grille2 = document.querySelector(".grille2");
    this.grille3 = document.querySelector(".grille3");

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
        generation_dif2();
    }

    let dif3 = document.querySelector("#dif3");
    dif3.onclick = () => {
        this.grille.style.display = "none";
        this.grille2.style.display = "none";
        this.grille3.style.display = "";
        generation_dif2();
    }
}