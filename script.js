const body = document.body
body.classList.add("pos")
body.style.backgroundImage = "url(/image/" + Math.floor(Math.random() * Math.floor(8)) + ".jpg)"
const time = document.querySelector(".time")


function screen() {
    const dateOffset = calcTime()
    let d = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
    ]

    let playDay;
    for (let i = 0; i < days.length; i++) {
        if (d.getDay() === i) {
            playDay = days[i]
        }
    }
    let playMonth;
    let month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
    for (let i = 0; i < month.length; i++) {
        if (dateOffset.getMonth() === i) {
            playMonth = month[i]
        }
    }

    time.innerHTML = playDay + "<br>" + dateOffset.getDate() + "<br>" + playMonth
}

function calcTime() {
    d = new Date();
    utc = d.getTime() + (d.getTimezoneOffset() * 60 * 1000);
    nd = new Date(utc + (3600 * 1000 * 1));
    return nd;
}
screen()
let date, hr, min, sec

function refreshClock() {
    date = new Date()
    hr = date.getHours()
    min = date.getMinutes()
    sec = date.getSeconds()

    document.querySelector(".hr").style.transform = `translate(-50%, -100%) rotate(${hr *360/12}deg)`
    document.querySelector(".min").style.transform = `translate(-50%, -100%) rotate(${min *360/60}deg)`
    document.querySelector(".sec").style.transform = `translate(-50%, -100%) rotate(${sec *360/60}deg)`
    const timerNum = document.querySelector(".digitalTimer")
    if (sec < 10) {
        sec = "0" + sec
    }
    if (min < 10) {
        min = "0" + min
    }
    if (hr < 10) {
        hr = "0" + hr
    }
    timerNum.innerHTML = hr + ":" + min + ":" + sec
    body.appendChild(timerNum)
}
window.setInterval(refreshClock, 1000)

const deroul = document.querySelector(".deroul")
const button = document.querySelector(".fa-bars")

var query = window.matchMedia("(max-width: 700px)")

function myFunction(query) {
    if (query.matches) { // If media query matches
        console.log("ok-");
    } else {
        const horlogeBtn = document.querySelector(".fa-clock")
        const hungryBtn = document.querySelector(".fa-angry")
        const happyBtn = document.querySelector(".fa-couch")
        const perso = document.querySelector("body > div.center > div.deroul > a:nth-child(7) > i")

        function changebtn(IMAGE, TEXT, variable, background) {
            deroul.style.backgroundImage = IMAGE
            variable.innerHTML = TEXT
            variable.style.background = background
        }
        horlogeBtn.addEventListener("mouseover", function () {
            changebtn("url(image/Capture.PNG)", "Tuto Horloge JS", horlogeBtn, "black")
        })

        hungryBtn.addEventListener("mouseover", function () {
            changebtn("url(image/Capture1.PNG)", "Slipknot", hungryBtn, "black")
        })

        happyBtn.addEventListener("mouseover", function () {
            changebtn("url(image/Capture2.PNG)", "Vacances ?", happyBtn, "black")
        })
        perso.addEventListener("mouseover", function () {
            changebtn("url(image/Capture3.PNG)", "GitPage", perso, "black")
        })
        deroul.addEventListener("mouseout", function () {
            changebtn("", "", horlogeBtn, "")
            changebtn("", "", hungryBtn, "")
            changebtn("", "", happyBtn, "")
            changebtn("", "", perso, "")
        })
    }
}
myFunction(query)
let bolButton = true;

button.addEventListener("click", function () {
    if (bolButton === true) {
        deroul.style.opacity = "100%";
        deroul.style.width = "20%"
        bolButton = false
    } else if (bolButton === false) {
        deroul.style.opacity = "0%";
        deroul.style.width = "0px"
        bolButton = true
    }
})

// const fetcha = fetch(`http://api.mediastack.com/v1/news
// ? access_key = a3139444da75df2c2bed510a12089b2a`)