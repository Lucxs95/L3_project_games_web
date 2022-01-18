window.onload = init;

function init() {
    console.log("Page et ressources prêtes à l'emploi");

    let temps = 100;
    const timerElement = document.getElementById("timer");
    timerElement.innerText = temps;

    function diminuerTemps() {
        timerElement.innerText = temps;
        temps--;
        if (temps<= 0) {
            temps = 0;
        }else{
    
        }
      }

    setInterval(diminuerTemps, 1000);




  
}
