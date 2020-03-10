
let divsToPuzzle="";

    let cols=8;
    let rows=4;
    
   let previmg = "";
   let current = "";    // biezacy klikniety

function choice(myimg){
    let imgsrc="";
    let ximg = document.getElementById(myimg); 
   current = myimg;

    console.log("choice :" + myimg);
    console.log("prev :" + previmg);
    // Podświetlenie miniatury obrazka wybranego
    ximg.style.opacity=1;
    ximg.style.boxShadow="0px 0px 10px white";

    // Nowy obrazek do podgladu
    imgsrc = "img/800x440/" + myimg + ".jpg";
    document.getElementById("prev").style.backgroundImage = "url('"+imgsrc+"')";

   
   // ximg.addEventListener('mouseout', function() {ximg.style.opacity=1; console.log("m.out list. op1-" + myimg )});
 
       if(previmg!=""){document.getElementById(previmg).style.opacity=0.5; document.getElementById(previmg).style.boxShadow="none";}
        previmg = myimg;
   

    init(imgsrc);
}

function init(imgsrc){
    document.getElementById("pieces").innerHTML ="Start";
    var imagePieces = [];
    var w = 100;
    var h = 110;
    let iter=0;

    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
 
    var im = new Image();
    //im.setAttribute('crossOrigin', 'anonymous'); 
   //im.src = "img/minecraft2-800x440.jpg";
   im.src = imgsrc;
   console.log("do pociecia: " + imgsrc);
   
   im.onload = function(){
    let imgContainer = '';
        for(i=0; i<cols; i++){
            for(j=0; j<rows; j++){
                x=i*w;
                y=j*h;
                ctx.drawImage(im,x,y,w,h,0,0,w,h);
             iter++;
               imgContainer = imgContainer + '<img style="margin: 5px;" ondrop="dontDrop(event)" id="imgID' + i.toString() + j.toString() + '" src="' + canvas.toDataURL("image/jpg") + '" class="img" onmouseover="blink(this)"; onmouseout="normal(this)";  draggable="true" ondragstart="drag(event)" >';
               //document.write('<img style="border: 1px solid black; margin: 5px;" src="' + canvas.toDataURL("image/jpg") + '" >');
               //imgContainer = imgContainer + iter.toString();
            }
        }
       //console.log("init: " + iter + imgContainer);
       document.getElementById("pieces").innerHTML = imgContainer;
   } //end f im.onload
 
}


function blink(image){
    image.style.boxShadow="0px 0px 10px white";
}
function normal(image){
   // image.style.border="0px";
   image.style.boxShadow="none";
}

function blinkPrev(image,trig){
    if(image!=current){
    console.log("blinkPrev: " + image + "tr: "+ trig);
    let ximg1 = document.getElementById(image); 
    ximg1.style.opacity=trig; 
    }

}



function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    document.getElementById(data).style.margin="0px";
  }
  function dontDrop(ev) {
      alert("Nie można na obrazek przenieść");
    return false;
  }

for(i=1; i<=cols*rows; i++){

    divsToPuzzle = divsToPuzzle + '<div class="item" id="item'+i+'" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
    if(i % cols == 0)  divsToPuzzle = divsToPuzzle + '<div style="clear: both;"></div>';

}




document.addEventListener("keydown", function(event) {
  if(event.which == 32){
    document.getElementById("prev").style.visibility="visible";
    
  }
});
document.addEventListener("keyup", function(event) {
  if(event.which == 32){
    document.getElementById("prev").style.visibility="hidden";
  }
});




document.getElementById("puzzle").innerHTML = divsToPuzzle;
