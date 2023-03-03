input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(conteggioInfrarosso)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    conteggioInfrarosso = 0
})
let infrarosso = 0
let prossimita = 0
let valore = 0
let conteggioInfrarosso = 0
conteggioInfrarosso = 0
let statoPrecedenteInfrarosso = 1
let statoInfrarosso = 1
serial.redirectToUSB()
basic.forever(function () {
    valore = pins.digitalReadPin(DigitalPin.P0)
    prossimita = pins.digitalReadPin(DigitalPin.P1)
    infrarosso = pins.digitalReadPin(DigitalPin.P2)
    serial.writeValue("x", valore)
    serial.writeValue("y", prossimita)
    serial.writeValue("z", statoInfrarosso)
    if (statoInfrarosso == 0 && statoPrecedenteInfrarosso == 1) {
        conteggioInfrarosso += 1
        statoPrecedenteInfrarosso = 0
    }
    if (statoInfrarosso == 1 && statoPrecedenteInfrarosso == 0) {
        statoPrecedenteInfrarosso = 1
    }
})
