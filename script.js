
const iframeEl = document.getElementById("map");
const buttonEl = document.getElementById("mode-map-btn");

buttonEl.addEventListener("click", () => {
  if (iframeEl.style.filter === "invert(100%)") {
    iframeEl.style.filter = "";
  } else {
    iframeEl.style.filter = "invert(100%)";
  }
});
// scroll btn
const backToTopBtn = document.getElementById("backToTopBtn");
const circle = document.querySelector('.progress-ring__circle');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

window.onload = function() {
    // Скрити кнопку при загрузке сторінки
    backToTopBtn.style.display = "none";
};

window.onscroll = function() {
    const headerHeight = document.querySelector("header").offsetHeight;

    // Показ кнопки при прокрутке ниже header
    if (document.body.scrollTop > headerHeight || document.documentElement.scrollTop > headerHeight) {
        backToTopBtn.style.display = "block"; // Показати кнопку
    } else {
        backToTopBtn.style.display = "none"; // Скрити кнопку
    }

    // Обновлення прогресса прокрутки
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = document.documentElement.scrollTop;
    const scrollPercentage = scrollPosition / scrollHeight;

    const offset = circumference - scrollPercentage * circumference;
    circle.style.strokeDashoffset = offset;
};

backToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();