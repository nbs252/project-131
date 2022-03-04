img = "";
status1 = "";

function preload(){
img = loadImage("Bedroom-mob.jpg");
}

function setup(){
canvas = createCanvas(640, 420);
canvas.center();
objectDetecter = ml5.objectDetecter('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : detecting objects";
}

function modelLoaded(){
console.log("Model Loaded!");
status1 = true;
objectDetecter.detect(img, gotResult);
}

function draw(){
image(img, 0, 0, 640, 420);
fill("#FF0000");
text("bed room", 45, 75);
noFill();
stroke("#FF0000");
rect(30, 60, 450, 350);

fill("#FF0000");
text("Lamp", 320, 120);
noFill();
stroke("#FF0000");
rect(300, 90, 270, 320);
}

function gotResult(error, results){
if(error){
console.log(error);
}
console.log(results);
}