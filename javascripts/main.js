// console.log("webpack working");

document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    // let posX = 20;
    // let  posY = 100;
    let i;
    let j;

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for(i = 0 ; i < 40; i+= 1) {
        for(j = 0 ; j < 20; j+=1){

            ctx.beginPath();
            ctx.fillStyle = "white";
            // After setting the fill style, draw an arc on the canvas
            ctx.arc(100 + i*20, 50 + j*20, 5, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
        }
    }


    // setInterval(function () {
    //     ctx.fillStyle = "black";
    //     ctx.fillRect(0, 0, canvas.width, canvas.height);
    //     posX += 1;
    //     posY += 0.25;

    //     // Draw a circle particle on the canvas
    //     ctx.beginPath();
    //     ctx.fillStyle = "white";
    //     // After setting the fill style, draw an arc on the canvas
    //     ctx.arc(posX, posY, 10, 0, Math.PI * 2, true);
    //     ctx.closePath();
    //     ctx.fill();
    // }, 30);
});