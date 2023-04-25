const myCanvas = document.getElementById('my-canvas');
const ctx = myCanvas.getContext('2d');



let newGeneration = Generation.generateRandom(50, myCanvas.width, myCanvas.height);
console.log(newGeneration);


function step() {
    newGeneration.draw(ctx);
    ctx.fillStyle = 'rgba(0,0,0,0.03)'
    ctx.fillRect(0, 0, myCanvas.width, myCanvas.height)


    if (newGeneration.isDead()) {
        ctx.fillStyle = 'rgba(0,0,0,1)'
        ctx.fillRect(0, 0, myCanvas.width, myCanvas.height)
        newGeneration = Generation.generateRandom(50, myCanvas.width, myCanvas.height);
        // ctx.strokeStyle = randomColor();
        rombo();
    }
    window.requestAnimationFrame(step);
}
function rombo() {
    ctx.strokeStyle = randomColor();
    //Piano cartesiano
    line(0, 500, 1000, 500); // cartesiano X
    line(500, 0, 500, 1000); // cartesiano Y
    xyTopLeft();
    xyDownLeft();
    xyTopRight();
    xyDownRight();

//     window.requestAnimationFrame(rombo)
}

window.requestAnimationFrame(step);
// window.requestAnimationFrame(rombo);




function xyTopLeft() {
    // init line XY top-left
    line(500, 450, 0, 500);
    line(500, 400, 50, 500);
    line(500, 350, 100, 500);
    line(500, 300, 150, 500);
    line(500, 250, 200, 500);
    line(500, 200, 250, 500);
    line(500, 150, 300, 500);
    line(500, 100, 350, 500);
    line(500, 50, 400, 500);
    line(500, 0, 450, 500);
}
function xyTopRight() {
    // init line top-right
    line(500, 0, 550, 500);
    line(500, 50, 600, 500);
    line(500, 100, 650, 500);
    line(500, 150, 700, 500);
    line(500, 200, 750, 500);
    line(500, 250, 800, 500);
    line(500, 300, 850, 500);
    line(500, 350, 900, 500);
    line(500, 400, 950, 500);
    line(500, 450, 1000, 500);
}
function xyDownLeft() {
    // init line XY down-left
    line(500, 1000, 450, 500);
    line(500, 950, 400, 500);
    line(500, 900, 350, 500);
    line(500, 850, 300, 500);
    line(500, 800, 250, 500);
    line(500, 750, 200, 500);
    line(500, 700, 150, 500);
    line(500, 650, 100, 500);
    line(500, 600, 50, 500);
    line(500, 550, 0, 500);
}
function xyDownRight() {
    // init line XY down-right
    line(500, 1000, 550, 500);
    line(500, 950, 600, 500);
    line(500, 900, 650, 500);
    line(500, 850, 700, 500);
    line(500, 800, 750, 500);
    line(500, 750, 800, 500);
    line(500, 700, 850, 500);
    line(500, 650, 900, 500);
    line(500, 600, 950, 500);
    line(500, 550, 1000, 500);
}

function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return ctx.fillStyle = `rgb(${red},${green},${blue})`;
}

function line(moveToX, moveToY, lineToX, lineToY) {
    ctx.moveTo(moveToX, moveToY);
    ctx.lineTo(lineToX, lineToY);
    ctx.stroke();
}