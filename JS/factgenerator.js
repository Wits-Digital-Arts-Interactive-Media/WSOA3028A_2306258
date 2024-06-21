// this code works to change my text on button click (just a note :) )

// Let's try using an array instead...

 // Array of random facts
 const facts = [
    "I can code in four different languages, C#, HTML, CSS and JavaScript.",
    "I also happen to be familiar with with Unreal engine- making games there.",
    "I like group work but also being a lone wolf.",
    "I am a competitive athlete-but also injury prone :(.",
    "I like designing games and making interactive stories.",
    "I like researching design stuff, like cool colour palettes and fonts and stuff.",
    "I love sleep.",
    "I play alot of video games.",
    "I like doing more design stuff- making things pretty :).",
    "I love getting active- I am low-key comeptitive.",
    "Did i mention i love sleep?",
    "I like learning too!",
    "I like being a curious cat, it's fun",
    "I love love love anime!!",
    "I love puppies!"
  ];
  
  // Function to generate a random fact about me, this is at random no order
  function generateRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
  }
  
  // Function to display a random fact- again at random
  function displayRandomFact() {
    const factText = generateRandomFact();
    document.getElementById('fact-text').textContent = factText;
  }
  
  // Add event listener to the button- JS stuff practicing
  document.getElementById('button').addEventListener('click', displayRandomFact);
  