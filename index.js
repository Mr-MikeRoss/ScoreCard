let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

function homePoint1() {
    homeScore += 1
    homeScoreEl.textContent = homeScore 
}

function homePoint2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore 
}

function homePoint3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore 
}

function guestPoint1() {
    guestScore += 1
    guestScoreEl.textContent = guestScore 
}

function guestPoint2() {
    guestScore += 2
    guestScoreEl.textContent = guestScore 
}

function guestPoint3() {
    guestScore += 3
    guestScoreEl.textContent = guestScore 
}

function restButton() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore  
}
