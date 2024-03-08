namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const potion = SpriteKind.create()
    export const button = SpriteKind.create()
    export const NPC = SpriteKind.create()
    export const complete = SpriteKind.create()
}

scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile0
    `, function on_overlap_tile(sprite: Sprite, location: tiles.Location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.slash)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.potion, function on_on_overlap(sprite2: Sprite, otherSprite: Sprite) {
    
    sprites.destroy(otherSprite)
    Hunter = sprites.create(img`
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        `, SpriteKind.Enemy)
    animation.runImageAnimation(Hunter, [img`
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . 2 2 2 2 2 2 2 2 2 . . . 
                        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                        . . 2 2 f 1 2 2 2 2 2 1 f 2 2 . 
                        . . 2 2 f f 2 2 2 2 2 f f 2 2 . 
                        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                        . . 2 2 2 2 f f f f f 2 2 2 2 . 
                        . 2 2 2 2 f f f f f f f 2 2 2 2 
                        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                        . . . . f . . . . . . . f . . . 
                        . . . . f . . . . . . . f . . . 
                        . . . f f . . . . . . f f . . . 
                        . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . 2 2 2 2 2 2 2 2 2 . . . 
                        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                        . . 2 2 1 1 2 2 2 2 2 1 1 2 2 . 
                        . . 2 2 f 1 2 2 2 2 2 1 f 2 2 . 
                        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                        . . 2 2 2 2 f f f f f 2 2 2 2 . 
                        . 2 2 2 2 f f f f f f f 2 2 2 2 
                        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                        . . . . f . . . . . . . f . . . 
                        . . . . f . . . . . . . f . . . 
                        . . . f f . . . . . . f f . . . 
                        . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . 2 2 2 2 2 2 2 2 2 . . . 
                        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                        . . 2 2 f f 2 2 2 2 2 f f 2 2 . 
                        . . 2 2 f 1 2 2 2 2 2 1 f 2 2 . 
                        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                        . . 2 2 2 2 f f f f f 2 2 2 2 . 
                        . 2 2 2 2 f f f f f f f 2 2 2 2 
                        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                        . . . . f . . . . . . . f . . . 
                        . . . . f . . . . . . . f . . . 
                        . . . f f . . . . . . f f . . . 
                        . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . 2 2 2 2 2 2 2 2 2 . . . 
                        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                        . . 2 2 f f 2 2 2 2 2 f f 2 2 . 
                        . . 2 2 f f 2 2 2 2 2 f f 2 2 . 
                        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                        . . 2 2 2 2 f f f f f 2 2 2 2 . 
                        . 2 2 2 2 f f f f f f f 2 2 2 2 
                        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                        . . . . f . . . . . . . f . . . 
                        . . . . f . . . . . . . f . . . 
                        . . . f f . . . . . . f f . . . 
                        . . . . . . . . . . . . . . . .
            `], 200, true)
    Hunter.setPosition(Ron.x + 80, Ron.y - 80)
    Hunter.follow(Ron)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function on_on_overlap2(sprite3: Sprite, otherSprite2: Sprite) {
    game.showLongText("what is 10 x 9 ?", DialogLayout.Bottom)
    story.showPlayerChoices("90", "19", "99", "10")
    if (story.checkLastAnswer("90")) {
        info.changeScoreBy(5)
        game.gameOver(true)
        NPC2.setKind(SpriteKind.complete)
    } else if (story.checkLastAnswer("19")) {
        info.changeScoreBy(-5)
        game.showLongText("wrong!", DialogLayout.Bottom)
        game.gameOver(false)
    } else if (story.checkLastAnswer("99")) {
        info.changeScoreBy(-5)
        game.showLongText("wrong!", DialogLayout.Bottom)
        game.gameOver(false)
    } else if (story.checkLastAnswer("10")) {
        info.changeScoreBy(-5)
        game.showLongText("wrong!", DialogLayout.Bottom)
        game.gameOver(false)
    }
    
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    if (Ron.vy == 0) {
        Ron.vy = -150
    }
    
})
function main_menu() {
    
    if (level == 0) {
        main_menu()
        scene.setBackgroundImage(img`
            ccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccccbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccccbbbbbbfffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcffffbbbbbbbbbfffcbfccfbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccccbbbbbbbbbbbfbbbfbbbbbbbbbbbbbbbbbbbfffbcfcbbbbbbbbfbffbfccfbbfbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccccbbbbbbbbbbbfbbbfbbbbfffffbbbbbbbbbcfbbbbffbcbbbccbfbffbfbcfbbfbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccccbbbbbbbbbbbfbbbffffbfbbcfbbbbbbbbbfbbbbbbffcbbbbfffbfcbfbcbbbfbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccccbbbbbbbbbbbfbbbfbffbfbcffbbbbbbbbbfbbbbbbfffcbbbcffcfbbfffbbffffbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccccbbbbbbbbbbbfbbbfbbfbfcfbbbbbbbbbbbfbbbbbffbbfbbbffcfbbbbcfbbbffbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccccbbbbbbbbbbbfbbbfbbfbfffbbcbbbbbbbbbffbbffcbbffbffbcfbbbbbffbbffbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccccbbbbbbbbbbbfbbbfbbcbfcfbcfbbbbbbbbbbcffcbbbbcffcbbbfbfcbbcfbbffbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbffffbbbbbbbbbbbbfcffbbbbbbbbbfffbbbbfbbffbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbfffbbbbbbbbbbbbfffffbbfffffbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbffffbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
        play = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            c c c c c c c c c c c c c c c c 
                            c f f f f f f . f . f f f f f f 
                            c f . f . f . . f . f . f . f . 
                            c f . . . f . f f f f f . . f . 
                            c f f f . f . f . f f . f . f . 
                            c . . f . f . f f f f . . f f . 
                            c f f f . f . f . f f . . . f . 
                            c c c c c c c c c c c c c c c c 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . .
            `, SpriteKind.button)
        cursor = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . 1 . . . . . . . . . 
                            . . . . . 1 f 1 . . . . . . . . 
                            . . . . . 1 f 1 . . . . . . . . 
                            . . . . 1 f f f 1 . . . . . . . 
                            . . . 1 f f f f f 1 . . . . . . 
                            . . 1 1 f f f f f 1 1 . . . . . 
                            . . 1 1 1 1 1 1 1 1 1 . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . .
            `, SpriteKind.Player)
        play.setPosition(18, 113)
    }
    
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function on_on_overlap3(sprite4: Sprite, otherSprite3: Sprite) {
    info.changeScoreBy(5)
    sprites.destroy(otherSprite3)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_on_overlap4(sprite5: Sprite, otherSprite4: Sprite) {
    sprites.destroy(otherSprite4)
    if (Ron.y < otherSprite4.y) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
    }
    
})
let cursor : Sprite = null
let play : Sprite = null
let Hunter : Sprite = null
let NPC2 : Sprite = null
let Potion : Sprite = null
let coin2 : Sprite = null
let Ron : Sprite = null
let level = 0
scene.setBackgroundColor(10)
scene.setBackgroundImage(img`
    dddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        dddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccccccc
        ddddddddddddddddcccccccccccccccccccccccccccccccccccccccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdcccccccccccccccccccccc
        ddddddddddddddddccccccccccdddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddccccccccccccccccc
        dddddddddddddddcccccdddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddcccccccccccccccccccccccccccccccccddddddddddccccccccccccccc
        ddddddddddddcccccdddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccddddddddddddddddddccccccccccccccccccccccccccccccccdddddddddddddccdddcccccccc
        cccccccccccccccdddddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddccccccccccccccccccccccccccddddddddddddddddddddccccccc
        ccccccccccccdddddddddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddccccccccccccccccccccccccddddddddddddddddddddddddcccc
        cccccccccccddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddccccccccccccccccccccdddddddddddddddddddddddddddccc
        ccccccccccddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddcccccccccccccccccccdddddddddddddddddddddddddddddc
        ccccccccccdddddddddddddddddddddddddddddddddddcccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddcccccccccccccccdddddddddddddddddddddddddddddddc
        ccccccccccdddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddcccccccccccccccdddddddddddddddddddddddddddddddd
        ccccccccccdddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddcccccccccccccccdddddddddddddddddddddddddddddddd
        ccccccccccccdddddddddddddddddddddddcccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddcccccccccccccccdddddddddddddddddddddddddddddddd
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddcccccccdccccccccdddddddddddddddddddddddddddddddd
        ccccccccccccccccccccccccccccccccccccccccccccccccdcccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddccccccccccccccccdddddddddddddddddddddddddddddddd
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddcccccccccccccccccccdddddddddddddddddddddddddddddd
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddccddddddddddddddddcccccccccccccccccccccccdddddddddddddddddddddddddddddd
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddcccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddd
        ccccccccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbccccccccccccccccccccbbcccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccccbbbbccccccccccccccccccbbbbccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbccccccccccccccccccccccccccccccccccccccccbbbbbccccccccccccccccccbbbbccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbcccccccccccccccccccccccccccccccccccccccbbbbbccccccccccccccccccbbbbbcccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbccccccccccccccccccccccbbcccccccccccccccbbbbbbcccccccccccccccbbbbbbbbccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbcccccccccccccccccccccbbbbcccccccccccccbbbbbbbbccccccccccccccbbbbbbbbbcccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbccccccccccccccccccccbbbbcccccccccccccbbbbbbbbbcccccccccccccbbbbbbbbbbccccccccccccccc
        cccccccccccccccccccccbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbcccccccccccccccccccbbbbbcccccccccccccbbbbbbbbbbccccccccccccbbbbbbbbbbccccccccccccccc
        ccccccccccccccccccccbbbbccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbcccccccccccccccccccbbbbbccccccccccccbbbbbbbbbbbccccccccccccbbbbbbbbbbbbccccccccccccc
        cccccccccccccccccccbbbbbbcccccccccccccccccccccccccccccbbccccccccccccbbbbbbbbbcccccccccccccccccbcbbbbbcccccccccccbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbccccccccccccc
        ccccccccccccccccccbbbbbbbbccccccccccccccccccccccccccccbbccccccccccbbbbbbbbbbbcccccccccccccccccbbbbbbbbcccccccccbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbccccccccccccc
        cccccccccccccccccbbbbbbbbbcccccccccccccccccccccccccccbbbbcccccccccbbbbbbbbbbbbccccccccccccccccbbbbbbbbbccccccccbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbccccccccccc
        ccccccccccccccccbbbbbbbbbbbccccccccccccccccccccccccccbbbbbcccccccbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbcccccccccc
        ccccccccccccccccbbbbbbbbbbbbbcccccccccccccccccccccccbbbbbbcccccccbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbcccccccc
        ccccccccccccccccbbbbbdbbbbbbbbcccccccccccccccccccccbbbbbbbbcccccbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbccccccc
        cccccccccccccccbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbcccbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccc
        cccccccccccccccbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbccbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc
        ccccccccccccccbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccc
        cccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        ccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
        cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        cccccccccbbbbbbbbbbdbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        cccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbb
        cccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
`)
level = 1
Ron = sprites.create(img`
        . . . . . . . . . . . . . . . . 
            . . e e e e e e e e e . . . . . 
            . . e e e e e e e e e . . . . . 
            . . e e e e e e e e e . . . . . 
            . . d d d d d d d d d . . . . . 
            . . d d d d d d d d d . . . . . 
            . d d f d d d d d f d d . . . . 
            . 4 d d d d d d d d d 4 . . . . 
            . 4 d d d d d d d d d 4 . . . . 
            . 4 6 8 8 8 8 8 8 8 8 4 . . . . 
            . d 6 8 8 8 8 8 8 8 8 d . . . . 
            . . 6 8 8 8 8 8 8 8 8 . . . . . 
            . . 6 8 8 8 8 8 8 8 8 . . . . . 
            . . 6 8 8 8 8 8 8 8 8 . . . . . 
            . . 4 4 4 . . . 4 4 4 . . . . . 
            . . 4 4 4 . . . 4 4 4 . . . . .
    `, SpriteKind.Player)
controller.moveSprite(Ron, 100, 0)
tiles.setCurrentTilemap(tilemap`
    level1
`)
Ron.ay = 350
scene.cameraFollowSprite(Ron)
info.setLife(5)
for (let value of tiles.getTilesByType(assets.tile`
    myTile2
`)) {
    coin2 = sprites.create(img`
            . . . . f f f f f f f . . . . . 
                    . . f f 5 5 5 5 5 5 5 f f . . . 
                    . f 5 5 4 4 4 4 4 4 5 5 5 f . . 
                    . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
                    f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
                    f 5 4 5 5 5 5 5 5 5 5 5 5 5 f . 
                    f 5 4 5 5 5 5 5 5 5 5 5 5 5 f . 
                    f 5 4 5 5 5 5 5 5 5 5 5 5 5 f . 
                    f 5 4 5 5 5 5 5 5 5 5 5 5 5 f . 
                    f 5 4 5 5 5 5 5 5 5 5 5 5 5 f . 
                    f 5 4 5 5 5 5 5 5 5 5 5 5 5 f . 
                    . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
                    . f 5 5 5 4 4 4 4 4 5 5 5 f . . 
                    . . f f 5 5 5 5 5 5 5 f f . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . . . . . . . . . . . . . .
        `, SpriteKind.coin)
    animation.runImageAnimation(coin2, [img`
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . f f f f f f f . . . . 
                        . . . . f 5 5 5 5 5 5 5 f . . . 
                        . . . f 5 4 4 4 4 4 4 5 5 f . . 
                        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
                        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
                        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
                        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
                        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
                        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
                        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
                        . . . f 5 5 4 4 4 4 5 5 5 f . . 
                        . . . . f 5 5 5 5 5 5 5 f . . . 
                        . . . . . f f f f f f f . . . . 
                        . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . f f f f . . . . . 
                        . . . . . . f 5 5 5 5 f . . . . 
                        . . . . . f 5 4 4 4 5 5 f . . . 
                        . . . . f 5 4 5 5 5 5 5 5 f . . 
                        . . . . f 5 4 5 5 5 5 5 5 f . . 
                        . . . . f 5 4 5 5 5 5 5 5 f . . 
                        . . . . f 5 4 5 5 5 5 5 5 f . . 
                        . . . . f 5 4 5 5 5 5 5 5 f . . 
                        . . . . f 5 4 5 5 5 5 5 5 f . . 
                        . . . . f 5 5 5 5 5 5 5 5 f . . 
                        . . . . . f 5 5 4 4 5 5 f . . . 
                        . . . . . . f 5 5 5 5 f . . . . 
                        . . . . . . . f f f f . . . . . 
                        . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . . . . . f 5 5 f . . . . . 
                        . . . . . . f 5 4 4 5 f . . . . 
                        . . . . . f 5 4 5 5 5 5 f . . . 
                        . . . . . f 5 4 5 5 5 5 f . . . 
                        . . . . . f 5 4 5 5 5 5 f . . . 
                        . . . . . f 5 4 5 5 5 5 f . . . 
                        . . . . . f 5 4 5 5 5 5 f . . . 
                        . . . . . f 5 4 5 5 5 5 f . . . 
                        . . . . . f 5 5 5 5 5 5 f . . . 
                        . . . . . . f 5 5 4 5 f . . . . 
                        . . . . . . . f 5 5 f . . . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . f f . . . . . 
                        . . . . . . . . f 5 5 . . . . . 
                        . . . . . . . f 5 4 f . . . . . 
                        . . . . . . f 5 4 5 5 f . . . . 
                        . . . . . . f 5 4 5 5 f . . . . 
                        . . . . . . f 5 4 5 5 f . . . . 
                        . . . . . . f 5 4 5 5 f . . . . 
                        . . . . . . f 5 4 5 5 f . . . . 
                        . . . . . . f 5 4 5 5 f . . . . 
                        . . . . . . f 5 5 5 5 f . . . . 
                        . . . . . . . f 5 5 f . . . . . 
                        . . . . . . . . f 5 5 . . . . . 
                        . . . . . . . . . f f . . . . . 
                        . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . f . . . . . 
                        . . . . . . . . . f 5 . . . . . 
                        . . . . . . . . f 5 4 . . . . . 
                        . . . . . . . f 5 4 5 f . . . . 
                        . . . . . . . f 5 4 5 f . . . . 
                        . . . . . . . f 5 4 5 f . . . . 
                        . . . . . . . f 5 4 5 f . . . . 
                        . . . . . . . f 5 4 5 f . . . . 
                        . . . . . . . f 5 4 5 f . . . . 
                        . . . . . . . f 5 5 5 f . . . . 
                        . . . . . . . . f 5 5 . . . . . 
                        . . . . . . . . . f 5 . . . . . 
                        . . . . . . . . . . f . . . . . 
                        . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . f . . . . . 
                        . . . . . . . . . f 5 . . . . . 
                        . . . . . . . . . 5 f . . . . . 
                        . . . . . . . . . f 5 f . . . . 
                        . . . . . . . . . f 5 f . . . . 
                        . . . . . . . . . f 5 f . . . . 
                        . . . . . . . . . f 5 f . . . . 
                        . . . . . . . . . f 5 f . . . . 
                        . . . . . . . . . f 5 f . . . . 
                        . . . . . . . . . f 5 f . . . . 
                        . . . . . . . . . 5 f . . . . . 
                        . . . . . . . . . f 5 . . . . . 
                        . . . . . . . . . . f . . . . . 
                        . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . f . . . . . 
                        . . . . . . . . . f 5 . . . . . 
                        . . . . . . . . . 5 f . . . . . 
                        . . . . . . . . . f 5 f . . . . 
                        . . . . . . . . . f 5 f . . . . 
                        . . . . . . . . . f 5 f . . . . 
                        . . . . . . . . . f 5 f . . . . 
                        . . . . . . . . . f 5 f . . . . 
                        . . . . . . . . . f 5 f . . . . 
                        . . . . . . . . . f 5 f . . . . 
                        . . . . . . . . . 5 f . . . . . 
                        . . . . . . . . . f 5 . . . . . 
                        . . . . . . . . . . f . . . . . 
                        . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . f . . . . . 
                        . . . . . . . . . f 5 . . . . . 
                        . . . . . . . . f 5 4 . . . . . 
                        . . . . . . . f 5 4 5 f . . . . 
                        . . . . . . . f 5 4 5 f . . . . 
                        . . . . . . . f 5 4 5 f . . . . 
                        . . . . . . . f 5 4 5 f . . . . 
                        . . . . . . . f 5 4 5 f . . . . 
                        . . . . . . . f 5 4 5 f . . . . 
                        . . . . . . . f 5 5 5 f . . . . 
                        . . . . . . . . f 5 5 . . . . . 
                        . . . . . . . . . f 5 . . . . . 
                        . . . . . . . . . . f . . . . . 
                        . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . f f . . . . . 
                        . . . . . . . . f 5 5 . . . . . 
                        . . . . . . . f 5 4 f . . . . . 
                        . . . . . . f 5 4 5 5 f . . . . 
                        . . . . . . f 5 4 5 5 f . . . . 
                        . . . . . . f 5 4 5 5 f . . . . 
                        . . . . . . f 5 4 5 5 f . . . . 
                        . . . . . . f 5 4 5 5 f . . . . 
                        . . . . . . f 5 4 5 5 f . . . . 
                        . . . . . . f 5 5 5 5 f . . . . 
                        . . . . . . . f 5 5 f . . . . . 
                        . . . . . . . . f 5 5 . . . . . 
                        . . . . . . . . . f f . . . . . 
                        . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . . . . . f 5 5 f . . . . . 
                        . . . . . . f 5 4 4 5 f . . . . 
                        . . . . . f 5 4 5 5 5 5 f . . . 
                        . . . . . f 5 4 5 5 5 5 f . . . 
                        . . . . . f 5 4 5 5 5 5 f . . . 
                        . . . . . f 5 4 5 5 5 5 f . . . 
                        . . . . . f 5 4 5 5 5 5 f . . . 
                        . . . . . f 5 4 5 5 5 5 f . . . 
                        . . . . . f 5 5 5 5 5 5 f . . . 
                        . . . . . . f 5 5 4 5 f . . . . 
                        . . . . . . . f 5 5 f . . . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . f f f f . . . . . 
                        . . . . . . f 5 5 5 5 f . . . . 
                        . . . . . f 5 4 4 4 5 5 f . . . 
                        . . . . f 5 4 5 5 5 5 5 5 f . . 
                        . . . . f 5 4 5 5 5 5 5 5 f . . 
                        . . . . f 5 4 5 5 5 5 5 5 f . . 
                        . . . . f 5 4 5 5 5 5 5 5 f . . 
                        . . . . f 5 4 5 5 5 5 5 5 f . . 
                        . . . . f 5 4 5 5 5 5 5 5 f . . 
                        . . . . f 5 5 5 5 5 5 5 5 f . . 
                        . . . . . f 5 5 4 4 5 5 f . . . 
                        . . . . . . f 5 5 5 5 f . . . . 
                        . . . . . . . f f f f . . . . . 
                        . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . f f f f f f f . . . . 
                        . . . . f 5 5 5 5 5 5 5 f . . . 
                        . . . f 5 4 4 4 4 4 4 5 5 f . . 
                        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
                        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
                        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
                        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
                        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
                        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
                        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
                        . . . f 5 5 4 4 4 4 5 5 5 f . . 
                        . . . . f 5 5 5 5 5 5 5 f . . . 
                        . . . . . f f f f f f f . . . . 
                        . . . . . . . . . . . . . . . .
            `], 100, true)
    tiles.placeOnTile(coin2, value)
    tiles.setTileAt(value, assets.tile`
        transparency16
    `)
}
for (let value2 of tiles.getTilesByType(assets.tile`
    myTile3
`)) {
    Potion = sprites.create(img`
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f . . . . . . . 
                    . . . . f b d d b f . . . . . . 
                    . . . f c b d d b c f . . . . . 
                    . . . . f c f f c f . . . . . . 
                    . . . . f c f f c f . . . . . . 
                    . . . f c f f f f c f . . . . . 
                    . . f c b b b b b b c f . . . . 
                    . f c e e b b b b e e c f . . . 
                    . f c e 4 e e e e 4 e c f . . . 
                    . . f c e 4 e e 4 e c f . . . . 
                    . . . f c c c c c c f . . . . . 
                    . . . . f f f f f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        `, SpriteKind.potion)
    tiles.placeOnTile(Potion, value2)
    tiles.setTileAt(value2, assets.tile`
        transparency16
    `)
}
for (let value3 of tiles.getTilesByType(assets.tile`
    myTile4
`)) {
    NPC2 = sprites.create(assets.tile`
        myTile1
    `, SpriteKind.NPC)
    tiles.placeOnTile(NPC2, value3)
    tiles.setTileAt(value3, assets.tile`
        transparency16
    `)
}
game.onUpdate(function on_on_update() {
    Ron.setImage(img`
        . . . . . . . . . . . . . . . . 
                . . e e e e e e e e e . . . . . 
                . . e e e e e e e e e . . . . . 
                . . e e e e e e e e e . . . . . 
                . . d d d d d d d d d . . . . . 
                . . d d d d d d d d d . . . . . 
                . d d f d d d d d f d d . . . . 
                . 4 d d d d d d d d d 4 . . . . 
                . 4 d d d d d d d d d 4 . . . . 
                . 4 6 8 8 8 8 8 8 8 8 4 . . . . 
                . d 6 8 8 8 8 8 8 8 8 d . . . . 
                . . 6 8 8 8 8 8 8 8 8 . . . . . 
                . . 6 8 8 8 8 8 8 8 8 . . . . . 
                . . 6 8 8 8 8 8 8 8 8 . . . . . 
                . . 4 4 4 . . . 4 4 4 . . . . . 
                . . 4 4 4 . . . 4 4 4 . . . . .
    `)
    if (Ron.vy < 0) {
        Ron.setImage(img`
            . . . . . . . . . . . . . . . . 
                        . . . . . . e e e e e e e e e . 
                        . . . . . d e e e e e e e e e d 
                        . . . . . 4 e e e e e e e e e 4 
                        . . . . . 4 d d d d d d d d d 4 
                        . . . . . 4 d d d d d d d d d 4 
                        . . . . . d d d d f d d d d f d 
                        . . . . . . d d d d d d d d d . 
                        . . . . . . d d d d d d d d d . 
                        . . . . . . 6 8 8 8 8 8 8 8 8 . 
                        . . . . . d 6 8 8 8 8 8 8 8 8 . 
                        . . . . . . 6 8 8 8 8 8 8 8 8 . 
                        . . . . . . 6 8 8 8 8 8 8 8 8 . 
                        . . . . . . 6 8 8 8 8 8 8 8 8 . 
                        . . . . . . 4 4 4 . . . 4 4 4 . 
                        . . . . . . 4 4 4 . . . 4 4 4 .
        `)
    } else if (Ron.vy > 0) {
        Ron.setImage(img`
            . . . . . . . . . . . . . . . . 
                        . . . . . . e e e e e e e e e . 
                        . . . . . . e e e e e e e e e . 
                        . . . . . . e e e e e e e e e . 
                        . . . . . . d d d d d d d d d . 
                        . . . . . . d d d d d d d d d . 
                        . . . . . d d f d d d d d f d d 
                        . . . . . 4 d d d d d d d d d 4 
                        . . . . . 4 d d d d d d d d d 4 
                        . . . . . 4 6 8 8 8 8 8 8 8 8 4 
                        . . . . . d 6 8 8 8 8 8 8 8 8 d 
                        . . . . . . 6 8 8 8 8 8 8 8 8 . 
                        . . . . . . 6 8 8 8 8 8 8 8 8 . 
                        . . . . . . 6 8 8 8 8 8 8 8 8 . 
                        . . . . . . 4 4 4 . . . 4 4 4 . 
                        . . . . . . 4 4 4 . . . 4 4 4 .
        `)
    } else if (Ron.x % 2 == 0) {
        
    }
    
    if (Ron.vx < 0) {
        Ron.image.flipX()
    }
    
})
