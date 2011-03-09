yourlife_percent=100
e1life_percent=100
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
    
    var your_lifebar = new Image();
    your_lifebar.onload = function() {
      ctx.drawImage(your_lifebar, 0, 0, yourlife_percent * 2, 2, 189, 259, yourlife_percent * 2, 2)
      ctx.beginPath();
    };
    your_lifebar.src = 'lifebar.jpeg';
    
    enemies (ctx);
};

function enemies (ctx) {
    var enemy1 = new Image();
    enemy1.onload = function() {
      ctx.drawImage(enemy1,40,80);
      ctx.beginPath();
    };
    enemy1.src = 'enemy1.jpeg';
    
    var e1_lifebar = new Image();
    e1_lifebar.onload = function() {
      ctx.drawImage(e1_lifebar, 0, 0, e1life_percent, 2, 30, 30, e1life_percent, 2)
      ctx.beginPath();
    };
    e1_lifebar.src = 'lifebar.jpeg';
}

function point_it(event){
	pos_x = event.offsetX?(event.offsetX):event.pageX-document.getElementById("canvas").offsetLeft;
	pos_y = event.offsetY?(event.offsetY):event.pageY-document.getElementById("canvas").offsetTop;
    console.log("x = " + pos_x);
    console.log("y = " + pos_y);
    myMainLoop()
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
            console.log("fled!");
            reset ();
            //flee ();
            e1life_percent = 100
            yourlife_percent = 100
            
  		};
  	    
        if ((pos_x >= 132 && pos_x <= 318)) {
            console.log("fought!");
            reset ();
            fight ();
            turn = "enemies"
        };
        
        if ((pos_x >= 326 && pos_x <= 436)) {
            console.log("cast a spell!");
            reset ();
            //magic ();
            e1life_percent -= 10
            turn = "enemies"
        };
          	reset (canvas);
       	};
    };

function fight (ctx) {

    e1life_percent -= 1
    canvas.drawstring("qwertyuiop[]", 100,100);
    canvas.paint
}
    
function reset () {
	pos_x = -1;
	pos_y = -1;
	pxl_index = 0;
};

function enemy1_turn(ctx) {
	yourlife_percent -= 1
	turn = "yours"
}


function myMainLoop () {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d"); 
    drawto(ctx);
    //problem: possible fix: only run your_turn on your turn. Turn variable--fixed, after your turn is enemy turn
    if (turn == "yours") {
    	your_turn(ctx);
    };
        if (turn == "enemies"){
        	drawto(ctx);
        	enemy1_turn(ctx);
        }
    
    };
}; 
setInterval(myMainLoop, 500);
