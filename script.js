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

// Рисование нолика
function drawO(x, y) {
    x += 50
    y += 50
    let r = 40
    ctx.beginPath()
    ctx.strokeStyle = "black"
    ctx.lineWidth = "4"
    ctx.arc(x, y, r, 2 * Math.PI, false)
    ctx.stroke()
}

// Рисование крестика
function drawX(x, y) {
    let num = 100
    ctx.strokeStyle = "white"
    ctx.lineWidth = "4"

    ctx.beginPath()
    ctx.moveTo(x + 10, y + 10)
    ctx.lineTo(x + num - 10, y + num - 10)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(x + num - 10, y + 10)
    ctx.lineTo(x + 10, y - 10 + num)
    ctx.stroke()
}

// Создание canvas
createCanvasLines()

// Считает координаты курсора относительно canvas
function getCursorPosition(canvas) {
    var rect = canvas.getBoundingClientRect();
    var x = canvas.clientX - rect.left;
    var y = canvas.clientY - rect.top;
    console.log("x: " + x + " y: " + y);
}

// Матрица, отображающая что происходит на canvas
let matr = [
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2]
]

// Кол-во объектов на canvas
let countClick = 0

// Вычисление координат относительно canvas
canvas.onclick = function getCoordinate(canvas) {
    k = document.getElementById("c1").getBoundingClientRect()
    var x = canvas.clientX - k.left
    var y = canvas.clientY - k.top
        //console.log("Координаты x: " + x + " y: " + y);
    let point = calculatePosition(x, y)
    changeMatrPoint(point)
}

// Показывает, к какой ячейке относится координата
function calculatePosition(x, y) {
    return [Math.floor(x / 100), Math.floor(y / 100)]
}


// Отрисовка крестика или нолика на canvas
function drawXorO(point, chetClick) {
    if (chetClick == 0) {
        drawO(point[0] * 100, point[1] * 100)
        firstOrSecondPlayer.innerHTML = "2"
        XorO.innerHTML = "X"
    } else {
        drawX(point[0] * 100, point[1] * 100)
        firstOrSecondPlayer.innerHTML = "1"
        XorO.innerHTML = "O"
    }
}

function clearCanvas() {
    ctx.clearRect(0, 0, 300, 300)
    createCanvasLines()
    matr = [
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2]
    ]
    countClick = 0
}

function newRound() {
    clearCanvas()
    firstPlayerCountNum = 0
    secondPlayerCountNum = 0
    secondPlayerCount.innerHTML = "0"
    firstPlayerCount.innerHTML = "0"
}