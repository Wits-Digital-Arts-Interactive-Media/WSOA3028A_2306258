// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', (event) => {
    // Get the button element by its ID
    const button = document.getElementById('mybutton');

    // Define the function to be executed when the button is clicked
    function buttonClickHandler() {
        alert('Button was clicked!');
        // Add more functionality here as needed
    }

    // Add the onclick event listener to the button
    button.onclick = buttonClickHandler;
});