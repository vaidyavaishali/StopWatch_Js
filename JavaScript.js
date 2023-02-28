const watch = document.getElementById("watch")
const start = document.getElementById("start")
const pause = document.getElementById("pause")
const reset = document.getElementById("reset")
const cast = document.getElementById("cast")
let mlsec = 0
let hour = 0;
let second = 0
let min = 0
let interval = null
start.addEventListener("click", start_timer)
pause.addEventListener("click", pause_timer)
reset.addEventListener("click", Stop_timer)
function Timer_Watch() {
    mlsec++
    if (mlsec === 1000) {
        mlsec = `${000}`
        second++
        if (second === 60) {
            second = `${00}`
            min++
            if (min === 60) {
                min = `${00}`
                hour++
            }
        }
    }
    watch.innerHTML = `${hour} : ${min} : ${second} : ${mlsec}`
}

function start_timer() {
    if (interval) {
        return
    }
    interval = setInterval(Timer_Watch, 1)
}
function pause_timer() {
    clearInterval(interval)
    interval = null
    if (pause.innerText == "Pause") {
        pause.innerText = "Conti"
        // console.log(pause.innerText)
    } else {
        pause.innerText = "Pause"
        start_timer()
    }
}
function Stop_timer() {
    pause_timer();
    mlsec = 0
    second = 0
    min = 0
    watch.innerHTML = `00 : 00 : 00 : 000`
}
