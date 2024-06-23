// Array of strings to display
const texts = [
  "Hello, welcome to the typewriter effect!",
  "This is a simple demonstration.",
  "You can customize this further as needed."
];

// Index of the current text being displayed
let textIndex = 0;
// Index of the character within the current text
let charIndex = 0;

// Function to display text with typewriter effect
function typeWriter(texts, elementId, typingSpeed = 100, pauseDuration = 1000, loop = true) {
  const element = document.getElementById(elementId);

  function type() {
    if (textIndex < texts.length) {
      const currentText = texts[textIndex];
      // Display one character at a time
      element.textContent = currentText.slice(0, charIndex + 1);
      charIndex++;

      // Check if all characters have been displayed for this text
      if (charIndex <= currentText.length) {
        // Schedule the next character to be shown after a delay
        setTimeout(type, typingSpeed);
      } else {
        // Move to the next text in the array
        textIndex++;
        charIndex = 0;
        if (textIndex < texts.length) {
          // Wait before starting to type the next text
          setTimeout(type, pauseDuration);
        } else if (loop) {
          // Reset to the first text if looping is enabled
          textIndex = 0;
          setTimeout(type, pauseDuration);
        }
      }
    }
  }

  type();
}

// Usage
document.addEventListener('DOMContentLoaded', () => {
  typeWriter(texts, 'typewriter-text', 100, 1000, true);
});