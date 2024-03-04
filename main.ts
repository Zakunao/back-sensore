let newFrequency = 0
let pitchShift = 0
let isTilting = false
let roll = 0
let pitch = 0
// Base frequency (A4 note)
let baseFrequency = 440
// Tone duration in milliseconds
let TONE_DURATION_MS = 5
// Flag to track tilt state
basic.forever(function () {
    // Get accelerometer values
    let acceleration = input.acceleration(Dimension.Y)
    pitch = acceleration
    roll = input.rotation(Rotation.Roll)
    // Check if the sensor is tilting
    if (pitch < 950) {
        isTilting = true
    } else {
        isTilting = false
    }
    // Play the tone only when tilting
    if (isTilting) {
        // Calculate the pitch shift based on tilt
        // Adjust this factor for sensitivity
        pitchShift = Math.floor(pitch / 50)
        // Calculate the new frequency
        newFrequency = baseFrequency + pitchShift
        // Play the tone with the specified duration
        music.playTone(newFrequency, TONE_DURATION_MS)
    }
    // Wait for a short duration (adjust as needed)
    basic.pause(100)
})
