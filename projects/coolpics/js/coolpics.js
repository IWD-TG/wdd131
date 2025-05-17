// Menu toggle logic
const menuButton = document.querySelector("#menuButton");
const mainNav = document.querySelector("#mainNav");

function toggleMenu() {
    mainNav.classList.toggle("hide");
}

function handleResize() {
    if (window.innerWidth > 900) {
        mainNav.classList.remove("hide");
    } else {
        mainNav.classList.add("hide");
    }
}

menuButton.addEventListener("click", toggleMenu);
window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);

// Modal logic
const gallery = document.querySelector(".gallery");
const modal = document.querySelector("#imgModal");
const modalImage = document.querySelector("#modalImage");
const closeButton = document.querySelector(".close-viewer");

gallery.addEventListener("click", (event) => {
    const clickedImage = event.target.closest("img");
    if (clickedImage) {
        const src = clickedImage.getAttribute("src");
        const alt = clickedImage.getAttribute("alt");
        const baseName = src.split("-")[0]; // images/norris
        modalImage.src = `projects\coolpics\images\norris-full.jpeg`;
        modalImage.alt = alt;
        modal.showModal();
    }
});

closeButton.addEventListener("click", () => {
    modal.close();
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

