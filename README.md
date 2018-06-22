# Welcome to the Dispersion Repo!

Dispersion is a retro-themed interactive client-side JavaScript project that enables users to distort the space-time continuum of particles.

![dispersion](https://github.com/srac1777/Dispersion/blob/master/wiki/dispersion.gif "dispersion interaction")

### Intro

I made this purely frontend JavaScript project to demonstrate particle motion while allowing for changes in gravity dynamically. The mouse cursor disrupts the equilibrium of the particles and sets them into motion. Each particle has a gravity towards its equilibrium position, and this gravity can be altered to either attract or repel the particle.

### Technologies Used

I used vanilla JavaScript for the App's code. All the rendering was done using Canvas. The repulsion and collision are applied physics formulae and mathematics.

### Code

This project involved applying physics formulae and mathematical manipulation to adjust gravity. 
This snippet of code is what made the gravity distortion possible
```javascript
     p.vx *= gravity_input;
     p.vy *= gravity_input;
        
     p.x += p.vx + (p.original_x - p.x) * (gravity_input - 0.7);
     p.y += p.vy + (p.original_y - p.y) * (gravity_input - 0.7);
```

I used Event Handlers to keep track of the cursor position at all times so that the user can interact with the particles
```javascript
    boundary = canvas.getBoundingClientRect();
     
    canvas.addEventListener('mousemove', function (event) {
        mouseX = event.clientX - boundary.left;
        mouseY = event.clientY - boundary.top;
    });
```


### Future version features

- [ ] have more particles 
- [ ] change number of particles with a slider
- [ ] background music
