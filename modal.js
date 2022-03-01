// selecting DOM elements
const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".img-modal");
const caption = document.querySelector(".caption");

// looping over imgs to open them when clicked
previews.forEach((preview) => {
  // adding "click" event listener to all imgs
  preview.addEventListener("click", () => {
    modal.classList.add("open");

    // opening animation
    original.classList.add("open");

    // dynamic img & txt
    const originalSrc = preview.getAttribute("data-original");
    // original.src = `./img/${originalSrc}`;
    original.src = originalSrc;

    const altTxt = preview.alt;
    caption.textContent = altTxt;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});
