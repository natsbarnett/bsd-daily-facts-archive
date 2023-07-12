document.querySelectorAll("input").forEach(e => { e.addEventListener("change", filtre) });

function filtre() {
    document.querySelector(".feed").classList.toggle(this.name);
}