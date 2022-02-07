window.onload = init;

function init() {
  console.log("Page et ressources prêtes à l'emploi");
  const game = new Game();
  game.play();
}

class Game {
  constructor() {
    //définition des variables
    this.temps = 50;
    this.min = 0;
    this.max = 50;
    this.justePrix = this.entierAleatoire(this.min, this.max);
    this.plusMoins = "";
    this.score = 0;

    document
      .getElementById("parisButton")
      .addEventListener("click", this.verifierJustePrix.bind(this));

    document.getElementById("nombre").addEventListener("click", () => {
      const numberGivenByPlayer = document.getElementById("nombre").value;
      //console.log(numberGivenByPlayer);
    });

    document
      .getElementById("commencer")
      .addEventListener("click", this.afficherJeu.bind(this));
  }

  play() {
    this.diminuerTemps();
  }

  diminuerTemps() {
    const timerElement = document.getElementById("timer");
    timerElement.innerText = this.temps;
    this.temps--;
    if (this.temps < 0) {
      this.stop();
      this.temps = 0;
    } else {
    }
  }

  entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  verifierJustePrix() {
    const plusMoinsElement = document.getElementById("PlusMoins");
    let inputNumberByPlayer = document.getElementById("nombre").value;
    const scoreElement = document.getElementById("score");
    scoreElement.innerText = this.score;
    console.log(this.justePrix);
    console.log(inputNumberByPlayer);

    if (inputNumberByPlayer == this.justePrix) {
      console.log("yep");
      this.plusMoins = "GG chercher de nouveau un prix";
      this.score++;
      this.max = this.max*2;
      this.justePrix = this.entierAleatoire(this.min, this.max);
      console.log(this.score);
      console.log(this.justePrix);

    } else {
      if (inputNumberByPlayer >= this.justePrix) {
        console.log("-");
        this.plusMoins = "-";
      } else {
        console.log("+");
        this.plusMoins = "+";
      }
    }
    plusMoinsElement.innerText = this.plusMoins;
  }

  //fonction lancant le jeu en appuyant sur le bouton commencer
  afficherJeu() {
    document.getElementById("startGame").style.display = "contents";
    document.getElementById("deleteStart").style.display = "none";
    document.getElementById("deleteButtonStart").style.display = "none";
    setInterval(this.diminuerTemps.bind(this), 1000);
    return 0;
  }

  stop(){
    const scoreElement = document.getElementById("score");
    scoreElement.innerText = this.score;
    document.querySelector(".mid").style.display = "none";
    document.querySelector(".midmid").style.display =  "inline-block";
  }

  restart(){

  }


  
}


