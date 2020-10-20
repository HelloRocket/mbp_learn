input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showString("H")
})
basic.showString("Hello World!", 20)
basic.showIcon(IconNames.Heart)
basic.showNumber(0)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
