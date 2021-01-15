function preload(){television=loadImage('a tv.jpg');}
var objects=[];var status='';
var televisionshelfx,televisionshelfy,televisionwidth,televisionheight,televisionconfidence;
function setup(){
    canvas=createCanvas(450,400);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',gotResult);
}
function draw(){
    image(television,0,0,450,400)
    if(status!=''){for(var i=0;i<objects.length;i++){televisionx=objects[i].x;televisiony=objects[i].y;televisionwidth=objects[i].width;televisionheight=objects[i].height;televisionconfidence=objects[i].confidence;console.log(televisionx+' '+televisiony+' '+televisionwidth+' '+televisionheight+' '+televisionconfidence);}}
}






/*     modelLoaded function     */function modelLoaded(){console.log('Model has Been Loaded');status=true;objectDetector.detect(television,gotResult);}/*     gotResult function     */function gotResult(error,results){if(error){console.log('ERROR! '+error);console.log(results);objects=results;}}