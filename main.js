function preload(){
    img=loadImage('OIP (1).jpg')
}
function setup(){
    canvas=createCanvas(350,300);
    canvas.center();
}
function draw(){
    image(img,0,0,350,300);
}