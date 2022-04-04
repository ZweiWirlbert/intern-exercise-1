function openCity(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    tablinks[i].style.borderColor = "#e5e5e5";
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  evt.currentTarget.style.borderColor = "#70c174";
}

function openMenu() {
  var menu = document.getElementById("overlay-menu");
  menu.classList.toggle("menu-open");
}

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
