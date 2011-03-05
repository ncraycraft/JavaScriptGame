turn = "yours"
fight_block_height = 150;
reset();

function drawto (ctx) {
    ctx.clearRect(0,0,450,300);
    
    var background1 = new Image();
    background1.onload = function() {
      ctx.drawImage(background1,0,0);
    };
    background1.src = 'background1.png';
    
    var fight_screen_layer2 = new Image();
    fight_screen_layer2.onload = function() {
      ctx.drawImage(fight_screen_layer2,0,0);
    };
    fight_screen_layer2.src = 'fight_screen_layer2.gif';
    
    var battle_character = new Image();
    battle_character.onload = function() {
      ctx.drawImage(battle_character,90,204);
      ctx.beginPath();
    };
    battle_character.src = 'battle_sprite_character1.gif';   
};

function point_it(event){
	pos_x = event.offsetX?(event.offsetX):event.pageX-document.getElementById("canvas").offsetLeft;
	pos_y = event.offsetY?(event.offsetY):event.pageY-document.getElementById("canvas").offsetTop;
    console.log("x = " + pos_x);
    console.log("y = " + pos_y);
};

function your_turn (ctx) {
	
    var fight_block = new Image();
    fight_block.onload = function() {
      ctx.drawImage(fight_block,5,fight_block_height);
      ctx.beginPath();
    };
    fight_block.src = 'fight_block.png'; 
    
           
  	if ((pos_y > fight_block_height + 8 && pos_y < fight_block_height + 38)) {
  		if ((pos_x >= 14 && pos_x <= 124)) {
            pxl_index = 1;
  		};
  	    
        if ((pos_x >= 132 && pos_x <= 318)) {
            pxl_index = 2;
        };
        
        if ((pos_x >= 326 && pos_x <= 436)) {
            pxl_index = 3;
        };
        
  		switch (pxl_index) {
        case 1: 
          	console.log("fled!");
            reset ();
            //flee ();
            break;
                    
        case 2:
            console.log("fought!");
            reset ();
            //fight ();
            break;
               
        case 3:
            console.log("cast a spell!");
            reset ();
            //magic ();
            break;
                
        default:
          	reset ();
          	break
       	};
    };    
};
    
function reset () {
	pos_x = -1;
	pos_y = -1;
	pxl_index = 0;
};

function myMainLoop () {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d"); 
    drawto(ctx);
    //problem: possible fix: only run your_turn on your turn. Turn variable
    your_turn (ctx);    
	};
}; 
setInterval(myMainLoop, 500);
