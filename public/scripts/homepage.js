const modal = document.getElementById("popupBox");

const openBtn = document.getElementById("openBtn");

const closeBtn = document.getElementsByClassName("popup-close-btn")[0];

const wrapper = document.getElementsByClassName("modal-wrapper")[0];

openBtn.onclick = function () {
  modal.style.display = "block";
  wrapper.style.display = "block";

  wrapper.style.opacity = "1";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
  wrapper.style.display = "none";

  wrapper.style.opacity = "0";
};

wrapper.onclick = function () {
  modal.style.display = "none";
  wrapper.style.display = "none";

  wrapper.style.opacity = "0";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

modal.onclick = function (e) {
  e.stopPropagation();
};
