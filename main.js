song1 = "";
song2 = "";

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center()

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function preload()
{
    song1 = loadSound("music1");
    song2 = loadSound("music2");
}