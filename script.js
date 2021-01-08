let canvas = document.getElementById("c1")
let ctx = canvas.getContext("2d")


function createCanvasLines() {
    ctx.strokeStyle = "#353a2d"
    ctx.lineWidth = "2"
    ctx.beginPath()
    ctx.moveTo(0, 100)
    ctx.lineTo(300, 100)
    ctx.stroke()

    ctx.strokeStyle = "#353a2d"
    ctx.lineWidth = "2"
    ctx.beginPath()
    ctx.moveTo(0, 200)
    ctx.lineTo(300, 200)
    ctx.stroke()

    ctx.strokeStyle = "#353a2d"
    ctx.lineWidth = "2"
    ctx.beginPath()
    ctx.moveTo(100, 0)
    ctx.lineTo(100, 300)
    ctx.stroke()

    ctx.strokeStyle = "#353a2d"
    ctx.lineWidth = "2"
    ctx.beginPath()
    ctx.moveTo(200, 0)
    ctx.lineTo(200, 300)
    ctx.stroke()
}