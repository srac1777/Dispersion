let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let mouseX;
let mouseY;
let k = 0;
let cursor_radius = 30;

function update() {
    draw();

    window.requestAnimationFrame(update);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    for (i = 0; i < 120; i += 1) {
        for (j = 0; j < 60; j += 1) {
            ctx.beginPath();
            let i1 = 50 + i * 7;

            let j1 = 25 + j * 7;
            // console.log(mouseX);


            if (Math.pow(mouseX - i1, 2) + Math.pow(mouseY - j1, 2) < Math.pow(cursor_radius, 2)) {
                if (i1 < mouseX && j1 < mouseY) {

                    ctx.arc(i1 - cursor_radius, j1 - cursor_radius, 1, 0, Math.PI * 2, true);
                } else if (i1 < mouseX && j1 > mouseY) {
                    ctx.arc(i1 - cursor_radius, j1 + cursor_radius, 1, 0, Math.PI * 2, true);
                } else if (i1 > mouseX && j1 < mouseY) {
                    ctx.arc(i1 + cursor_radius, j1 - cursor_radius, 1, 0, Math.PI * 2, true);
                } else if (i1 > mouseX && j1 > mouseY) {
                    ctx.arc(i1 + cursor_radius, j1 + cursor_radius, 1, 0, Math.PI * 2, true);
                }
                // ctx.arc(i1 + 30, j1 + 30, 1, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.fillStyle = "red";
            }
            else {
                ctx.arc(i1, j1, 1, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.fillStyle = "white";
            }
            ctx.fill();

        }

    }
    // debugger

}


window.requestAnimationFrame(update);



canvas.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});



