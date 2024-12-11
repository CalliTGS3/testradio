let zahl = 0
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(0)
    zahl += 1
    basic.pause(1000)
})
