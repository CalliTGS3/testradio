radio.setGroup(1)
let zahl = 0
basic.forever(function () {
    radio.sendNumber(0)
    zahl += 1
    basic.pause(1000)
})
