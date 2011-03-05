//
x = 1
     function myMainLoop () {
        
    	 console.log(x);
    	 x += 1
    }
setInterval(myMainLoop, 1000);


    function draw() {
      var canvas = document.getElementById("canvas");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
 
        var img = new Image();
        img.onload = function(){
          ctx.drawImage(img,250,0);
          ctx.beginPath();
          ctx.moveTo(30,96);
          ctx.stroke();
        };
        img.src = 'dino.jpg';
        
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (10, 10, 55, 30);
 
        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (30, 20, 55, 50);
        
        ctx.beginPath();
        ctx.moveTo(75,50);
        ctx.lineTo(100,75);
        ctx.lineTo(100,25);
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(175,75,50,0,Math.PI*2,true); // Outer circle
        ctx.moveTo(210,75);
        ctx.arc(175,75,35,0,Math.PI,false);   // Mouth (clockwise)
        ctx.moveTo(165,65);
        ctx.arc(160,65,5,0,Math.PI*2,true);  // Left eye
        ctx.moveTo(195,65);
        ctx.arc(190,65,5,0,Math.PI*2,true);  // Right eye
        ctx.stroke();
      }
    }
