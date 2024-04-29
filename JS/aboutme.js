
// this code works to change my text on button click (just a note :) )

// Let's try using an array instead...

 // Array of random facts
 const facts = [
  "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
  "The Great Wall of China is not visible from space without aid.",
  "Bananas are berries, but strawberries aren't.",
  "The national animal of Scotland is the unicorn.",
  "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion of the metal.",
  "The average person spends 6 months of their lifetime waiting on a red light to turn green.",
  "A group of flamingos is called a flamboyance.",
  "The oldest known living land animal is Jonathan, a Seychelles giant tortoise that is at least 188 years old.",
  "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible."
];

// Function to generate a random fact
function generateRandomFact() {
  var randomIndex = Math.floor(Math.random() * facts.length);
  return facts[randomIndex];
}

// Function to display a random fact
function displayRandomFact() {
  var factText = generateRandomFact();
  document.getElementById('fact-text').textContent = factText;
}

// Add event listener to the button
document.getElementById('generate-btn').addEventListener('click', displayRandomFact);


  // the code below still needs work: it would really register my conditions and i couldnt fix it

// function changeText() {
//     x = document.getElementById("myDIV");
//    if (x.innerHTML === "I like Puppies") {
//      x.innerHTML = "Swapped text!";

//    } else if (x.innerHTML === "Swapped Text!") {
//      x.innerHTML = "Girl";

//     } else if (x.innerHTML === "Girl") {
//         x.innerHTML = "Me";

//     } else if (x.innerHTML === "Me") {
//         x.innerHTML = "Him";

//     } else if (x.innerHTML === "Him") {
//         x.innerHTML = "Us";

//     } else if (x.innerHTML === "Us") {
//         x.innerHTML = "blah";

//     } else {
//      x.innerHTML= "Hiii"
//    }
//  }