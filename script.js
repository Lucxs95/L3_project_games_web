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