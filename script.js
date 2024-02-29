const line = document.getElementById('line');

  // Initialize angle
  let angle = 0;

  // Function to update rotation
  function rotateLine() {
    angle += 2; // Increase angle by 2 degrees
    line.style.transform = `translate(0%, 50%) rotate(${angle}deg)`;
    requestAnimationFrame(rotateLine);
  }

  // Start rotating the line
  rotateLine();