let images = document.querySelectorAll(".gallery img");
let currentIndex = 0;

function openImg(index) {
  currentIndex = index;
  document.getElementById("popup").style.display = "flex";
  document.getElementById("popupImg").src = images[currentIndex].src;
}

function closeImg() {
  document.getElementById("popup").style.display = "none";
}

function changeImg(direction) {
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;

  document.getElementById("popupImg").src = images[currentIndex].src;
}