const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'The one standing in infinite glory is you,the one fallen from grace is also you.What matters is you and not the state of you.'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)