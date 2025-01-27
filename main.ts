sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySpritd.setPosition(randint(10, 150), randint(10, 110))
    speed = speed + 1
})
let speed = 0
let mySpritd: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySpritd = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
mySpritd.setPosition(randint(10, 150), randint(10, 110))
