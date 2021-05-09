function preload() {}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 100, 100, 320, 240);

    rect(0, 0, 100, 100, 10)
    rect(420, 0, 100, 100, 10)
    rect(0, 340, 100, 100, 10)
    rect(420, 340, 100, 100, 10)
}

function take_snapshot()
{
    save('student_name.png');
}