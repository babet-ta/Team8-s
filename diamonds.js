const cards = document.querySelectorAll(".cards");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        const img = card.querySelector(".cards__img");
        const imgActive = card.querySelector(".cards__img_active");

        if (img.style.display === "none") {
            img.style.display = "inline";
            imgActive.style.display = "none";
            localStorage.removeItem(
                card.querySelector(".cards__wr-title").textContent
            );
        } else {
            img.style.display = "none";
            imgActive.style.display = "inline";
            localStorage.setItem(
                card.querySelector(".cards__wr-title").textContent,
                "full"
            );
        }
    });
});

function restoreState() {
    const titles = document.querySelectorAll(".cards__wr-title");

    titles.forEach((title) => {
        const img = title.parentNode.querySelector(".cards__img");
        const imgActive = title.parentNode.querySelector(".cards__img_active");

        if (localStorage.getItem(title.textContent) === "full") {
            img.style.display = "none";
            imgActive.style.display = "inline";
        }
    });
}

restoreState();
