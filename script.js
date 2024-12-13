const card = document.getElementById("card");
const flipButton = document.getElementById("flipButton");
const flipBackButton = document.getElementById("flipBackButton");

flipButton.addEventListener("click", function() {
    card.querySelector(".card-inner").classList.add("flipped");
});

flipBackButton.addEventListener("click", function() {
    card.querySelector(".card-inner").classList.remove("flipped");
});