const LIBERAL_NUMBER = "12456789";

const riddle_key = {
    "Harry Potter": "High school dropouts save the world, but can't pronounce the villian's name.",
    "The Lord of the Rings": "A hobbit, a wizard, and a dwarf walk into a bar.",
    "Dune": "A desert planet with a spice that makes you see visions.",
    "The Hitchhiker's Guide to the Galaxy": "A towel is the most important thing in the universe.",
    "The Martian": "Guy really struggles to grow potatoes. Then his buddies come to pick him up.",
    "The Princess Bride": "A grandfather tells a story to his grandson.",
    "The Hunger Games": "A dystopian society where kids kill each other.",
    "Percy Jackson": "Harry Potter... but...",
}

const name_barcode_key = {
    "Harry Potter": "9780439358071",
    "The Lord of the Rings": "9780618260300",
    "Dune": "9780441172719",
    "The Hitchhiker's Guide to the Galaxy": "9780345391803",
    "The Martian": "9780553418026",
    "The Princess Bride": "9780062073486",
    "The Hunger Games": "9780439023528",
    "Percy Jackson": "9781423140623",
}

var riddles = [];
var current_riddle = 0;

function setScreen(screen) {
    let els = document.getElementsByClassName("screen");

    for (let i = 0; i < els.length; i++) {
        els[i].classList.add("hidden");
    }
    
    document.getElementById(`${screen}-screen`).classList.remove("hidden");

    if (screen == "checkout") {
        startCheckout();
    }
}


function startCheckout() {
    const el = document.getElementById("checkout-list");

    el.innerHTML = "";

    riddles = Object.values(riddle_key);
    current_riddle = 0;
    // Shuffle the riddles
    for (let i = riddles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [riddles[i], riddles[j]] = [riddles[j], riddles[i]];
    }

    for (let i = 0; i < riddles.length; i++) {
        let li = document.createElement("li");
        li.classList.add("checkout-item");
        // pick from riddle_key randomly
        li.innerHTML = "Book Description: " + riddles[i];
        el.appendChild(li);
    }

    document.getElementById("barcode-input").focus();
}

function checkout() {
    let riddle = document.getElementById("checkout-list").children[current_riddle].innerHTML.split(": ")[1];
    let barcode = document.getElementById("barcode-input").value;

    if (barcode == name_barcode_key[Object.keys(riddle_key).find(key => riddle_key[key] === riddle)]) {
        current_riddle++;
        if (current_riddle == riddles.length) {
            setScreen("end");
        } else {
            document.getElementById("barcode-input").value = "";
            document.getElementById("checkout-list").children[current_riddle - 1].classList.add("checked-out");
        }
    } else {
        document.getElementById("barcode-input").value = "";
        document.getElementById("barcode-input").focus();
        document.getElementById("barcode-input").classList.add("error");
        startCheckout();
        setTimeout(function() {
            document.getElementById("barcode-input").classList.remove("error");
        }, 1000);
    }

}

document.addEventListener("keydown", function(event) {
    if (event.key == "Tab") {
        event.preventDefault();
        checkout();
    }
});