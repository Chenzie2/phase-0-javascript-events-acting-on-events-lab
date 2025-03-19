const dodger = document.getElementById("dodger");
const game = document.getElementById("game");

dodger.style.left = dodger.style.left || "180px"; // Ensure initial value

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  const maxRight = 360; // Since the game field is 400px and dodger is 40px

  if (left < maxRight) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
