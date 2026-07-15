controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    s.x -= 1
    pause(500)
    s.sayText(aFunctionInsideOtherFileTSThatAUserCreatedToTestMakecodesCompiler())
    if (true) {
        s.x += 1
        s.x -= 1
        s.x += 1
        s.x -= 1
    }
})

let s = sprites.create(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `)

if (controller.right.isPressed()) s.x += 1
if (controller.up.isPressed()) s.y -= 1
if (controller.down.isPressed()) s.y += 1

game.onUpdate(function () {
    // if (controller.left.isPressed()) s.x -= 1
    if (controller.right.isPressed()) s.x += 1
    if (controller.up.isPressed()) s.y -= 1
    if (controller.down.isPressed()) s.y += 1
    
})
game.onUpdate(function () {
    pause(10)
})