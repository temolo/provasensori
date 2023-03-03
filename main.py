prossimita = 0
valore = 0
serial.redirect_to_usb()

def on_forever():
    global valore, prossimita
    valore = pins.digital_read_pin(DigitalPin.P0)
    prossimita = pins.digital_read_pin(DigitalPin.P1)
    serial.write_value("x", valore)
basic.forever(on_forever)
