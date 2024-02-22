namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const potion = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.slash)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.potion, function (sprite, otherSprite) {
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
    animation.runImageAnimation(
    Hunter,
    [img`
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
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 f f 2 2 2 2 2 f f 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 f f f f f 2 2 2 2 . 
        . 2 2 2 2 f f f f f f f 2 2 2 2 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . f . . . . . . . f . . . . 
        . . . f . . . . . . . f . . . . 
        . . f f . . . . . . f f . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    Hunter.setPosition(Ron.x + 80, Ron.y - 80)
    Hunter.follow(Ron)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Ron.vy == 0) {
        Ron.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
let Hunter: Sprite = null
let Potion: Sprite = null
let coin: Sprite = null
let Ron: Sprite = null
scene.setBackgroundColor(10)
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
tiles.setCurrentTilemap(tilemap`level1`)
Ron.ay = 350
scene.cameraFollowSprite(Ron)
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    coin = sprites.create(img`
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
    animation.runImageAnimation(
    coin,
    [img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `],
    100,
    true
    )
    tiles.placeOnTile(coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
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
    tiles.placeOnTile(Potion, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
