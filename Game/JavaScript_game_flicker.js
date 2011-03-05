

     function myMainLoop () {
        	 
	       var canvas = document.getElementById("canvas");
           if (canvas.getContext) {
             var ctx = canvas.getContext("2d");
             
             
             globalCompositeOperation = 'destination-over'
             var background1 = new Image();
             background1.onload = function() {
               ctx.drawImage(background1,0,0);
             };
             background1.src = 'background1.gif';
            	
             
             var fight_screen_layer2 = new Image();
             fight_screen_layer2.onload = function() {
               ctx.drawImage(fight_screen_layer2,0,0);
             };
             fight_screen_layer2.src = 'fight_screen_layer2.gif';

             
             var battle_character = new Image();
             battle_character.onload = function() {
               ctx.drawImage(battle_character,90,204);
               ctx.beginPath();
               ctx.moveTo(30,96);
               ctx.stroke();
             };
             battle_character.src = 'battle_sprite_character1.gif';
           };
     };
setInterval(myMainLoop, 100);
