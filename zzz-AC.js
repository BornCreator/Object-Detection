var acx,acy,acwidth,acheight,acconfidence;var objects=[];var status='';function preload(){airConditioner=loadImage('AC.jpg');}/*     setup function     */function setup(){canvas=createCanvas(500,300);canvas.center();objectDetector=ml5.objectDetector('cocossd',modelLoaded)} /*     draw function     */function draw(){image(airConditioner,0,0,500,300);if(status!=''){for(var i=0;i<objects.length;i++){acx=objects[i].x;acy=objects[i].y;acwidth=objects[i].width;acheight=objects[i].height;acconfidence=objects[i].confidence;console.log(acx+' '+acy+' '+acwidth+' '+acheight+' '+acconfidence);}}}/*     modelLoaded function     */function modelLoaded(){console.log('Model has Been Loaded');status=true;objectDetector.detect(airConditioner,gotResult);}/*     gotResult function     */function gotResult(error,results){if(error){console.log('ERROR! '+error);console.log(results);objects=results;}}