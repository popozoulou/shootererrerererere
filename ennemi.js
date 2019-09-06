
var enemyTotal = 5,
  enemies = [],
  enemy_x = 50,
  enemy_y = -45,
  enemy_w = 50,
  enemy_h = 50,
  speed = 3;
  enemy;
  
  for (var i = 0; i < enemyTotal; i++) {
    enemies.push([enemy_x, enemy_y, enemy_w, enemy_h, speed]);
    enemy_x += enemy_w + 60;
   }
  function enemy(id,enemy_x,enemy_y,enemy_w, enemy_h) {
    this.id = id;
    this.enemy_x = enemy_x;
    this.enemy_y = enemy_y;
    this.enemy_w = enemy_w;
    this.enemy_h = enemy_h;
    }
    
  function spawnEnemy(){
  for (var i = 0; i < enemyTotal; i++) {
 enemies.push([enemy_x, enemy_y, enemy_w, enemy_h, speed]);
 enemy_x += enemy_w + 60;
    }   
}

function drawEnemies() {
for (var i = 0; i < enemies.length; i++) {
    ctx.drawImage(enemy, enemies[i][0], enemies[i][1]);
 }
}

function moveEnemies() {
  for (var i = 0; i < enemies.length; i++) {
   if (enemies[i][1] < height) {
     enemies[i][1] += enemies[i][4];
   } else if (enemies[i][1] > height - 1) {
      enemies[i][1] = -45;
    }
  }
}

function hitTest() {
  var temp_x,
  temp_y,
  temp_w,
  temp_h;
var remove = false;
  for (var i = 0; i < lasers.length; i++) {
    for (var j = 0; j < enemies.length; j++) {
      // TODO : verfier que l'ennemi est bien devant
      if (lasers[i][1] <= (enemies[j][1] + enemies[j][3]) && lasers[i][0] >= enemies[j][0] && lasers[i][0] <= (enemies[j][0] + enemies[j][2]) && 
      lasers[i][1] >= (enemies[j][1] + 10)) {
        remove = true;
        temp_x = enemies[j][0];
        temp_y = enemies[j][1];
        temp_w = enemies[j][2];
        temp_h = enemies[j][3];
        var bonusSpawn = bonuses.push([temp_x, temp_y, temp_w, temp_h, speed]);
        enemies.splice(j, 1);
        hitSong.play();
        score+= 10;
        enemies.push([(Math.random() * 500) + 50, -45, enemy_w, enemy_h, speed]);
        //break;
      }
    }
    if (remove == true) {
      lasers.splice(i, 1);
      remove = false;
    }
  }
}
