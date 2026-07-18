const ringList = document.getElementById("ring-list");
const ringCount = document.getElementById("ring-count");
const searchBox = document.getElementById("search");

let allRings = [];

let selectedRarity = "All";
const rarityButtons = document.querySelectorAll(".rarity-button");

// Draws the rings onto the page
function displayRings(rings)
{
    ringList.innerHTML = "";

    if (rings.length === allRings.length)
    {
        ringCount.textContent = `${allRings.length} Unique Rings`;
    }
    else
    {
        ringCount.textContent = `Showing ${rings.length} of ${allRings.length} Rings`;
    }

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

// Load JSON
fetch("data/rings.json")
    .then(response => response.json())
    .then(rings =>
    {
        allRings = rings;
        displayRings(allRings);
    });

// Search
searchBox.addEventListener("input", filterRings);

// Rarity Buttons
rarityButtons.forEach(button =>
{
    button.addEventListener("click", function()
    {
        console.log("Clicked:", this.dataset.rarity);
		
		rarityButtons.forEach(b => b.classList.remove("active"));

        this.classList.add("active");

        selectedRarity = this.dataset.rarity;

        filterRings();
    });
});