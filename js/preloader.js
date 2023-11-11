// preloader
window.addEventListener("load", () => {
  console.log("tete");
  document.querySelector(".preloader").classList.add("fade-out");
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
  }, 600);
});