//
x = 1
dino_direction = "right"
     function myMainLoop () {
        

         //function draw() {
	       var canvas = document.getElementById("canvas");
           if (canvas.getContext) {
             var ctx = canvas.getContext("2d");
  
             
             var background_img = new Image();
             background_img.onload = function() {
               ctx.drawImage(background_img,0,0);
               ctx.beginPath();
               ctx.moveTo(30,96);
               ctx.stroke();
             };
           
             background_img.src = 'Background.jpg'; 
           }
         if (dino_direction == "right") {
             var dino_right = new Image();
             dino_right.onload = function() {
               ctx.drawImage(dino_right,x,15);
               ctx.beginPath();
               ctx.moveTo(30,96);
               ctx.stroke();
             };
             dino_right.src = 'dino_right.jpg';
    	     x += 5
         }
         if (dino_direction == "left") {
             var dino_left = new Image();
             dino_left.onload = function() {
               ctx.drawImage(dino_left,x,15);
               ctx.beginPath();
               ctx.moveTo(30,96);
               ctx.stroke();
             };
             dino_left.src = 'dino_left.jpg';
             x -= 5
         }
         if (x > 410) {
              dino_direction = "left"
         }
         if (x < -50) {
              dino_direction = "right"
         }
        	 
    	 //}
         
     }
setInterval(myMainLoop, 100);

