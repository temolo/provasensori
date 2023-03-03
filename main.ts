input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(conteggioInfrarosso)
})
let infrarosso = 0
let prossimita = 0
let valore = 0
let conteggioInfrarosso = 0
serial.redirectToUSB()
basic.forever(function () {
    valore = pins.digitalReadPin(DigitalPin.P0)
    prossimita = pins.digitalReadPin(DigitalPin.P1)
    infrarosso = pins.digitalReadPin(DigitalPin.P2)
    serial.writeValue("x", valore)
    serial.writeValue("y", prossimita)
    serial.writeValue("z", infrarosso)
    basic.showNumber(infrarosso)
    if (infrarosso == 0) {
        conteggioInfrarosso += 1
    }
})
