var rightKey = false,
leftKey = false,
upKey = false,
downKey = false,
ship_x = (width / 2) - 25, 
ship_y = height - 75, 
ship_w = 50, 
ship_h = 50,
ship;

var laserTotal = 2, lasers = [];
var laserTotal2 = 2, lasers2 = [];
function drawShip() {
    if (rightKey) ship_x += 5;
    else if (leftKey) ship_x -= 5;
    if (upKey) ship_y -= 5;
    else if (downKey) ship_y += 5;
    if (ship_x <= 0) ship_x = 0;
    if ((ship_x + ship_w) >= width) ship_x = width - ship_w;
     if (ship_y <= 0) ship_y = 0;
    if ((ship_y + ship_h) >= height) ship_y = height - ship_h;
     ctx.drawImage(ship, ship_x, ship_y);
   
   }

function drawLaser() {
    if (lasers.length)
      for (var i = 0; i < lasers.length; i++) {
        ctx.fillStyle = '#f00';
        ctx.fillRect(lasers[i][0],lasers[i][1],lasers[i][2],lasers[i][3])
      }
  }

  function moveLaser() {
    for (var i = 0; i < lasers.length; i++) {
      if (lasers[i][1] > -11) {
        lasers[i][1] -= 10;
      } else if (lasers[i][1] < -10) {
        lasers.splice(i, 1);
      }
    }
  }

  function shipCollisionBonus() {
      var ship_xw = ship_x + ship_w,
          ship_yh = ship_y + ship_h;
       for (var i =0; i < bonuses.length; i++){
        //Coin supérieur gauche
        if (ship_x > bonuses[i][0] && ship_x < bonuses[i][0] + bonus_w && ship_y > bonuses[i][1] && ship_y < bonuses[i][1] + bonus_h) {
          bonuses.splice(i,1);
          score+= 10;
          bonusSong.play();
        };
        // Coin supérieur droit
        if (ship_xw < bonuses[i][0] + bonus_w && ship_xw > bonuses[i][0] && ship_y > bonuses[i][1] && ship_y < bonuses[i][1] + bonus_h) {
        bonuses.splice(i,1);
        score+= 10;
        bonusSong.play();
         };
        //Coin inférieur gauche
        if (ship_yh > bonuses[i][1] && ship_yh < bonuses[i][1] + bonus_h && ship_x > bonuses[i][0] && ship_x < bonuses[i][0] + bonus_w){
        bonuses.splice(i,1); 
        score+= 10;
        bonusSong.play();
        };    
        //coin inférieur droit
        if (ship_yh > bonuses[i][1] && ship_yh < bonuses[i][1] + bonus_h && ship_xw < bonuses[i][0] + bonus_w && ship_xw > bonuses[i][0]){
        bonuses.splice(i,1); 
        score+= 10;
        bonusSong.play();
        };
    }
}
function shipCollision() {
    var ship_xw = ship_x + ship_w,
        ship_yh = ship_y + ship_h;
    for (var i = 0; i < enemies.length; i++) {
      if (ship_x > enemies[i][0] && ship_x < enemies[i][0] + enemy_w && ship_y > enemies[i][1] && ship_y < enemies[i][1] + enemy_h) {
        checkLives();
      }
      if (ship_xw < enemies[i][0] + enemy_w && ship_xw > enemies[i][0] && ship_y > enemies[i][1] && ship_y < enemies[i][1] + enemy_h) {
        checkLives();
      }
      if (ship_yh > enemies[i][1] && ship_yh < enemies[i][1] + enemy_h && ship_x > enemies[i][0] && ship_x < enemies[i][0] + enemy_w) {
        checkLives();
      }
      if (ship_yh > enemies[i][1] && ship_yh < enemies[i][1] + enemy_h && ship_xw < enemies[i][0] + enemy_w && ship_xw > enemies[i][0]) {
        checkLives();
      }
    }
  }