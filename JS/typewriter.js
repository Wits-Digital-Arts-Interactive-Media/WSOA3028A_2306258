const aText = [
  "There are only 10 types of people in the world:", 
  "Those who understand binary, and those who don't"
];
const iSpeed = 100; // Time delay for printing each character
const iScrollAt = 20; // Start scrolling up at this many lines

let iIndex = 0; // Start printing array at this position
let iTextPos = 0; // Initialize text position
let sContents = ''; // Initialize contents variable

function typewriter() {
  const destination = document.getElementById("typedtext");
  sContents = '';

  // Determine the current row to print from
  const iRow = Math.max(0, iIndex - iScrollAt);

  // Build the text up to the current index
  for (let i = iRow; i < iIndex; i++) {
      sContents += aText[i] + '<br />';
  }

  // Add the current character to the content
  destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";

  // Move to the next character
  iTextPos++;

  // Check if the entire line is printed
  if (iTextPos === aText[iIndex].length) {
      iTextPos = 0;
      iIndex++;
      // Check if we have more lines to print
      if (iIndex < aText.length) {
          setTimeout(typewriter, 500); // Add delay before starting the next line
      }
  } else {
      setTimeout(typewriter, iSpeed); // Continue typing the current line
  }
}

// Start the typewriter effect
typewriter();