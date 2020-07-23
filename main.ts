let y = 0
let liste = [0, 1, 2, 3, 4]
led.plot(0, 0)
basic.forever(function () {
    while (liste[1] < 4) {
        led.unplot(1, liste[1])
        liste[1] = liste[1] + 1
        led.plot(1, liste[1])
        basic.pause(200)
    }
    while (liste[1] > 0) {
        led.unplot(1, liste[1])
        liste[1] = liste[1] - 1
        led.plot(1, liste[1])
        basic.pause(200)
    }
})
basic.forever(function () {
    while (liste[0] < 4) {
        led.unplot(0, liste[0])
        liste[0] = liste[0] + 1
        led.plot(0, liste[0])
        basic.pause(200)
    }
    while (liste[0] > 0) {
        led.unplot(0, liste[0])
        liste[0] = liste[0] - 1
        led.plot(0, liste[0])
        basic.pause(200)
    }
})
basic.forever(function () {
    while (liste[3] < 4) {
        led.unplot(3, liste[3])
        liste[3] = liste[3] + 1
        led.plot(3, liste[3])
        basic.pause(200)
    }
    while (liste[3] > 0) {
        led.unplot(3, liste[3])
        liste[3] = liste[3] - 1
        led.plot(3, liste[3])
        basic.pause(200)
    }
})
basic.forever(function () {
    while (liste[4] < 4) {
        led.unplot(4, liste[4])
        liste[4] = liste[4] + 1
        led.plot(4, liste[4])
        basic.pause(200)
    }
    while (liste[4] > 0) {
        led.unplot(4, liste[4])
        liste[4] = liste[4] - 1
        led.plot(4, liste[4])
        basic.pause(200)
    }
})
basic.forever(function () {
    while (liste[2] < 4) {
        led.unplot(2, liste[2])
        liste[2] = liste[2] + 1
        led.plot(2, liste[2])
        basic.pause(200)
    }
    while (liste[2] > 0) {
        led.unplot(2, liste[2])
        liste[2] = liste[2] - 1
        led.plot(2, liste[2])
        basic.pause(200)
    }
})
