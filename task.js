let a = document.querySelectorAll("button")
let b = a.forEach((value) => {
    value.addEventListener("click", function () {
        // console.log(this.innerHTML);
        makesound(this.innerHTML)
    })
})

document.addEventListener("keypress", function (e) {
    // console.log(e.key);
    makesound(e.key)
})

function makesound(key) {
    switch (key) {
        case "w":
            var sound1 = new Audio("sounds/accordion.mp3")
            sound1.play()
            break;

        case "a":
            var sound2 = new Audio("sounds/drum.mp3")
            sound2.play()
            break;

        case "s":
            var sound3 = new Audio("sounds/guitar.mp3")
            sound3.play()
            break;

        case "d":
            var sound4 = new Audio("sounds/horn.mp3")
            sound4.play()
            break;

        case "j":
            var sound5 = new Audio("sounds/saxophone.mp3")
            sound5.play()
            break;

        case "k":
            var sound6 = new Audio("sounds/trumpet.mp3")
            sound6.play()
            break;

        case "l":
            var sound7 = new Audio("sounds/tuba.mp3")
            sound7.play()
            break;

        default:
            break;
    }
}