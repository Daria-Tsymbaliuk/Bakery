
const iframeEl = document.getElementById("map");
const buttonEl = document.getElementById("mode-map-btn");

buttonEl.addEventListener("click", () => {
  if (iframeEl.style.filter === "invert(100%)") {
    iframeEl.style.filter = "";
  } else {
    iframeEl.style.filter = "invert(100%)";
  }
});