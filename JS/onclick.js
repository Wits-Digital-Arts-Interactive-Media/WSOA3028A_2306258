//just some placeholder JS code for my portfolio page

function changeImage() {
    if (document.getElementById("imgClickAndChange").src == "/IMGS/sadbmo.jpg"){
        document.getElementById("imgClickAndChange").src = "";
    } else {
        document.getElementById("imgClickAndChange").src = "/IMGS/happybmo.gif";
    }
}