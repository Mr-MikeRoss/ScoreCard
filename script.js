let homeCount = document.getElementById("home-count")
let guestCount = document.getElementById("guest-count")

let homeScore = 0
let guestScore = 0

function add1HomePoint() {
    homeScore += 1
    homeCount.textContent = homeScore
}

function add2HomePoints() {
    homeScore += 2
    homeCount.textContent = homeScore
}

function add3HomePoints() {
    homeScore += 3
    homeCount.textContent = homeScore
}

function add1GuestPoint() {
    guestScore += 1
    guestCount.textContent = guestScore
}

function add2GuestPoints() {
    guestScore += 2
    guestCount.textContent = guestScore
}

function add3GuestPoints() {
    guestScore += 3
    guestCount.textContent = guestScore
}

function resetButton() {
    homeScore = 0
    guestScore = 0
    homeCount.textContent = homeScore
    guestCount.textContent = guestScore
}