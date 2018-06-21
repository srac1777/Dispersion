let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let mouseX;
let mouseY;
let k = 0;
let cursor_radius = 30;
let particles_array = [];
let particle = {vx: 0, vy: 0, x: 0, y: 0 };
let p;
let force, distance;
let dx, dy, vx, vy;
let theta;
let changed_particles_array = [];


function setup(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (i = 0; i < 120; i += 1) {
        for (j = 0; j < 60; j += 1) {
            
            let i1 = 50 + i * 4;

            let j1 = 25 + j * 4;
            
            p = Object.create(particle);
            p.x = i1;
            p.original_x = i1;
            p.y = j1;
            p.original_y = j1;
            particles_array[k] = p;
            p.changed = false;
            k += 1; 
        }
    }

    // for (let k = 0; k < particles_array.length; k++) {
    //     // debugger
    //     p = particles_array[k];
    //     ctx.beginPath();
    //     ctx.arc(p.x, p.y, 1, 0, Math.PI * 2, true);
    //     ctx.closePath();
    //     ctx.fillStyle = "white";
    //     ctx.fill();
    //     // p.changed = true;
    // }
    
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


        //physics credit goes to @soulwire https://github.com/soulwire

        distance = (dx**2) + (dy**2);
        force = -(cursor_radius**2)/ distance;

        if ( distance < cursor_radius**2) {
            theta = Math.atan2(dy, dx);
            p.vx += force * Math.cos(theta);
            p.vy += force * Math.sin(theta);
            p.changed = true
            // changed_particles_array.push(p)
        }
        p.vx *= 0.9;
        p.vy *= 0.9;
        // if(p.vx < 0.001 || p.vy < 0.001){
        //     p.changed = false
        //     // changed_particles_array.delete(p)
        // }
        p.x += p.vx + (p.original_x - p.x) * 0.25
        p.y += p.vy + (p.original_y - p.y) * 0.25
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = "white";
        ctx.fill();
        
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
        if (p.changed === true) {
            
        
            ctx.beginPath();
            ctx.arc(p.x, p.y, 1, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = "white";
            ctx.fill();
        }  
        
        
    }
    
}

setup();
window.requestAnimationFrame(update);