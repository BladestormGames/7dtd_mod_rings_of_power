const ringList = document.getElementById("ring-list");
const searchBox = document.getElementById("search");

let allRings = [];

// Draws the rings onto the page
function displayRings(rings)
{
    ringList.innerHTML = "";

    rings.forEach(ring =>
    {
        ringList.innerHTML += `
            <div class="ring">

                <div class="ring-icon">
                    <img src="images/rings/${ring.icon}" alt="${ring.name}">
                </div>

                <div class="ring-info">
					<div class="ring-name">${ring.name}</div>
					<div class="ring-desc">${ring.desc}</div>

					<div class="ring-rarity rarity-${ring.rarity}">
						${ring.rarity}
					</div>
				</div>

            </div>
        `;
    });
}

// Load the JSON
fetch("data/rings.json")
    .then(response => response.json())
    .then(rings =>
    {
        allRings = rings;

        displayRings(allRings);
    });

// Search
searchBox.addEventListener("input", function()
{
    const search = searchBox.value.toLowerCase();

    const filtered = allRings.filter(ring =>
	{
		return (
			ring.name.toLowerCase().includes(search) ||
			ring.desc.toLowerCase().includes(search) ||
			ring.rarity.toLowerCase().includes(search)
		);
	});

    displayRings(filtered);
});