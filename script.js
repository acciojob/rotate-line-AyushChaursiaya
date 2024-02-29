//your JS code here. If required.
const line = document.getElementById('line');
let angle = 0;

function rotateLine(timestamp) {
  angle += 0.2; // Adjust speed here
  line.style.transform = `rotate(${angle}deg)`;
  requestAnimationFrame(rotateLine);
}

requestAnimationFrame(rotateLine);
