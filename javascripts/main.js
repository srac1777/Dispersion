let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let mouseX;
let mouseY;
let k = 0;
let cursor_radius = 30;
let particles_array = [];
let particle = {
    vx: 0,
    vy: 0,
    x: 0,
    y: 0
};
let p;
let force, distance;
let dx, dy, vx, vy;
let theta;


function setup(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (i = 0; i < 120; i += 1) {
        for (j = 0; j < 60; j += 1) {
            
            let i1 = 50 + i * 7;

            let j1 = 25 + j * 7;
            
            p = Object.create(particle);
            p.x = i1;
            p.original_x = i1;
            p.y = j1;
            p.original_y = j1;
            particles_array[k] = p;
            
            k += 1; 
        }
    }
    console.log(particles_array);
    
    canvas.addEventListener('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
}


function update(){
    for (let k = 0; k < particles_array.length; k++) {
        
        p = particles_array[k];
        dx = mouseX - p.x;
        dy = mouseY - p.y;


        //all physics credit goes to @soulwire https://github.com/soulwire

        distance = (dx**2) +  (dy**2);
        force = -(cursor_radius**2)/ distance;

        if ( distance < cursor_radius**2) {
            theta = Math.atan2(dy, dx);
            p.vx += force * Math.cos(theta);
            p.vy += force * Math.sin(theta);
        }

        p.vx *= 0.8;
        p.vy *= 0.8;
        p.x += p.vx + (p.original_x - p.x) * 0.2
        p.y += p.vy + (p.original_y - p.y) * 0.2

        
    }
    draw();
    window.requestAnimationFrame(update);
}



function draw() {

    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillStyle = "black"
    ctx.fillRect(0,0,canvas.width, canvas.height);

    for (let k = 0; k < particles_array.length; k++) {
        p = particles_array[k];
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = "white";
        ctx.fill();
        
    }
    
}

setup();
window.requestAnimationFrame(update);








//===================================================================================================================================================

// console.log("webpack working");

// document.addEventListener("DOMContentLoaded", () => {

// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');


// var ball = {
//     x: 100,
//     y: 100,
//     vx: 5,
//     vy: 1,
//     radius: 30,
//     color: 'rgba(0,0,0,1)',
//     draw: function () {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
//         ctx.closePath();
//         ctx.fillStyle = this.color;
//         ctx.fill();
//     }
// };

// function clear(e) {
//     let mx = e.clientX;
//     let my = e.clientY;
//     let cursor_radius = 30;    
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
//     for(i = 0 ; i < 120; i+= 1) {
//         for(j = 0 ; j < 60; j+=1){
//             ctx.beginPath();
//             // After setting the fill style, draw an arc on the canvas
//             // debugger
//             let i1 = 50 + i * 7;

//             let j1 = 25 + j * 7; 

//             // if ((i1 - 40 < mx && i1 + 40 > mx) && (j1 - 40 < my && j1 + 40 > my)){
//             //     if( i1 < mx && j1 < my){

//             //         ctx.arc(i1 - 30, j1 - 30, 1, 0, Math.PI * 2, true);
//             //     } else if (i1 < mx && j1 > my) {
//             //         ctx.arc(i1 - 30, j1 + 30, 1, 0, Math.PI * 2, true);
//             //     } else if (i1 > mx && j1 < my) {
//             //         ctx.arc(i1 + 30, j1 - 30, 1, 0, Math.PI * 2, true);
//             //     } else if (i1 > mx && j1 > my) {
//             //         ctx.arc(i1 + 30, j1 + 30, 1, 0, Math.PI * 2, true);
//             //     }
//             //     ctx.closePath();
//             //     ctx.fillStyle = "red";
//             // } else {
//             //     ctx.arc(i1, j1, 1, 0, Math.PI * 2, true);
//             //     ctx.closePath();
//             //     ctx.fillStyle = "white";
//             // }
            
//                 if(Math.pow(mx-i1,2) + Math.pow(my-j1, 2) <= Math.pow(cursor_radius,2)){
//                     if (i1 < mx && j1 < my) {

//                     ctx.arc(i1 - cursor_radius, j1 - cursor_radius, 1, 0, Math.PI * 2, true);
//                 } else if (i1 < mx && j1 > my) {
//                     ctx.arc(i1 - cursor_radius, j1 + cursor_radius, 1, 0, Math.PI * 2, true);
//                 } else if (i1 > mx && j1 < my) {
//                     ctx.arc(i1 + cursor_radius, j1 - cursor_radius, 1, 0, Math.PI * 2, true);
//                 } else if (i1 > mx && j1 > my) {
//                     ctx.arc(i1 + cursor_radius, j1 + cursor_radius, 1, 0, Math.PI * 2, true);
//                 }
//                     // ctx.arc(i1 + 30, j1 + 30, 1, 0, Math.PI * 2, true);
//                     ctx.closePath();
//                 ctx.fillStyle = "red";
//                 }
//                 else {
//                 ctx.arc(i1, j1, 1, 0, Math.PI * 2, true);
//                 ctx.closePath();
//                 ctx.fillStyle = "white";
//             }
            


//             ctx.fill();

//         }
//     }
// }

// canvas.addEventListener('mousemove', function (e) {

//         clear(e);
//         ball.x = e.clientX;
//         ball.y = e.clientY;
//         ball.draw();

// });


// ball.draw();

// });



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


    // function draw() {
    //     clear();
    //     ball.draw();
    //     ball.x += ball.vx;
    //     ball.y += ball.vy;

    //     if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    //         ball.vy = -ball.vy;
    //     }
    //     if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    //         ball.vx = -ball.vx;
    //     }

    //     raf = window.requestAnimationFrame(draw);
    // }