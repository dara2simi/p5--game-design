@namespace
class SpriteKind:
    coin = SpriteKind.create()
    potion = SpriteKind.create()
    button = SpriteKind.create()
    NPC = SpriteKind.create()
    complete = SpriteKind.create()

def on_overlap_tile(sprite, location):
    game.game_over(False)
    game.set_game_over_effect(False, effects.slash)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile0
    """),
    on_overlap_tile)

def on_on_overlap(sprite2, otherSprite):
    global Hunter
    sprites.destroy(otherSprite)
    Hunter = sprites.create(img("""
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
        """),
        SpriteKind.enemy)
    animation.run_image_animation(Hunter,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        200,
        True)
    Hunter.set_position(Ron.x + 80, Ron.y - 80)
    Hunter.follow(Ron)
sprites.on_overlap(SpriteKind.player, SpriteKind.potion, on_on_overlap)

def on_on_overlap2(sprite3, otherSprite2):
    game.show_long_text("what is 10 x 9 ?", DialogLayout.BOTTOM)
    story.show_player_choices("90", "19", "99", "10")
    if story.check_last_answer("90"):
        info.change_score_by(5)
        game.game_over(True)
        NPC2.set_kind(SpriteKind.complete)
    elif story.check_last_answer("19"):
        info.change_score_by(-5)
        game.show_long_text("wrong!", DialogLayout.BOTTOM)
        game.game_over(False)
    elif story.check_last_answer("99"):
        info.change_score_by(-5)
        game.show_long_text("wrong!", DialogLayout.BOTTOM)
        game.game_over(False)
    elif story.check_last_answer("10"):
        info.change_score_by(-5)
        game.show_long_text("wrong!", DialogLayout.BOTTOM)
        game.game_over(False)
sprites.on_overlap(SpriteKind.player, SpriteKind.NPC, on_on_overlap2)

def on_a_pressed():
    if Ron.vy == 0:
        Ron.vy = -150
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def main_menu():
    global play, cursor
    if level == 0:
        main_menu()
        scene.set_background_image(img("""
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
        """))
        play = sprites.create(img("""
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
            """),
            SpriteKind.button)
        cursor = sprites.create(img("""
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
            """),
            SpriteKind.player)
        play.set_position(18, 113)

def on_on_overlap3(sprite4, otherSprite3):
    info.change_score_by(5)
    sprites.destroy(otherSprite3)
sprites.on_overlap(SpriteKind.player, SpriteKind.coin, on_on_overlap3)

def on_on_overlap4(sprite5, otherSprite4):
    sprites.destroy(otherSprite4)
    if Ron.y < otherSprite4.y:
        info.change_score_by(3)
    else:
        info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap4)

cursor: Sprite = None
play: Sprite = None
Hunter: Sprite = None
NPC2: Sprite = None
Potion: Sprite = None
coin2: Sprite = None
Ron: Sprite = None
level = 0
scene.set_background_color(10)
scene.set_background_image(img("""
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
"""))
level = 1
Ron = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(Ron, 100, 0)
tiles.set_current_tilemap(tilemap("""
    level1
"""))
Ron.ay = 350
scene.camera_follow_sprite(Ron)
info.set_life(5)
for value in tiles.get_tiles_by_type(assets.tile("""
    myTile2
""")):
    coin2 = sprites.create(img("""
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
        """),
        SpriteKind.coin)
    animation.run_image_animation(coin2,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        True)
    tiles.place_on_tile(coin2, value)
    tiles.set_tile_at(value, assets.tile("""
        transparency16
    """))
for value2 in tiles.get_tiles_by_type(assets.tile("""
    myTile3
""")):
    Potion = sprites.create(img("""
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
        """),
        SpriteKind.potion)
    tiles.place_on_tile(Potion, value2)
    tiles.set_tile_at(value2, assets.tile("""
        transparency16
    """))
for value3 in tiles.get_tiles_by_type(assets.tile("""
    myTile4
""")):
    NPC2 = sprites.create(assets.tile("""
        myTile1
    """), SpriteKind.NPC)
    tiles.place_on_tile(NPC2, value3)
    tiles.set_tile_at(value3, assets.tile("""
        transparency16
    """))

def on_on_update():
    Ron.set_image(img("""
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
    """))
    if Ron.vy < 0:
        Ron.set_image(img("""
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
        """))
    elif Ron.vy > 0:
        Ron.set_image(img("""
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
        """))
    elif Ron.x % 2 == 0:
        pass
    if Ron.vx < 0:
        Ron.image.flip_x()
game.on_update(on_on_update)
