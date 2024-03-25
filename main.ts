basic.forever(function () {
    music.play(music.createSoundExpression(WaveShape.Noise, 5000, 0, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    basic.showString("enemy found")
    basic.showString(" fifth level")
    basic.showString("name chopper ")
})
