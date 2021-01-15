function preload(){dogs=loadImage('a dog.jpg');}

var objects=[];var status='';
var dogsshelfx,dogsshelfy,dogswidth,dogsheight,dogsconfidence;
function setup(){
    canvas=createCanvas(450,400);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',gotResult);
}
function draw(){
    image(dogs,0,0,450,400)
    if(status!=''){for(var i=0;i<objects.length;i++){dogsx=objects[i].x;dogsy=objects[i].y;dogswidth=objects[i].width;dogsheight=objects[i].height;dogsconfidence=objects[i].confidence;console.log(dogsx+' '+dogsy+' '+dogswidth+' '+dogsheight+' '+dogsconfidence);}}
}






/*     modelLoaded function     */function modelLoaded(){console.log('Model has Been Loaded');status=true;objectDetector.detect(dogs,gotResult);}/*     gotResult function     */function gotResult(error,results){if(error){console.log('ERROR! '+error);console.log(results);objects=results;}}