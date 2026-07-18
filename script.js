const ringList = document.getElementById("ring-list");

fetch("data/rings.json")
    .then(response => response.json())
    .then(rings => {

        console.log(rings);

    });