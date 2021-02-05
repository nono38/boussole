let angle = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.compassHeading())
})
input.onButtonPressed(Button.B, function () {
    angle = input.compassHeading()
    if (angle >= 338 || angle <= 22) {
        basic.showString("N")
        basic.pause(100)
    } else {
        if (angle >= 158 && angle <= 202) {
            basic.showString("S")
            basic.pause(100)
        } else {
            if (angle >= 22 && angle <= 67) {
                basic.showString("NE")
                basic.pause(100)
            } else {
                if (angle >= 68 && angle <= 112) {
                    basic.showString("E")
                    basic.pause(100)
                } else {
                    if (angle >= 113 && angle <= 157) {
                        basic.showString("SE")
                        basic.pause(100)
                    } else {
                        if (angle >= 203 && angle <= 247) {
                            basic.showString("SO")
                            basic.pause(100)
                        } else {
                            if (angle >= 248 && angle <= 292) {
                                basic.showString("O")
                                basic.pause(100)
                            } else {
                                if (angle >= 293 && angle <= 337) {
                                    basic.showString("NO")
                                    basic.pause(100)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    basic.clearScreen()
})
