
// this code works to change my text on button click (just a note :) )

function changeText() {
    x = document.getElementById("myDIV");
   if (x.innerHTML === "I like Puppies") {
     x.innerHTML = "Swapped text!";

   } else if (x.innerHTML === "Swapped Text!") {
     x.innerHTML = "Girl";

    } else if (x.innerHTML === "Girl") {
        x.innerHTML = "Me";

    } else if (x.innerHTML === "Me") {
        x.innerHTML = "Him";

    } else if (x.innerHTML === "Him") {
        x.innerHTML = "Us";

    } else if (x.innerHTML === "Us") {
        x.innerHTML = "blah";

    } else {
     x.innerHTML= "Hiii"
   }
 }