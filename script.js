const ringList = document.getElementById("ring-list");

fetch("data/rings.json")
    .then(response => response.json())
    .then(rings => {

        rings.forEach(ring => {

            ringList.innerHTML += `
                <div class="ring">

                    <div class="ring-icon">
                        <img src="images/rings/${ring.icon}" alt="${ring.name}">
                    </div>

                    <div class="ring-info">
                        <div class="ring-name">${ring.name}</div>
                        <div class="ring-desc">${ring.desc}</div>
                    </div>

                </div>
            `;

        });

    });