const img = document.getElementById("img");
let posx = parseInt(getComputedStyle(img).right, 10);
let posy = parseInt(getComputedStyle(img).top, 10);

function jump() {
  img.style.top = "-250px";
  setTimeout(() => {
    img.style.top = "400px";
  }, 900);
}

function moveRight() {
  img.style.right = posx - 100 + "px";
  posx = parseInt(getComputedStyle(img).right, 10);
}

function moveLeft() {
  img.style.right = posx + 100 + "px";
  posx = parseInt(getComputedStyle(img).right, 10);
}

function moveUp() {
  img.style.top = posy - 100 + "px";
  posy = parseInt(getComputedStyle(img).top, 10);
}

function moveDown() {
  img.style.top = posy + 100 + "px";
  posy = parseInt(getComputedStyle(img).top, 10);
}

document.addEventListener("keydown", function (event) {
  event.preventDefault();
  const key = event.key;

  switch (key) {
    case "ArrowLeft":
      moveLeft();
      break;

    case "ArrowRight":
      moveRight();
      break;

    case "ArrowUp":
      moveUp();
      break;

    case "ArrowDown":
      moveDown();
      break;

    case " ":
      jump();
      break;
  }
});