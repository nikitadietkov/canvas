let cnvs = document.getElementById("cnvs");
let ctx = cnvs.getContext("2d");

cnvs.width = 700;
cnvs.height = 500;

ctx.lineWidth = 10

ctx.beginPath()
ctx.arc(350, 250, 200, (20 * Math.PI) / 180, (320 * Math.PI) / 180)
ctx.lineTo(350, 250)
ctx.closePath()
ctx.stroke()

ctx.fillStyle = "yellow"
ctx.beginPath()
ctx.arc(350, 250, 200, (20 * Math.PI) / 180, (320 * Math.PI) / 180)
ctx.lineTo(350, 250)

ctx.closePath()
ctx.fill()

ctx.strokeStyle = "black"
ctx.beginPath()
ctx.arc(390, 110, 30, (360 * Math.PI) / 180, 0)
ctx.closePath()
ctx.stroke()

ctx.fillStyle = "#333"
ctx.beginPath()
ctx.arc(390, 110, 30, (360 * Math.PI) / 180, 0)
ctx.closePath()
ctx.fill()