<<<<<<< HEAD
// Écouteur d'événement sur les boutons
const filterButtons = document.querySelectorAll(".filter-btn");

// Ajoute un écouteur d'événement à chaque bouton de filtre
filterButtons.forEach((button) => {
    button.addEventListener("click", filterGallery);
});

function filterGallery(event) {
    const tagToFilter = event.target.id; // Récupère l'ID du bouton cliqué
    const galleryItems = document.querySelectorAll(".gallery > div"); // Sélectionne toutes les div dans la galerie

    // Appliquer la classe "active" au bouton cliqué et la supprimer des autres boutons
    filterButtons.forEach((button) => {
        if (button.id === tagToFilter) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    // Si le bouton "Tous" est cliqué, afficher toutes les photos sans filtre
    if (tagToFilter === "Tous") {
        galleryItems.forEach((item) => {
            item.style.display = "block";
        });
    } else {
        // Parcourt chaque élément de la galerie
        galleryItems.forEach((item) => {
            const tag = item.getAttribute("data-gallery-tag"); // Récupère l'attribut data-gallery-tag de l'élément

            // Si le tag de l'élément correspond au tag à filtrer, l'élément est affiché, sinon il est caché
            if (tag === tagToFilter) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }
}
=======
const filterButtons = document.querySelectorAll(".filter-btn"); function filterGallery(t) { const e = t.target.id, l = document.querySelectorAll(".gallery > div"); filterButtons.forEach(t => { t.id === e ? t.classList.add("active") : t.classList.remove("active") }), "Tous" === e ? l.forEach(t => { t.style.display = "block" }) : l.forEach(t => { const l = t.getAttribute("data-gallery-tag"); t.style.display = l === e ? "block" : "none" }) } filterButtons.forEach(t => { t.addEventListener("click", filterGallery) });
>>>>>>> f53dcad3c7c9219ac2afc3cd45189b658f77bd7e
