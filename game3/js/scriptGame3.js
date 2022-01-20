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
    

    /*function diminuerTemps() {
        timerElement.innerText = temps;
        temps--;
        if (temps<= 0) {
            temps = 0;
        }else{
        }
      }*/
    //setInterval(diminuerTemps, 1000);


    //return un entier aleatoire
    function entierAleatoire(min, max)
    {
     return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log(entierAleatoire(min,max));


    //verification que input = random
    function verifierJustePrix(){
        console.log(justePrix);
        console.log(prixElement.innerText);
        
        if(justePrix === prixElement.innerText){
            console.log("trouvé");
            return ("gg");
        }
        else{
            console.log("nope");
            return ("perdu");
        }
    }

    // recupere bouton + onclick lance la verification
    let parisButton = document.querySelector("#parisButton");
    console.log(parisButton);
    parisButton.onclick = () => {
        let verif = verifierJustePrix();
        console.log("resultat : " + verif)
  }


  function afficherJeu(){
      style.display = "contents";
    }

   // recupere bouton + onclick lance la verification
   let commencerButton = document.querySelector("#commencer");
   console.log(commencerButton);
   commencerButton.onclick = () => {
       let afficherJeu = afficherJeu();
 }
  
}
