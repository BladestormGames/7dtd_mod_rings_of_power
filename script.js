const ringList = document.getElementById("ring-list");

console.log("Script loaded");

fetch("data/rings.json")
    .then(response => response.json())
    .then(rings => {

        console.log("JSON loaded");
        console.log(rings);

        ringList.innerHTML = "<h2>HELLO WORLD</h2>";

    })
    .catch(error => {
        console.error(error);
    });