window.onload = init;

function init() {
    console.log("Page et ressources prêtes à l'emploi");


    //définition des variables
    let temps = 10;
    let min = 0;
    let max =50;
    let justePrix = entierAleatoire(min,max);



    //récuperation de certain variables de HTML grace a leur id
    const timerElement = document.getElementById("timer");
    const parisElement = document.getElementById("parisButton");
    //console.log(parisElement);
    const prixElement = document.getElementById("nombre").innerText;
    //console.log(prixElement);


    //renvoie le contenu textuel du nœud spécifié
    timerElement.innerText = temps;
    //prixElement.innerText = nombre;
    

    function diminuerTemps() {
        timerElement.innerText = temps;
        temps--;
        if (temps<= 0) {
            temps = 0;
        }else{
        }
      }
    


    //return un entier aleatoire
    function entierAleatoire(min, max)
    {
     return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log(entierAleatoire(min,max));


    //verification que input = random
    function verifierJustePrix(){
        const prixElement = document.getElementById("nombre").innerText;
        console.log(justePrix);
        console.log(prixElement);
        /*while (prixElement.innerText !== justePrix) {
            console.log("nope");
            return ("perdu");
            }
        console.log("yep");
        return ("gg le prix est de " + prixElement.innerText);
        }*/
        return 0;
    }

    //recupere le bouton parier et lance la fonction associé
  let c = document.querySelector("#parisButton");
  c.onclick = () => {
    let parisButtonGo = verifierJustePrix();
    console.log("parisButtonGo : " + parisButtonGo)
  }





  //fonction lancant le jeu en appuyant sur le bouton commencer
  function afficherJeu() {
    document.getElementById("startGame").style.display = "contents";
    document.getElementById("deleteStart").style.display = "none";
    document.getElementById("deleteButtonStart").style.display = "none";
    setInterval(diminuerTemps, 1000);
    return 0;
  }

  //recupere le bouton commencer et lance le jeu en enlevant ce meme bouton en affichant input et supprimant l'image principale
  let b = document.querySelector("#commencer");
  b.onclick = () => {
    let afficherGame = afficherJeu();
    console.log("afficherGame : " + afficherGame)
  }

  
}
