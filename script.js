window.onload = () => {

    parseJSON();
}

function parseJSON() {
    fetch("http://127.0.0.1:5500/json/data.json")
        .then(value => value.json())
        .then(players => {
            players.push({
                id: "2",
                name: cookie[1],
                password: cookie[3],
                best_score_game1: "15",
                best_score_game2: "55",
                best_score_game3: "45",
                trophies: "null"
            });
            console.log(players);
        });
    let cookie = parseCookie(document.cookie);
}

document.getElementById("connexion");
addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    document.cookie = "name=" + name;
    document.cookie = "password=" + password;
});

const parseCookie = str =>
    str
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, v) => {
        acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
        return acc;
    }, {});


// connexion ou inscription 
//comparer les input sinon creer un player dans json
// recuperer les infos du joueurs dans son JSON_player puis stocker dans cookies


let requestURL = 'http://127.0.0.1:5500/json/data.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    let player = request.response;
    console.log(player);
}

document.cookie = "name=";
document.cookie = "password=";
document.getElementById("connexion").
addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    document.cookie = "name=" + name;
    document.cookie = "password=" + password;
});
document.getElementById("retourPrincipale").style.display = "none";

document.getElementById("inscriptionPrincipale").addEventListener("click", () => {
    document.getElementById("troisieme").style.display = "contents";
    document.getElementById("connexionPrincipale").style.display = "none";
    document.getElementById("inscriptionPrincipale").style.display = "none";
    document.getElementById("retourPrincipale").style.display = "";


});
document.getElementById("connexionPrincipale").addEventListener("click", () => {
    document.getElementById("deuxieme").style.display = "contents";
    document.getElementById("inscriptionPrincipale").style.display = "none";
    document.getElementById("connexionPrincipale").style.display = "none";
    document.getElementById("retourPrincipale").style.display = "";

});
document.getElementById("retourPrincipale").addEventListener("click", () => {
    document.getElementById("troisieme").style.display = "none";
    document.getElementById("connexionPrincipale").style.display = "";
    document.getElementById("inscriptionPrincipale").style.display = "";
    document.getElementById("deuxieme").style.display = "none";
    document.getElementById("retourPrincipale").style.display = "none";

});