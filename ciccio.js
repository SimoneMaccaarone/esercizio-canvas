const myCanvas = document.getElementById('my-canvas');
const ctx = myCanvas.getContext('2d');

//Piano cartesiano
//  X
ctx.moveTo(0, 500);
ctx.lineTo(1000, 500);
line(500, 0, 500, 1000);// cartesiano Y



ctx.strokeStyle = randomColor()

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




// createRombhus();

// function createRombhus() {
//     let cordinate = 0
//     for (let i = 0; i < 20; i++) {
//         let lineToX = cordinate += 50;

//         console.log(cordinate);
//     }
// }




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