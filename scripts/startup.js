
setInterval(function() {
    document.getElementById("blink-color").style = "color: " + (document.getElementById("blink-color").style.color == "red" ? "black" : "red");
}, 1000);