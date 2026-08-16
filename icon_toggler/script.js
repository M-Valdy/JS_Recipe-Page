const heartBtns = document.querySelectorAll(".favorite-icon");

function toggleHeart(heartBtn) {
    if (heartBtn.classList.contains("filled")) {
        // Change the heart icon to filled
        heartBtn.innerHTML = "&#10084;";
    } else {
        // Change the heart icon to unfilled
        heartBtn.innerHTML = "&#9825;";
    }
}

heartBtns.forEach((heartBtn) => {
  heartBtn.addEventListener("click", () => {
    heartBtn.classList.toggle("filled");
    toggleHeart(heartBtn);
  });
});