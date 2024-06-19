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
  function typeWriter() {
    if (textIndex < texts.length) {
      // Get the current text
      const currentText = texts[textIndex];
      // Display one character at a time
      document.getElementById('typewriter-text').textContent = currentText.slice(0, charIndex + 1);
      charIndex++;

      // Check if all characters have been displayed for this text
      if (charIndex <= currentText.length) {
        // Schedule the next character to be shown after a delay
        setTimeout(typeWriter, 100); // Adjust speed here (in milliseconds)
      } else {
        // Move to the next text in the array
        textIndex++;
        charIndex = 0;
        // Wait before starting to type the next text
        setTimeout(typeWriter, 1000); // Adjust delay before next text (in milliseconds)
      }
    }
  }

  // Start the typewriter effect
  typeWriter();