function generateRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    var background = document.getElementById("background");
    background.style.backgroundColor = generateRandomColor();
}

setInterval(changeBackgroundColor, 1000); 