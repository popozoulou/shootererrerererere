var starfield,
    starX = 0, starY = 0, starY2 = -600;

//Draws and animates the background starfield
function drawStarfield() {
  ctx.drawImage(starfield,starX,starY);
  ctx.drawImage(starfield,starX,starY2);
  if (starY > 600) {
    starY = -599;
  }
  if (starY2 > 600) {
    starY2 = -599;
  }
  starY += 1;
  starY2 += 1;
} 