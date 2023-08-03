document.addEventListener("DOMContentLoaded", function () { var e = document.querySelector(".gallery"); e && (e.style.display = "flex"); var t = document.querySelectorAll(".gallery-item"); t.forEach(e => { e.addEventListener("click", function () { var t = document.querySelector("#modalImage"), l = window.getComputedStyle(e).backgroundImage; l = l.replace('url("', "").replace('")', ""), t.src = l, new bootstrap.Modal(document.getElementById("imageModal")).show() }) }), document.querySelectorAll(".selection-Gallerry button").forEach(e => { e.addEventListener("click", function () { var l; "Tous" === e.id ? t.forEach(e => e.style.display = "block") : (l = e.id, t.forEach(e => { e.style.display = e.dataset.galleryTag === l ? "block" : "none" })) }) }) });
document.addEventListener("DOMContentLoaded", function () {
    var galleryItems = document.querySelectorAll(".gallery-item");
    var galleryButtons = document.querySelectorAll(".selection-Gallery button");

    galleryButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Retire la classe "active" des autres boutons
            galleryButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            // Ajoute la classe "active" au bouton cliqué
            button.classList.add("active");

            // Filtre les images en fonction du bouton cliqué
            if (button.id === "all") {
                galleryItems.forEach(item => {
                    item.style.display = "block";
                });
            } else {
                var tag = button.id;
                galleryItems.forEach(item => {
                    item.style.display = (item.dataset.galleryTag === tag) ? "block" : "none";
                });
            }
        });
    });
});