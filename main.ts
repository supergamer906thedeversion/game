sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySpritd.setPosition(randint(10, 150), randint(10, 110))
    speed += 20
    controller.moveSprite(mySprite, 50 + speed, 50 + speed)
    info.changeScoreBy(1)
    info.startCountdown(5)
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 5000, 2147, 77, 191, 590, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
})
let mySpritd: Sprite = null
let mySprite: Sprite = null
let speed = 0
game.splash("post your high scores on https://discord.gg/meWXmgPMu5")
speed = 0
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 7 f 7 7 f 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 7 f 7 7 f 7 . . . . . 
    . . . . . 7 7 f f 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
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
controller.moveSprite(mySprite, 50 + speed, 50 + speed)
mySpritd.setPosition(randint(10, 150), randint(10, 110))
mySprite.setStayInScreen(true)
