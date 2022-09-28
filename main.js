img ="";
object_status ="";
function preload() {
    img = loadImage('dog_cat.jpg');
}
function setup() {
    canvas = createCanvas(700, 500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = 'Status - Detecting Objects';
}
function modelLoaded() {
    console.log('Model is loaded!');
    object_status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, result) {
    if (error) {
        console.error(error);
    }
    console.log(result);
}
function draw() {
    image(img, 0, 0, 700, 500)
    fill('red');
    text('dog', 140, 100);
    textSize(20)
    noFill();
    stroke('red');
    rect(100, 70, 400, 400)

    fill('red');
    text('cat', 350, 100);
    textSize(20)
    noFill();
    stroke('red');
    rect(300, 80, 380, 380)
}