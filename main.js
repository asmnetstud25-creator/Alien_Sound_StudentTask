
// SOUND IDENTIFICATION WEB APP
// STUDENT STARTER CODE
// Complete all 9 tasks.

let classifier;

// TASK 1: Load the Teachable Machine sound model.
function startClassification() {

    // Use ml5.soundClassifier()
    // Model URL:
    // https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json
    // Callback function: modelReady


}

// TASK 2: Start sound classification.
function modelReady() {

    // Use classifier.classify()
    // Connect it to gotResults()


}

// TASK 3: Process the classification results.
function gotResults(error, results) {

    if (error) {
        console.error(error);
    }
    else {

        console.log(results);

        // TASK 4: Generate three random RGB values.
        // Create:
        // random_number_r
        // random_number_g
        // random_number_b
        //
        // Use Math.random() and Math.floor().
        // Values should be between 1 and 255.



        // TASK 5: Display the detected sound.
        // Use results[0].label
        // Update the element with id: result_label



        // TASK 6: Display the confidence percentage.
        // Use results[0].confidence
        // Multiply by 100.
        // Use toFixed(2).
        // Update the element with id: result_confidence



        // TASK 7: Change the text color.
        // Use style.color.
        // Apply the RGB values to both result elements.



        // TASK 8: Connect all four alien images.
        // Use document.getElementById().
        //
        // Image IDs:
        // alien1
        // alien2
        // alien3
        // alien4



        // TASK 9: Animate the correct alien.
        // Use if, else if, and else statements.
        //
        // Sound: "Clap"
        // Animate aliens-01.gif
        // Reset the other images to .png
        //
        // Sound: "Bell"
        // Animate aliens-02.gif
        // Reset the other images to .png
        //
        // Sound: "Snapping"
        // Animate aliens-03.gif
        // Reset the other images to .png
        //
        // Any other sound
        // Animate aliens-04.gif
        // Reset the other images to .png

    }
}
