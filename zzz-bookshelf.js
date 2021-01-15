

function preload(){bookshelf=loadImage('book shelf.jpg');}

var objects=[];var status='';
var bookshelfx,bookshelfy,bookshelfwidth,bookshelfheight,bookshelfconfidence;
function setup(){
    canvas=createCanvas(450,400);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',gotResult);
}
function draw(){
    image(bookshelf,0,0,450,400)
    if(status!=''){for(var i=0;i<objects.length;i++){bookx=objects[i].x;booky=objects[i].y;bookwidth=objects[i].width;bookheight=objects[i].height;bookconfidence=objects[i].confidence;console.log(bookshelfx+' '+bookshelfy+' '+bookshelfwidth+' '+bookshelfheight+' '+bookshelfconfidence);}}
}






/*     modelLoaded function     */function modelLoaded(){console.log('Model has Been Loaded');status=true;objectDetector.detect(bookshelf,gotResult);}/*     gotResult function     */function gotResult(error,results){if(error){console.log('ERROR! '+error);console.log(results);objects=results;}}