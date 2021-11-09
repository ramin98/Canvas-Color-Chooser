const canvas = document.createElement('canvas')
const canvasTwo = document.createElement('canvasTwo')
const w = canvas.width = 600
const h = canvas.height = 600
canvas.style.border = 'solid 1px'
const ctx = canvas.getContext("2d");

function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
  var rot = Math.PI / 2 * 3;
  var x = cx;
  var y = cy;
  var step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius)
  for (i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y)
    rot += step

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y)
    rot += step
  }
  ctx.lineTo(cx, cy - outerRadius)
  ctx.closePath();
  ctx.lineWidth = 5;

}

drawStar(75, 100, 5, 30, 15);
ctx.fillStyle = 'yellow';
ctx.fill();
drawStar(150, 100, 5, 30, 15);
ctx.fillStyle = 'black';
ctx.fill();
drawStar(220, 100, 5, 30, 15);
ctx.fillStyle = 'red';
ctx.fill();
drawStar(300, 100, 5, 30, 15);
ctx.fillStyle = 'blue';
ctx.fill();
drawStar(370, 100, 5, 30, 15);
ctx.fillStyle = 'green';
ctx.fill();
canvas.onclick = function(e) {
  const x = e.offsetX;
  const y = e.offsetY;
  const img_data = ctx.getImageData(x, y, 1, 1);
  const pix = img_data.data;
  const red = pix[0];
  const green = pix[1];
  const blue = pix[2];
  const alpha = pix[3];
  document.getElementById("canvasTwo").style.backgroundColor = `rgba(${pix.join(',')})`
}
document.body.appendChild(canvas)