y = 0
liste = [0, 1, 2, 3, 4]
led.plot(0, 0)

def on_forever():
    while liste[1] < 4:
        led.unplot(1, liste[1])
        liste[1] = liste[1] + 1
        led.plot(1, liste[1])
        basic.pause(500)
    while liste[1] > 0:
        led.unplot(1, liste[1])
        liste[1] = liste[1] - 1
        led.plot(1, liste[1])
        basic.pause(500)
basic.forever(on_forever)

def on_forever2():
    while liste[0] < 4:
        led.unplot(0, liste[0])
        liste[0] = liste[0] + 1
        led.plot(0, liste[0])
        basic.pause(500)
    while liste[0] > 0:
        led.unplot(0, liste[0])
        liste[0] = liste[0] - 1
        led.plot(0, liste[0])
        basic.pause(500)
basic.forever(on_forever2)

def on_forever3():
    while liste[2] < 4:
        led.unplot(2, liste[2])
        liste[2] = liste[2] + 1
        led.plot(2, liste[2])
        basic.pause(500)
    while liste[2] > 0:
        led.unplot(2, liste[2])
        liste[2] = liste[2] - 1
        led.plot(2, liste[2])
        basic.pause(500)
basic.forever(on_forever3)

def on_forever4():
    while liste[3] < 4:
        led.unplot(3, liste[3])
        liste[3] = liste[3] + 1
        led.plot(3, liste[3])
        basic.pause(500)
    while liste[3] > 0:
        led.unplot(3, liste[3])
        liste[3] = liste[3] - 1
        led.plot(3, liste[3])
        basic.pause(500)
basic.forever(on_forever4)

def on_forever5():
    while liste[4] < 4:
        led.unplot(4, liste[4])
        liste[4] = liste[4] + 1
        led.plot(4, liste[4])
        basic.pause(500)
    while liste[4] > 0:
        led.unplot(4, liste[4])
        liste[4] = liste[4] - 1
        led.plot(4, liste[4])
        basic.pause(500)
basic.forever(on_forever5)
