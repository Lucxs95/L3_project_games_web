import Cookie from "./cookie.js";
import { create2DArray } from "./utils.js";
/* Classe principale du jeu, c'est une grille de cookies. Le jeu se joue comme
Candy Crush Saga etc... c'est un match-3 game... */
export default class Grille {
    cookiesSelectionees = [];
  constructor(l, c) {
    this.colonnes = c;
    this.lignes = l;
    this.cookies= create2DArray(l);
    this.remplirTableauDeCookies(6);
    this.verificationSuiteCookies();
    this.htmlImage = document.createElement("img");
  }

  /**
   * parcours la liste des divs de la grille et affiche les images des cookies
   * correspondant à chaque case. Au passage, à chaque image on va ajouter des
   * écouteurs de click et de drag'n'drop pour pouvoir interagir avec elles
   * et implémenter la logique du jeu.
   */
  
  showCookies() {
    let caseDivs = document.querySelectorAll("#grille div");

    caseDivs.forEach((div, index) => {
      let ligne = Math.floor(index/this.lignes);
      let colonne = index % this.colonnes;

      let cookie = this.cookies[ligne][colonne];
      // console.log("On remplit le div index=" + index + " l=" + ligne + " col=" + colonne);

      let img = cookie.htmlImage;

      // ecouteur sur l'image

      img.onclick = (event) => {
        // recup ligne et colonne de l'objet
        const i = event.target;
        let ligneCookie = i.dataset.ligne;
        let colonneCookie = i.dataset.colonne;
        console.log("ligne : " + ligneCookie + " colonne : " + colonneCookie);
         let cookieClickee = this.cookies[ligneCookie][colonneCookie];

        if(this.cookiesSelectionees.length === 0){
          cookieClickee.selectionnee();
          this.cookiesSelectionees.push(cookieClickee);
      }else if (this.cookiesSelectionees.length === 1){
          console.log("on tente de swap");
          this.cookiesSelectionees.push(cookieClickee);
          Cookie.swapCookies(this.cookiesSelectionees[0],this.cookiesSelectionees[1]
  );
  this.cookiesSelectionees = [];
      }else{
        console.log("deux cookies deja selectionnees")
      }
      }

      /*img.ondragstart = ( event) => {
        let ligneCookie = i.dataset.ligne;
        let colonneCookie = i.dataset.colonne;
        JSON.stringify({ ligne : ligneCookie , colonne : colonneCookie });

      }*/
      
      // on affiche l'image dans le div pour la faire apparaitre à l'écran.
      div.appendChild(img);
    });
  }
  
  /**
   * Initialisation du niveau de départ. Le paramètre est le nombre de cookies différents
   * dans la grille. 4 types (4 couleurs) = facile de trouver des possibilités de faire
   * des groupes de 3. 5 = niveau moyen, 6 = niveau difficile
   *
   * Améliorations : 1) s'assurer que dans la grille générée il n'y a pas déjà de groupes
   * de trois. 2) S'assurer qu'il y a au moins 1 possibilité de faire un groupe de 3 sinon
   * on a perdu d'entrée. 3) réfléchir à des stratégies pour générer des niveaux plus ou moins
   * difficiles.
   *
   * On verra plus tard pour les améliorations...
   * 
   * Maths.random()
   *      .round()
   * 
   */
  remplirTableauDeCookies(nbDeCookiesDifferents) {
    // A FAIRE
    for(let l = 0 ; l<this.lignes ; l++) {
      for(let c = 0 ; c<this.colonnes; c++){

        const type = Math.floor(Math.random()*nbDeCookiesDifferents);
        this.cookies[l][c] = new Cookie(type, l, c);

      }
    }
  }

  verificationSuiteCookies() {
    console.log("hello on verifie la suite en colonne des cookies");
     let arr = [];
     console.log(arr[1]);
     let j = 0;


     for(let c = 0 ; c<this.colonnes ; c++){ // en colonne d'abord 

      for(let l = 0 ; l<this.lignes ; l++) {
        let element = this.cookies[l][c];
        
        let précédent = arr[j-1];
        let précédentprécédent = arr[j-2];

        arr[j] = element.type;
        let actuel = arr[j];
        console.log(actuel);
        j++;
        

          if (actuel === précédent && précédent === précédentprécédent ){
            console.log("repetition de 3 motifs");
            console.log("j-1 : " + précédent);
            console.log("j-2 : " + précédentprécédent);

          }else{
            console.log("ok");
            console.log("j-1 : " + précédent);
            console.log("j-2 : " + précédentprécédent);
          }
        
      }
      console.log(arr)
      console.log("fin de la colonne " + c);
      arr=[];
     }







     console.log("hello on verifie la suite en ligne des cookies");
     let arr2 = [];
     console.log(arr2[1]);
     let k = 0;


     for(let l = 0 ; l<this.lignes ; l++){ // en ligne maintenant

      for(let c = 0 ; c<this.colonnes ; c++) {
        let element2 = this.cookies[l][c];
        
        let préc = arr2[k-1];
        let précpréc = arr2[k-2];

        arr2[k] = element2.type;
        let act = arr2[k];
        console.log(act);
        k++;
        

          if (act === préc && préc === précpréc ){
            console.log("repetition de 3 motifs");
            console.log("k-1 : " + préc);
            console.log("k-2 : " + précpréc);
            let précprécpréc = arr2[k-3]
            this.htmlImage.classList.toggle("grilleSuite");

          }else{
            console.log("ok");
            console.log("k-1 : " + préc);
            console.log("k-2 : " + précpréc);
          }
        
      }
      console.log(arr2)
      console.log("fin de la ligne " + l);
      arr2=[];
     }
   }

}
