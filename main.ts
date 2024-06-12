enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Info = SpriteKind.create()
    export const Info2 = SpriteKind.create()
    export const Info3 = SpriteKind.create()
    export const Info4 = SpriteKind.create()
    export const Info5 = SpriteKind.create()
    export const Info6 = SpriteKind.create()
    export const Info7 = SpriteKind.create()
    export const info8 = SpriteKind.create()
    export const Enemy2 = SpriteKind.create()
    export const Enemy3 = SpriteKind.create()
}
function CLEAR_LEVEL () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        sprites.destroy(value)
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy3)) {
        sprites.destroy(value)
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy2)) {
        sprites.destroy(value)
    }
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        sprites.destroy(value)
    }
    for (let value of sprites.allOfKind(SpriteKind.info8)) {
        sprites.destroy(value)
    }
    for (let value of sprites.allOfKind(SpriteKind.Info7)) {
        sprites.destroy(value)
    }
    for (let value of sprites.allOfKind(SpriteKind.Info6)) {
        sprites.destroy(value)
    }
    for (let value of sprites.allOfKind(SpriteKind.Info5)) {
        sprites.destroy(value)
    }
    for (let value of sprites.allOfKind(SpriteKind.Info4)) {
        sprites.destroy(value)
    }
    for (let value of sprites.allOfKind(SpriteKind.Info3)) {
        sprites.destroy(value)
    }
    for (let value of sprites.allOfKind(SpriteKind.Info2)) {
        sprites.destroy(value)
    }
    for (let value of sprites.allOfKind(SpriteKind.Info)) {
        sprites.destroy(value)
    }
    startlevel()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Info2, function (sprite, otherSprite) {
    Ask_name = game.askForString(game.ask("What's your name"))
    sprites.destroyAllSpritesOfKind(SpriteKind.Info2)
    game.splash("An input allows the game to be more interactive and personal for the player")
    info.changeScoreBy(1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 3 3 3 3 3 3 3 3 3 3 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 3 3 3 3 3 3 3 3 3 3 . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 100, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Info3, function (sprite, otherSprite) {
    mySprite.sayText("Hi", 500, false)
    game.showLongText("This is where the \"input\" can be used as an output", DialogLayout.Bottom)
    game.splash("Hi", Ask_name)
    mySprite.sayText("Keep going!", 500, false)
    sprites.destroyAllSpritesOfKind(SpriteKind.Info3)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy3, function (sprite, otherSprite) {
    game.setGameOverEffect(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Info5, function (sprite, otherSprite) {
    mySprite.sayText("Hi", 500, false)
    game.showLongText("Loops mean that we can do the same thing multiple times without writing the code again. Here we will loop 3 times the Jump function", DialogLayout.Bottom)
    mySprite.sayText("Keep going!", 500, false)
    sprites.destroyAllSpritesOfKind(SpriteKind.Info5)
    for (let index = 0; index < 4; index++) {
        Jump(mySprite)
        info.changeScoreBy(1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Info, function (sprite, otherSprite) {
    mySprite.sayText(":)", 2000, false)
    game.splash("@Start the game is set up with a camera, map, tiles, walls and sprites. There is a lot of planning")
    sprites.destroyAllSpritesOfKind(SpriteKind.Info)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Info6, function (sprite, otherSprite) {
    game.showLongText("Logic if it is true do this...  or else do another thing. If you have less than 12 points you need to go back", DialogLayout.Bottom)
    if (info.score() < 12) {
        mySprite.sayText("Go back and collect the info", 2000, false)
        music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.UntilDone)
    } else {
        mySprite.sayText("You are awesome keep going", 2000, false)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        sprites.destroyAllSpritesOfKind(SpriteKind.Info6)
    }
})
function Jump (mySprite: Sprite) {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f f . . . . 
        f f f f f c c c c f f . . . 
        f f f f b c c c c c c f . . 
        f f f c 3 c c c c c c f . . 
        . f 3 3 c c c c c c c c f . 
        . f f f c c c c c 4 c c f . 
        . f f f f c c c 4 4 c f f . 
        . f f 4 4 f b f 4 4 f f f . 
        . f f 4 d 4 1 f d d c f . . 
        . . f f f 4 d d d d f . . . 
        . . 4 d d e 4 4 4 e f . . . 
        . . e d d e 3 3 3 3 f . . . 
        . . f e e f 6 6 6 6 f f . . 
        . . f f f f f f f f f f . . 
        . . . f f . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f f . . . . 
        f f f f f c c c c f f . . . 
        f f f f b c c c c c c f . . 
        f f f c 3 c c c c c c f . . 
        . f 3 3 c c c c c c c c f . 
        . f f f c c c c c 4 c c f . 
        . f f f f c c c 4 4 c f f . 
        . f f 4 4 f b f 4 4 f f f . 
        . . f 4 d 4 1 f d d f f . . 
        . . f f f e e d d d f . . . 
        . . . f 4 d d e 4 e f . . . 
        . . . f e d d e 3 3 f . . . 
        . . f f f e e f 6 6 f f . . 
        . . f f f f f f f f f f . . 
        . . . f f . . . f f f . . . 
        `,img`
        . f f f . f f f f f . . . . 
        f f f f f c c c c f f . . . 
        f f f f b c c c c c c f . . 
        f f f c 3 c c c c c c f . . 
        . f 3 3 c c c c c c c c f . 
        . f f f c c c c c 4 c c f . 
        . f f f f c c c 4 4 e f f . 
        . f f 4 4 f b f 4 4 e f f . 
        . . f 4 d 4 1 f d d f f . . 
        . . f f f 4 d d d d f . . . 
        . . . f e e 4 4 4 e f . . . 
        . . . 4 d d e 3 3 3 f . . . 
        . . . e d d e 3 3 3 f . . . 
        . . . f e e f 6 6 6 f . . . 
        . . . . f f f f f f . . . . 
        . . . . . f f f . . . . . . 
        `],
    500,
    false
    )
    pause(100)
    game.showLongText("right", DialogLayout.Bottom)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f f . f f f . 
        . . . f f c c c c f f f f f 
        . . f c c c c c c b f f f f 
        . . f c c c c c c 3 c f f f 
        . f c c c c c c c c 3 3 f . 
        . f c c 4 c c c c c f f f . 
        . f f e 4 4 c c c f f f f . 
        . f f e 4 4 f b f 4 4 f f . 
        . . f f d d f 1 4 d 4 f . . 
        . . . f d d d d 4 f f f . . 
        . . . f e 4 4 4 e e f . . . 
        . . . f 3 3 3 e d d 4 . . . 
        . . . f 3 3 3 e d d e . . . 
        . . . f 6 6 6 f e e f . . . 
        . . . . f f f f f f . . . . 
        . . . . . . f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . f f f f f . f f f . 
        . . . f f c c c c f f f f f 
        . . f c c c c c c b f f f f 
        . . f c c c c c c 3 c f f f 
        . f c c c c c c c c 3 3 f . 
        . f c c 4 c c c c c f f f . 
        . f f c 4 4 c c c f f f f . 
        . f f f 4 4 f b f 4 4 f f . 
        . . f f d d f 1 4 d 4 f . . 
        . . . f d d d e e f f f . . 
        . . . f e 4 e d d 4 f . . . 
        . . . f 3 3 e d d e f . . . 
        . . f f 6 6 f e e f f f . . 
        . . f f f f f f f f f f . . 
        . . . f f f . . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . f f f f f . f f f . 
        . . . f f c c c c f f f f f 
        . . f c c c c c c b f f f f 
        . . f c c c c c c 3 c f f f 
        . f c c c c c c c c 3 3 f . 
        . f c c 4 c c c c c f f f . 
        . f f c 4 4 c c c f f f f . 
        . f f f 4 4 f b f 4 4 f f . 
        . . f c d d f 1 4 d 4 f f . 
        . . . f d d d d 4 f f f . . 
        . . . f e 4 4 4 e d d 4 . . 
        . . . f 3 3 3 3 e d d e . . 
        . . f f 6 6 6 6 f e e f . . 
        . . f f f f f f f f f f . . 
        . . . f f f . . . f f . . . 
        `],
    500,
    false
    )
    pause(100)
    game.showLongText("left", DialogLayout.Bottom)
    animation.runImageAnimation(
    mySprite,
    [img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d d f f . . 
        . . e f e 4 4 4 4 e f e . . 
        . e 4 f b 3 3 3 3 b f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d 4 e f e . 
        . f e f f b b b e d d 4 e . 
        . e 4 f b 3 3 3 e d d e . . 
        . . . f 6 6 6 6 f e e . . . 
        . . . f f f f f f f . . . . 
        . . . f f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . e f e 4 d d d d d f f . . 
        . e 4 d d e b b b f f e f . 
        . . e d d e 3 3 b e f 4 e . 
        . . . e e f 6 6 6 6 f . . . 
        . . . . f f f f f f f . . . 
        . . . . . . . . f f f . . . 
        `],
    1000,
    false
    )
    pause(100)
    game.showLongText("Forwards", DialogLayout.Bottom)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    CLEAR_LEVEL()
    level += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.info8, function (sprite, otherSprite) {
    mySprite.sayText("You found an \"easter egg\"", 500, false)
    music.play(music.createSong(hex`0078000408020106001c00010a006400f40164000004000000000000000000000000000000000226000400080002252a0c001000012014001800021d201c002000012a20002400012724002800011d`), music.PlaybackMode.UntilDone)
    game.showLongText("Awesome job", DialogLayout.Bottom)
    game.splash("Keep going", Ask_name)
    sprites.destroyAllSpritesOfKind(SpriteKind.info8, effects.disintegrate, 500)
    info.changeScoreBy(10)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Info4, function (sprite, otherSprite) {
    mySprite.sayText("Functions are shorthand for a mini program", 2000, false)
    mySprite.sayText("Jump is a function: 1 Look right, 2 Look left, 3 Look forward", 2000, false)
    mySprite.sayText("See if you can follow along IRL", 2000, false)
    sprites.destroyAllSpritesOfKind(SpriteKind.Info4)
    game.splash("Jump")
    Jump(mySprite)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    pause(500)
})
function enemy (mySprite: Sprite) {
    myEnemy = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . b b d d d 5 5 5 5 5 5 5 b . . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        c b 5 5 b c d d 5 5 5 5 5 5 b . 
        b b c c c d d d 5 5 5 5 5 d b . 
        . . . . c c d d d 5 5 5 b b . . 
        . . . . . . c c c c c b b . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(myEnemy, sprites.builtin.coral0)
    speed = 20
    myEnemy.follow(mySprite, speed)
}
function startlevel () {
    mySprite = sprites.create(img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d d f f . . 
        . . e f e 4 4 4 4 e f e . . 
        . e 4 f b 3 3 3 3 b f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `, SpriteKind.Player)
    anim = animation.createAnimation(ActionKind.Walking, 200)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d 4 e f e . 
        . f e f f b b b e d d 4 e . 
        . e 4 f b 3 3 3 e d d e . . 
        . . . f 6 6 6 6 f e e . . . 
        . . . f f f f f f f . . . . 
        . . . f f f . . . . . . . . 
        `)
    anim.addAnimationFrame(img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d d f f . . 
        . . e f e 4 4 4 4 e f e . . 
        . e 4 f b 3 3 3 3 b f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . e f e 4 d d d d d f f . . 
        . e 4 d d e b b b f f e f . 
        . . e d d e 3 3 b e f 4 e . 
        . . . e e f 6 6 6 6 f . . . 
        . . . . f f f f f f f . . . 
        . . . . . . . . f f f . . . 
        `)
    anim.addAnimationFrame(img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d d f f . . 
        . . e f e 4 4 4 4 e f e . . 
        . e 4 f b 3 3 3 3 b f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `)
    animation.attachAnimation(mySprite, anim)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleRedCrystal)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level5`)
    } else if (level == 2) {
        tiles.setCurrentTilemap(tilemap`level5`)
        enemy(mySprite)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    game.setGameOverEffect(true, effects.confetti)
    game.setGameOverScoringType(game.ScoringType.HighScore)
    game.splash("Crongratulations on scoring", info.score())
    game.splash("Can you get a higher score,", Ask_name)
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Info7, function (sprite, otherSprite) {
    mySprite.sayText("I am a sprite kind Player", 2000, false)
    pause(500)
    mySprite.sayText("When I overlap with other sprites I can destroy them or they can destroy me. ", 5000, false)
    pause(3000)
    mySprite.sayText("They can be food and give me extra lives or scores", 5000, false)
    pause(3000)
    mySprite.sayText("I can use a projectile to shoot them or they can use projectiles on me", 5000, false)
    pause(3000)
    mySprite.sayText("Watch out for the ducks. Press Button B to shoot", 5000, false)
    pause(2000)
    sprites.destroyAllSpritesOfKind(SpriteKind.Info7)
    enemy(mySprite)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(5)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.confetti, 500)
    myEnemy = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . b b d d d 5 5 5 5 5 5 5 b . . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        c b 5 5 b c d d 5 5 5 5 5 5 b . 
        b b c c c d d d 5 5 5 5 5 d b . 
        . . . . c c d d d 5 5 5 b b . . 
        . . . . . . c c c c c b b . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(myEnemy, sprites.builtin.coral0)
    myEnemy.follow(mySprite, speed + 20)
})
let anim: animation.Animation = null
let speed = 0
let myEnemy: Sprite = null
let projectile: Sprite = null
let Ask_name = ""
let mySprite: Sprite = null
let level = 0
level = 1
info.setScore(0)
game.showLongText("PROGRAM BASICS by STEM  Go to the Blue tiles to gather information and score points. Who will have the highest score and learn the most?", DialogLayout.Full)
startlevel()
let mySprite2 = sprites.create(img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 3 3 3 3 3 3 3 3 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 3 3 3 3 3 3 3 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 3 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 3 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 3 8 8 8 8 
    8 8 8 3 3 3 3 3 3 3 3 3 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    `, SpriteKind.Info)
tiles.placeOnRandomTile(mySprite2, assets.tile`myTile13`)
let mySprite3 = sprites.create(img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 3 3 3 3 3 3 3 3 8 8 8 
    8 8 8 8 8 8 8 8 3 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 3 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 3 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 3 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 3 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 3 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 3 8 8 8 8 8 8 8 
    8 8 8 3 3 3 3 3 3 3 3 3 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    `, SpriteKind.Info2)
tiles.placeOnRandomTile(mySprite3, assets.tile`myTile14`)
let MySprite4 = sprites.create(img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 3 3 3 3 3 3 3 3 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 3 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 3 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 3 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 3 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 3 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 3 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 3 8 8 8 
    8 8 8 8 3 3 3 3 3 3 3 3 3 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    `, SpriteKind.Info3)
tiles.placeOnRandomTile(MySprite4, assets.tile`myTile15`)
let MySprite5 = sprites.create(img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 3 3 3 3 3 3 3 3 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 3 3 3 3 8 8 8 8 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    `, SpriteKind.Info4)
tiles.placeOnRandomTile(MySprite5, assets.tile`myTile16`)
let MySprite6 = sprites.create(img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 3 3 3 3 3 3 3 3 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    `, SpriteKind.Info5)
tiles.placeOnRandomTile(MySprite6, assets.tile`myTile17`)
let MySprite7 = sprites.create(img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 3 3 3 3 3 3 3 8 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 3 3 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 3 8 8 8 
    8 8 8 8 3 3 3 3 3 3 3 3 3 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 3 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 3 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    `, SpriteKind.Info6)
tiles.placeOnRandomTile(MySprite7, assets.tile`myTile18`)
let MySprite8 = sprites.create(img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 3 3 3 3 3 3 3 8 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 3 8 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 3 8 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 3 8 8 8 8 
    8 8 8 8 3 3 3 3 3 3 3 3 8 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 3 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    `, SpriteKind.Info7)
tiles.placeOnRandomTile(MySprite8, assets.tile`myTile19`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 2))
let mySprite9 = sprites.create(img`
    ...........ccccc66666...........
    ........ccc4444444444666........
    ......cc444444444bb4444466......
    .....cb4444bb4444b5b444444b.....
    ....eb4444b5b44444b44444444b....
    ...ebb44444b4444444444b444446...
    ..eb6bb444444444bb444b5b444446..
    ..e6bb5b44444444b5b444b44bb44e..
    .e66b4b4444444444b4444444b5b44e.
    .e6bb444444444444444444444bb44e.
    eb66b44444bb444444444444444444be
    eb66bb444b5b44444444bb44444444be
    fb666b444bb444444444b5b4444444bf
    fcb666b44444444444444bb444444bcf
    .fbb6666b44444444444444444444bf.
    .efbb66666bb4444444444444444bfe.
    .86fcbb66666bbb44444444444bcc688
    8772effcbbbbbbbbbbbbbbbbcfc22778
    87722222cccccccccccccccc22226678
    f866622222222222222222222276686f
    fef866677766667777776667777fffef
    fbff877768f86777777666776fffffbf
    fbeffeefffeff7766688effeeeefeb6f
    f6bfffeffeeeeeeeeeeeeefeeeeebb6e
    f66ddfffffeeeffeffeeeeeffeedb46e
    .c66ddd4effffffeeeeeffff4ddb46e.
    .fc6b4dddddddddddddddddddb444ee.
    ..ff6bb444444444444444444444ee..
    ....ffbbbb4444444444444444ee....
    ......ffebbbbbb44444444eee......
    .........fffffffcccccee.........
    ................................
    `, SpriteKind.info8)
scaling.scaleByPercent(mySprite9, -50, ScaleDirection.Uniformly, ScaleAnchor.Left)
tiles.placeOnRandomTile(mySprite9, sprites.builtin.forestTiles0)
game.onUpdate(function () {
    animation.setAction(mySprite, ActionKind.Walking)
})
