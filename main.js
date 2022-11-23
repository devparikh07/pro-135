

function setup(){
    canvas = createCanvas(380,290);
    canvas.position(789,300);
    video = createCapture(VIDEO);
    video.size(380,290);
    video.hide();
}
function modelLoaded(){
    console.log("Model_Loaded !");
    
}
function draw(){
    image(video,0,0,380,290);
}