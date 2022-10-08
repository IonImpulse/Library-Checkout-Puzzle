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

function setScreen(screen) {
    let els = document.getElementsByClassName("screen");

    for (let i = 0; i < els.length; i++) {
        els[i].classList.add("hidden");
    }

    document.getElementById(`${screen}-screen`).classList.remove("hidden");
}