function Aller_retour (x: number) {
    while (liste[x] < 4) {
        led.unplot(x, liste[x])
        liste[x] = liste[x] + 1
        led.plot(x, liste[x])
        basic.pause(100)
    }
    while (liste[x] > 0) {
        led.unplot(x, liste[x])
        liste[x] = liste[x] - 1
        led.plot(x, liste[x])
        basic.pause(100)
    }
}
let liste: number[] = []
let y = 0
liste = [0, 1, 2, 3, 4]
led.plot(0, 0)
basic.forever(function () {
    Aller_retour(0)
})
basic.forever(function () {
    Aller_retour(1)
})
basic.forever(function () {
    Aller_retour(2)
})
basic.forever(function () {
    Aller_retour(3)
})
basic.forever(function () {
    Aller_retour(4)
})
