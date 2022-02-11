window.onload = () => {
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

}