let canvas = document.getElementById('canvas');

let ctx = canvas.getContext('2d');
let mouseX;
let mouseY;
let k = 0;
let cursor_radius = 100;
let particles_array = [];
let particle = {vx: 0, vy: 0, x: 0, y: 0 };
let p;
let force, distance;
let dx, dy, vx, vy;
let theta;
let changed_particles_array = [];
let gi = 0.95;
let cl = 0;




let gravity_input = document.getElementById('gravity');

gravity_input.addEventListener("input", updateGi);

function updateGi(val){
    gi = gravity_input.value
    // console.log(gi);
}



function setup(){
    ctx.fillStyle = "#191919";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (i = 0; i < 50; i += 1) {
        for (j = 0; j < 50; j += 1) {
            
            let i1 = 230 + i * 11;

            let j1 = 70 + j * 11;
            
            p = Object.create(particle);
            p.x = i1;
            p.original_x = i1;
            p.y = j1;
            p.original_y = j1;
            particles_array[k] = p;
            p.motion = "static";
            k += 1; 

        }
    }

    for (i = 0; i < 50; i += 1) {
        for (j = 0; j < 50; j += 1) {

            let i1 = 231 + i * 11;

            let j1 = 70 + j * 11;

            p = Object.create(particle);
            p.x = i1;
            p.original_x = i1;
            p.y = j1;
            p.original_y = j1;
            particles_array[k] = p;
            p.motion = "static";
            k += 1;

        }
    }


    boundary = canvas.getBoundingClientRect();
    
    canvas.addEventListener('mousemove', function (event) {
        mouseX = event.clientX - boundary.left;
        mouseY = event.clientY - boundary.top;
    });
}


function update(){
    for (let k = 0; k < particles_array.length; k++) {
        
        p = particles_array[k];
        dx = mouseX - p.x;
        dy = mouseY - p.y;


        //basic physics credit goes to @soulwire https://github.com/soulwire

        distance = (dx**2) + (dy ** 2);
        force = -(cursor_radius**2)/ distance;

        if ( distance < cursor_radius ** 2) {
            theta = Math.atan2(dy, dx);
            p.vx += force * Math.cos(theta);
            p.vy += force * Math.sin(theta);
            p.motion = "dynamic";
        }
        p.vx *= gi;
        p.vy *= gi;
        
        p.x += p.vx + (p.original_x - p.x) * (gi-0.7);
        p.y += p.vy + (p.original_y - p.y) * (gi - 0.7);
        
    }
    draw();
    window.requestAnimationFrame(update);
}



function draw() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width, canvas.height);

    for (let k = 0; k < particles_array.length; k++) {
        p = particles_array[k];
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2, true);
        ctx.closePath();
        cl = cl % 360;
        if(k > 2499){
            ctx.fillStyle = "hsl("+cl+",100%, 50%)"
        } else {

            ctx.fillStyle = "hsl(" + (cl + 180) + ", 100%, 50%)"
        } 
        cl += 0.00009
        ctx.fill();
        // }
    }
    
}

setup();
window.requestAnimationFrame(update);