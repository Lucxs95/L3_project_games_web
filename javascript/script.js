function getCookie(name) {
    let cookie, c;
    cookie = document.cookie.split(';');
    for (var i = 0; i < cookie.length; i++) {
        c = cookie[i].split('=');
        if (c[0] == name) {
            return c[1];
        }
    }
    return "";
}

let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let tab3 = document.getElementById("tab3");
let value = fetch("http://127.0.0.1:5501/data.json")
    .then(value => value.json())
    .then((data) => {
        let cookie = getCookie("level");
        switch (cookie) {
            case "level1":
                if (data.score[0].game2_score.level_1 > data.score[1].game2_score.level_1) {
                    tab1.innerHTML = "1er - " + data.score[0].name + " " + data.score[0].game2_score.level_1 + " pts";
                    tab2.innerHTML = "2eme - " + data.score[1].name + " " + data.score[1].game2_score.level_1 + " pts";
                    if (data.score.length > 2)
                        tab3.innerHTML = "3eme - " + data.score[2].name + " " + data.score[2].game2_score.level_1 + " pts";
                } else {
                    tab1.innerHTML = "1er - " + data.score[1].name + " " + data.score[1].game2_score.level_1 + " pts";
                    tab2.innerHTML = "2eme - " + data.score[0].name + " " + data.score[0].game2_score.level_1 + " pts";
                }
                break;
            case "level2":
                if (data.score[0].game2_score.level_2 > data.score[1].game2_score.level_2) {
                    tab1.innerHTML = "1er - " + data.score[0].name + " " + data.score[0].game2_score.level_2 + " pts";
                    tab2.innerHTML = "2eme - " + data.score[1].name + " " + data.score[1].game2_score.level_2 + " pts";
                    if (data.score.length > 2)
                        tab3.innerHTML = "3eme - " + data.score[2].name + " " + data.score[2].game2_score.level_2 + " pts";
                } else {
                    tab1.innerHTML = "1er - " + data.score[1].name + " " + data.score[1].game2_score.level_2 + " pts";
                    tab2.innerHTML = "2eme - " + data.score[0].name + " " + data.score[0].game2_score.level_2 + " pts";
                }
                break;
            case "level3":
                if (data.score[0].game2_score.level_3 > data.score[1].game2_score.level_3) {
                    tab1.innerHTML = "1er - " + data.score[0].name + " " + data.score[0].game2_score.level_3 + " pts";
                    tab2.innerHTML = "2eme - " + data.score[1].name + " " + data.score[1].game2_score.level_3 + " pts";
                    if (data.score.length > 2)
                        tab3.innerHTML = "3eme - " + data.score[2].name + " " + data.score[2].game2_score.level_3 + " pts";
                } else {
                    tab1.innerHTML = "1er - " + data.score[1].name + " " + data.score[1].game2_score.level_3 + " pts";
                    tab2.innerHTML = "2eme - " + data.score[0].name + " " + data.score[0].game2_score.level_3 + " pts";
                }
                break;
        }
        if (window.location.href == "http://127.0.0.1:5501/games/infos/index.html") {
            // DECLARATIONS VARIABLES
            let tab1_game1 = document.querySelector("#tab1_game1");
            let tab2_game1 = document.querySelector("#tab2_game1");
            let tab1_game2_niv1 = document.querySelector("#tab1_game2_niv1");
            let tab2_game2_niv1 = document.querySelector("#tab2_game2_niv1");
            let tab1_game2_niv2 = document.querySelector("#tab1_game2_niv2");
            let tab2_game2_niv2 = document.querySelector("#tab2_game2_niv2");
            let tab1_game2_niv3 = document.querySelector("#tab1_game2_niv3");
            let tab2_game2_niv3 = document.querySelector("#tab2_game2_niv3");
            let tab1_game3 = document.querySelector("#tab1_game3");
            let tab2_game3 = document.querySelector("#tab2_game3");

            // ASSIGNER LES VALEURS
            // GAME 1   
            if (data.score[0].game1_score > data.score[1].game1_score) {
                tab1_game1.innerHTML = "1er - " + data.score[0].name + " " + data.score[0].game1_score + " pts";
                tab2_game1.innerHTML = "2eme - " + data.score[1].name + " " + data.score[1].game1_score + " pts";
            } else {
                tab1_game1.innerHTML = "1er - " + data.score[1].name + " " + data.score[1].game1_score + " pts";
                tab2_game1.innerHTML = "2eme - " + data.score[0].name + " " + data.score[0].game1_score + " pts";
            }

            // GAME 2
            // LEVEL 1
            if (data.score[0].game2_score.level_1 > data.score[1].game2_score.level_1) {
                tab1_game2_niv1.innerHTML = "1er - " + data.score[0].name + " " + data.score[0].game2_score.level_1 + " pts";
                tab2_game2_niv1.innerHTML = "2eme - " + data.score[1].name + " " + data.score[1].game2_score.level_1 + " pts";
            } else {
                tab1_game2_niv1.innerHTML = "1er - " + data.score[1].name + " " + data.score[1].game2_score.level_1 + " pts";
                tab2_game2_niv1.innerHTML = "2eme - " + data.score[0].name + " " + data.score[0].game2_score.level_1 + " pts";
            }
            // LEVEL 2
            if (data.score[0].game2_score.level_2 > data.score[1].game2_score.level_2) {
                tab1_game2_niv2.innerHTML = "1er - " + data.score[0].name + " " + data.score[0].game2_score.level_2 + " pts";
                tab2_game2_niv2.innerHTML = "2eme - " + data.score[1].name + " " + data.score[1].game2_score.level_2 + " pts";
            } else {
                tab1_game2_niv2.innerHTML = "1er - " + data.score[1].name + " " + data.score[1].game2_score.level_2 + " pts";
                tab2_game2_niv2.innerHTML = "2eme - " + data.score[0].name + " " + data.score[0].game2_score.level_2 + " pts";
            }
            // LEVEL 3
            if (data.score[0].game2_score.level_3 > data.score[1].game2_score.level_3) {
                tab1_game2_niv3.innerHTML = "1er - " + data.score[0].name + " " + data.score[0].game2_score.level_3 + " pts";
                tab2_game2_niv3.innerHTML = "2eme - " + data.score[1].name + " " + data.score[1].game2_score.level_3 + " pts";
            } else {
                tab1_game2_niv3.innerHTML = "1er - " + data.score[1].name + " " + data.score[1].game2_score.level_3 + " pts";
                tab2_game2_niv3.innerHTML = "2eme - " + data.score[0].name + " " + data.score[0].game2_score.level_3 + " pts";
            }

            // GAME 3
            if (data.score[0].game3_score > data.score[1].game3_score) {
                tab1_game3.innerHTML = "1er - " + data.score[0].name + " " + data.score[0].game3_score + " pts";
                tab2_game3.innerHTML = "2eme - " + data.score[1].name + " " + data.score[1].game3_score + " pts";
            } else {
                tab1_game3.innerHTML = "1er - " + data.score[1].name + " " + data.score[1].game3_score + " pts";
                tab2_game3.innerHTML = "2eme - " + data.score[0].name + " " + data.score[0].game3_score + " pts";
            }
        }
        // GAME 1
        if (window.location.href == "http://127.0.0.1:5501/games/game1/index.html") {
            if (data.score[0].game1_score > data.score[1].game1_score) {
                tab1.innerHTML = "1er - " + data.score[0].name + " " + data.score[0].game1_score + " pts";
                tab2.innerHTML = "2eme - " + data.score[1].name + " " + data.score[1].game1_score + " pts";
            } else {
                tab1.innerHTML = "1er - " + data.score[1].name + " " + data.score[1].game1_score + " pts";
                tab2.innerHTML = "2eme - " + data.score[0].name + " " + data.score[0].game1_score + " pts";
            }
        }
        // GAME 3
        if (window.location.href == "http://127.0.0.1:5501/games/game3/index.html") {
            if (data.score[0].game3_score > data.score[1].game3_score) {
                tab1.innerHTML = "1er - " + data.score[0].name + " " + data.score[0].game3_score + " pts";
                tab2.innerHTML = "2eme - " + data.score[1].name + " " + data.score[1].game3_score + " pts";
            } else {
                tab1.innerHTML = "1er - " + data.score[1].name + " " + data.score[1].game3_score + " pts";
                tab2.innerHTML = "2eme - " + data.score[0].name + " " + data.score[0].game3_score + " pts";
            }
        }
    });

// ACCUEIL
if (window.location.href == "http://127.0.0.1:5501/index.html") {
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
}


function getNom() {
    let inputNameByPlayer = document.getElementById("name").value;
    console.log(inputNameByPlayer);
}

function getScore() {
    return this.score;
}

//*** LOCAL STORAGE ***/
let json = {
    "score": [{
            "id": "0",
            "name": "Lucas",
            "game1_score": "60 pts",
            "game2_score": {
                "level_1": "10 pts",
                "level_2": "20 pts",
                "level_3": "30 pts"
            },
            "game3_score": "50 pts"
        },
        {
            "id": "1",
            "name": "Loïc",
            "game1_score": "50 pts",
            "game2_score": {
                "level_1": "8 pts",
                "level_2": "20 pts",
                "level_3": "30 pts"
            },
            "game3_score": "40 pts"
        }
    ]
};
localStorage.setItem('test', JSON.stringify(json));
let jsonParsed = JSON.parse(localStorage.getItem('test'));
jsonParsed.score[1].name = "test";

localStorage.setItem('test', JSON.stringify(json));
JSON.parse(localStorage.getItem('test'));
//console.log(jsonParsed);
jsonParsed.score.push({
    "id": jsonParsed.score.length,
    "name": "Mike",
    "game1_score": 0,
    "game2_score": {
        "level_1": "10 pts",
        "level_2": "20 pts",
        "level_3": "30 pts"
    },
    "game3_score": "50 pts"
});
console.log(jsonParsed);