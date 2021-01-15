var objects=[];var status='';
var bookx,booky,bookheight,bookwidth,bookconfidence
function preload(){
    bookImg=loadImage('abook.jpg')
}
function setup(){
    canvas=createCanvas(450,400);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',gotResult);
}
function draw(){
    image(bookImg,0,0,450,400)
    if(status!=''){for(var i=0;i<objects.length;i++){bookx=objects[i].x;booky=objects[i].y;bookwidth=objects[i].width;bookheight=objects[i].height;bookconfidence=objects[i].confidence;console.log(bookx+' '+booky+' '+bookwidth+' '+bookheight+' '+bookconfidence);}}
}






/*     modelLoaded function     */function modelLoaded(){console.log('Model has Been Loaded');status=true;objectDetector.detect(bookImg,gotResult);}/*     gotResult function     */function gotResult(error,results){if(error){console.log('ERROR! '+error);console.log(results);objects=results;}}