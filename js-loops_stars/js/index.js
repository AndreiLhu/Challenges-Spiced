console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    const newStar = document.createElement("img");
    if (i <= filledStars) {
      // newStar.setAttribute("src", "assets/star-filled.svg");
      newStar.src = "assets/star-filled.svg";
    } else {
      // newStar.setAttribute("src", "assets/star-empty.svg");
      newStar.src = "assets/star-empty.svg";
    }

    newStar.addEventListener("click", () => {
      renderStars(i);
    });
    starContainer.appendChild(newStar);
  }

  //--^-- your code here --^--
}

renderStars();
