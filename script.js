//your JS code here. If required.
const line = document.getElementById("line");
let angle = 0;
function rotateLine() {
	angle += 2;
	line.style.transform = `rotate(${angle}deg)`;
	
}
setTimeout(rotateLine, 20);
// rotateLine();